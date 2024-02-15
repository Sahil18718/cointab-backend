const express = require('express');
const axios = require('axios');
const User = require('../model/usermodel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const userData = req.body;
  try {
    const existingUser = await User.findOne({ name: userData.name });
    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
    } else {
      const newUser = new User({
        userId: userData.id,
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        website: userData.website,
        city: userData.address.city,
        company: userData.company.name,
      });
      await newUser.save();
      res.status(201).json({ newUser });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
