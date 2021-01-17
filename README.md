# Simple Networks - Social Network API

## Description

This Simple Networks -- Social Network API, is a well-designed web application where users can share their thoughts, reactions to friends’ thoughts, and create their own friend list. This API uses MongoDB for NoSQL database, Express.js for routing, the Mongoose ODM for connection, and date-fns for time formating.

This social network API can support websites that handle large amounts of unstructured data. Let's look into it and see how it works:

## Process Video

Please enhance video quality when you are watching.\
[![Screen Shot 2021-01-16 at 4 22 43 AM](https://user-images.githubusercontent.com/70302749/104834894-c0d99b00-5870-11eb-9ddd-93c86814b815.png)](https://drive.google.com/file/d/1aCycobz8_MXX6lT3XKOY2Y9LAheSImz4/view)
https://drive.google.com/file/d/1aCycobz8_MXX6lT3XKOY2Y9LAheSImz4/view

## Installation

First, I'll need to clone this repo and run "npm i" command to install the npm packages. After that, I will run "npm start" command to invoke the application. I can see the server is started and the Mongoose models can be synced to the MongoDB database.

Second, I will open Insomnia Core and test all routes, for example, "localhost:3000/api/users".\
All routes are displayed below:

| User Routes      |                             |
| ---------------- | --------------------------- |
| Get all users:   | `GET /api/users`            |
| Get user by id:  | `GET /api/users/:UserId`    |
| Create one user: | `POST /api/users`           |
| Update one user: | `PUT /api/users/:UserId`    |
| Delete a user:   | `DELETE /api/users/:UserId` |

| Friend Routes      |                                               |
| ------------------ | --------------------------------------------- |
| Add one friend:    | `POST /api/users/:UserId/friends/:friendId`   |
| Delete one friend: | `DELETE /api/users/:userId/friends/:friendId` |

| Thought Routes      |                                           |
| ------------------- | ----------------------------------------- |
| Get all thoughts:   | `GET /api/thoughts`                       |
| Get thought by id:  | `GET /api/thoughts/:thoughtId`            |
| Create one thought: | `POST /api/thoughts/:userId`              |
| Update one thought: | `PUT /api/thoughts/:thoughtId`            |
| Delete one thought: | `DELETE /api/thoughts/:userId/:thoughtId` |

| Reaction Routes   |                                                       |
| ----------------- | ----------------------------------------------------- |
| Add one reaction: | `PUT /api/thoughts/:userId/:thoughtId`                |
| Delete reaction:  | `DELETE /api/thoughts/:userId/:thoughtId/:reactionId` |

## Testing

- When I use API GET routes in Insomnia Core for users and thoughts, the data for each of these routes will be displayed in a formatted JSON.

- When I test API POST, PUT, and DELETE routes in Insomnia Core, I'm able to successfully create, update, and delete users and thoughts in the database.

- When I continue to test API POST and DELETE routes in Insomnia Core, I'm able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Built With

- MongoDB
- Mongoose
- Express
- Date-fns
- JavaScript

## Contributor

lylylong

View my GitHub page: https://github.com/lylylong

If you have any questions, please send me emails: lylylong@gmail.com
