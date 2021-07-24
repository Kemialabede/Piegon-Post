
## Aim of the Project
The application is built to enable users view a list of popular article as well as view more details when the read more link is clicked on. 
It also contains unit test to ensure that each of the functions and components work as expected.
Eslint is also added to ensure the correct syntaxes are used and to easily identify syntax errors.

## Structure
Inside the folder, we have the components folder which contains a structure of the pages.
The common folder in the components, contains the photoCard file which can be reused in the application.
Due to the configurations of next js, the assets folder is created in the public folder to enable storing of images and icons.
The root of the application also contains a test folder that stores all the test files for the application.
The styles folder contains a list of all the styles used throughout the application. 

## How to run the code
Having cloned the github repository, the change directory command, nytimes has to be added to move into the folder in the vscode terminal.
On the terminal, type yarn install to ensure all the packages used in the application are installed.
The application is then started on yarn dev.

## How to Test the application
In the vs code terminal, type yarn test to run the test files.
To generate coverage report for the test files, type yarn test -- --coverage.
