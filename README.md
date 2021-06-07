# Social Networking API
![GitHub license](https://img.shields.io/badge/license-MIT-green)

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Questions](#questions)
* [License](#license)

## Description

This project is a simple, but extremelydynamic back-end server for any sort of social networking platform. This social networking API includes Users, their thoughts, and their reactions to thoughts all in a basic and easy to modify MongoDB server. It uses Node.js and Express to create the server to host your development server as well as can be linked to any server hosting web platform for easy installation. It then uses MongoDB to create a database for dynamically storing User, Thought, and Reaction information and is easy to add onto for any social media site. Simply link the Front-End HTML and script files and connect the API routes and you are all set!

## Installation

This project requires Node.js and MongoDB to create the server and database structures. Instructions can be found at their respective websites on how to install. Once you have Node.js and MongoDB installed, download the project into the file you wish to keep the project in by either downloading and unzipping the files or by using the command 

``` 
git clone git@github.com:mrarcher2000/social-network-nosql.git 
```

After downloading the files, open the folder in your terminal and run the code 'npm i' to install the necessary node modules for the server. Now you are ready to get started!

## Usage

The usage is simple for this project. To connect your front-end code, simply make a folder in the root directory named 'public' and store your assets in there. Then, make a directory in the 'routes' folder to store your HTML routes and add the routes into the routes/index.js file. Now your HTML can use the API routes locally and on your own server! Below is a list of all the API calls available.

 ```
 /api/user  --  POST for a New User and GET for All Users 

 /api/user/:id  --  GET a single user, PUT to update a user, and DELETE to delete a user 

 /api/user/userId/friends/:friendId  --  POST to add the Friend to the User's friend list and DELETE to remove from friend's list 
 
 /api/thoughts/  --  GET all Thoughts and POST to add a thought 
 
 /api/thoughts/:id  --  GET a single thought, PUT for updating a thought, and DELETE to delete a thought 
 
 /api/thoughts/:id/reactions  --  POST to add a reaction 
 
 /api/thoughts/:id/reactions/:reactionId  --  DELETE to delete a reaction 
 ```
 
 Below is a link to a video that shows the API routes being called on a local development server in Insomnia Core. 

## Contributing

This project is open to contribution and redistribution is welcome. To contribute, please contact the author of the project, Archer Nicholson. Contact information can be found below


## Questions

For any additional questions or comments, please email the author of this project at: 
archernich@gmail.com.

*OR*

You can view other repositories made by me at https://github.com/mrarcher2000.

Visit my LinkedIn at https://linkedin.com/in/archer-nicholson-554829204

## License
    
This project is licensed under the Open Source MIT License.
A full overview of what this license covers can be found at https://spdx.org/licenses/MIT.html.
    
