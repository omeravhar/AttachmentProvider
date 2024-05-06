const express = require('express');
const UserController = require('./controllers/UserController');
require('dotenv').config();
const app = express();
const port = 3000;


const userController = new UserController();
const router = express.Router();

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send(process.env.USER_NAME);
});


router.get('/users/:id', userController.getUser);
router.post('/posts', userController.getPosts);

app.use(router);


// Start the server
app.listen("3000", () => {
  console.log(`Server is running on http://localhost:3000`);
});