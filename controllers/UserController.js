const express = require('express');
const fetch = require('node-fetch');



class UserController {
    getUser(req, res) {
        
      const userId = req.params.id;
      // Logic to fetch user data by ID
      // For demonstration, just sending back the user ID
      res.send(`User ID: ${userId}`);
    }


    async getPosts(req,res){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            //   method: 'POST',
            //   body: JSON.stringify(req.body), // Pass the request body to the API
            //   headers: { 'Content-Type': 'application/json' }
            });
            if (!response.ok) {
              throw new Error('Failed to create post');
            }
            const createdPost = await response.json();
            res.json(createdPost);
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }
  }

  module.exports = UserController;