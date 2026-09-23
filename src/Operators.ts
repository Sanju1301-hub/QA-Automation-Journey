//Total test cases
  const passedtests = 18;
  const failedtests = 2;

  const totalTests = passedtests + failedtests;

  console.log(totalTests);

//Total test failed
const totalTestsCount = 20;
const totalPassedTests = 18;
const totalFailedTests = totalTestsCount - totalPassedTests;

console.log(totalFailedTests);

//Total Test Cases in all the suites
const testSuites = 5;
const testPerSuites = 10;
const TotalNumberOfTests = testSuites * testPerSuites;

console.log(TotalNumberOfTests);


// Even or odd

let a: number;
a = 1;
if(a%2 === 0){
    console.log(a, "is even");
}
else{
    console.log(a, "is odd");

}