# Exercise 4: Connecting to Mongo Atlas/Building a Contacts API and a custom rest client

## Due Date: Friday, January 21, 2021 11:59 PM
## Objectives: Create a Restful API that connects to hosted instance of Mongo

## Specifications/Requirements
1. We will be taking our in memory api example we developed in exercise 3 and now adding a connection to a real database to achieve data persistence. As such to complete this exercise you need to do the following: 
  *  using mongoose, in the `app.js` file inside of the `MyContacts` directory add the code to successfully connect to your database, which should be named `contacts`. To do this update the placeholder in the connection string to mongo 
  with your directory id.
  * create the schema for a Contact model. The fields should be the same as the ones in exercise 3.
  * create a contacts router to define all of your endpoints in the `contactsRouter` module.  
  * create all of your handlers to pass to your routes in the `contactsController` module.

All the details should duplicate the functionality from exercise 3 - all you are doing now is adding data persistence to your api. 

2.  Additionally you will be creating a command line tool to interact with your api. For referecne look at the code example inside of the `week1` directory named `commandLineExample`. You will invoke your command line by running `node ./bin/contactsclient` . You need to create a command line utility that will parse the input on the command line and make the appropriate rest call to your api. Additionally you should define a help command that lets the user know how to invoke each command and what parameters each command takes. For example:  
contactsclient [command] <options>  
The <options> parameters should contain everything you need to make successful rest request of type [command]. You may find this helpful for what to pass to the axios client which you wil be using to make your rest calls:  
<https://www.npmjs.com/package/axios#example>.

__Hint:__ Feel free to look at the code samples and use any snippets that may be helpful.  

__Note:__ You will need to execute `npm install` inside of each of the top level directories to get all the necessary npm packages required in `package.json`. To submit your project you will need to commit your changes and push them to your remote gitlab repo. Always check online that you see your code after pushing to be sure that your solution is there.