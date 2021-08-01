<h1 align="center">NY TIMES</h2>

## Aim of the Project
<div>
  <ol>
    <li>The application is built to enable users view a list of popular article as well as view more details when the read more link is clicked on.</li>
    <li>It also contains unit test to ensure that each of the functions and components work as expected.</li>
    <li>Eslint is also added to ensure the correct syntaxes are used and to easily identify syntax errors.</li>
  </ol>
</div>

## Structure
<div>
  <ol>
    <li>Inside the folder, we have the components folder which contains a structure of the pages.</li>
    <li>The common folder in the components, contains the photoCard file which can be reused in the application.</li>
    <li>Due to the configurations of next js, the assets folder is created in the public folder to enable storing of images and icons.</li>
    <li>The root of the application also contains a test folder that stores all the test files for the application.</li>
    <li>The styles folder contains a list of all the styles used throughout the application.</li>
  </ol>
</div>

## How to run the code
<div>
  <ol>
    <li>Having cloned the github repository, the change directory command, nytimes has to be added to move into the folder in the vscode terminal.</li>
    <li>On the terminal, type yarn install to ensure all the packages used in the application are installed.</li>
    <li>The application is then started on yarn dev.</li>
  </ol>
</div>

## How to Test the application
<div>
  <ol>
    <li>In the vs code terminal, type yarn test to run the test files.</li>
    <li>To generate coverage report for the test files, type yarn test -- --coverage.</li>
  </ol>
</div>
