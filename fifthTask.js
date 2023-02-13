
export const fifthTask = {
  studentUser: new Map(),
  securityUser: new Map(),
  makeNewUser(newUser) {
    const {name, surname, course, faculty, security:{password, email}, ...subjects} = newUser;
    if(!Object.keys(newUser).includes('security') || !name || !surname || !course || !faculty || !password || !email){
      throw new Error("Data is incomplete!");
    }
    if(!isNaN(name) || !isNaN(surname) || !isNaN(faculty) || isNaN(+course)){
      throw new Error("Wrong format!");
    }
    if(course < 1 || course > 9) {    //разом з аспірантурою
      throw new Error("Incorrect course!");
    }
    let info = {
      username: fifthTask.createUsername(name, surname),
      mail: email,
      averageMark: this.averageMarks(Object.values(subjects)),
      subjects: subjects,
    }
    this.studentUser.set(info.username, info);
    this.securityUser.set(info.username, password);
    return info;
  },
  createUsername(name, surname) {
    return `${name} ${surname}`
  },
  createMarks(subjects) {
    if(!subjects) return [];
    else {
      let marks = Object.values(subjects);
      for (let i = 0; i < marks.length; i++) {
        if (isNaN(+marks[i])) {
          throw new Error("Marks have incorrect format");
        }
      }
      return marks;
    }
  },
  averageMarks(marks) {
    if (marks.length === 0) return 0;

    return marks.reduce( (sum, marks) => (+sum) + (+marks))/marks.length;
    },
  averageMarksByUsername(username, password) {
    const[info, passwordCheck] = [fifthTask.studentUser.get(username), fifthTask.securityUser.get(username)];
    if(password !== passwordCheck) throw new Error("Incorrect password");
    else return info.averageMark;
  }
}
