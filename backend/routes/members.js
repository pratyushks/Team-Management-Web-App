const express = require('express');
const multer = require('multer');
const Member = require('../models/Member');
const path = require('path');
const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique name
  },
});
const upload = multer({ storage: storage });

// POST /api/members
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, role, email } = req.body;
    const image = req.file.filename;

    const newMember = new Member({ name, role, email, image });
    await newMember.save();

    res.status(201).json({ message: 'Member added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/members/:id
router.get('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔥 DELETE /api/members (by email in body)
router.delete('/', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) return res.status(400).json({ error: 'Email is required' });

    const result = await Member.findOneAndDelete({ email });

    if (!result) {
      return res.status(404).json({ error: 'Member not found' });
    }

    res.json({ message: 'Member deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
