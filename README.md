# User Signup with Mongoose

This project demonstrates a simple user signup system using **Express**, **MongoDB**, and **Mongoose**. The application handles user registration and prevents duplicate entries by utilizing MongoDB and Mongoose for schema management.

## Features
- **Signup functionality**: Users can submit their details to register.
- **Mongoose Integration**: MongoDB is used to store user data, and Mongoose handles the schema and model creation.
- **Duplicate prevention**: If the same user tries to register again, the system checks and prevents duplicate entries.

## Tech Stack
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js

## Workflow
1. **User Details Submission**: Users can submit their details via the `/signup` endpoint.
   ![Signup](https://github.com/user-attachments/assets/39596354-bd09-4024-94f1-8029b9d616b5)
   
2. **Storing in MongoDB**: Mongoose is used to define the schema and save the user data to the database.
   ![Mongoose Schema](https://github.com/user-attachments/assets/c6f02912-9085-43cb-9024-60a98509fba0)
   
3. **Duplicate Entry Check**: If a user attempts to register again, the system checks the database for existing entries.
   ![Duplicate Check](https://github.com/user-attachments/assets/4b02527d-9e75-496f-862d-d04b2fd21975)

## Learning Outcome
This project helped me understand the practical usage of Mongoose and how it simplifies working with MongoDB. I implemented user registration and ensured data integrity through duplicate prevention.


## Setup
1. Clone this repository.
2. Install dependencies: 
   ```bash
   npm install
   node script.js

~vishal♾️

