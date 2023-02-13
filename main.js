import {testFirstTask, testSecondTask, testThreeTask, testFourthTask, testFifthTask, testSixthTask } from "./test.js";

try {
  console.log("\nTask # 1\n");
  testFirstTask();
  console.log("Tests passed successfully!\n");
  console.log("Task # 2\n");
  testSecondTask();
  console.log("Tests passed successfully!\n");
  console.log("Task # 3\n");
  testThreeTask();
  console.log("Tests passed successfully!\n");
  console.log("Task # 4\n");
  testFourthTask();
  console.log("Tests passed successfully!\n");
  console.log("Task # 5\n");
  testFifthTask();
  console.log("Tests passed successfully!\n");
  console.log("Task # 6\n");
  testSixthTask();
  console.log("Tests passed successfully!\n");
}
catch (error){
  console.log("There is an error while passing tests");
}
