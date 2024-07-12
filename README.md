Create and push a new branch using **git checkout -b kata-3-your-name** and **git push -u origin kata-3-your-name**

# **Client management testing**
Many developers will be working on this app at the same time and a lot of functionalities will be added. We should create unit test to make sure that no functionality is accidentally broken.


Use proper node version: **nvm use**

Install dependencies: **npm install**

Run app: **npm run dev**

**Exercise 1.**

Create a test for alert component. The new test should be a unit test, so the custom hook should be mocked. The file where you need towrite the tests is Alert.spec.js

As you will find in the file, you need to write a test to assert the component is rendered when useAlert() custom hook is true, and to assert that nothing is display if the custom hook is false.


**Exercise 2.**

Create a test for Client Management, all components should be mock. The goal is to mock the implementation of both ClientForm and ClientList, and assert that both components are rendered using this mocked implementation.

The file is ClientManagement.spec.js
