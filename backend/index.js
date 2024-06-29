require('dotenv').config();
const express = require('express');
const cors = require('cors');
const admin = require('./firebase-config'); 

const app = express();
app.use(express.json());
app.use(cors());

app.get('/data', async (req, res) => {
  try {
    const db = admin.database();
    const ref = db.ref('/users');
    const snapshot = await ref.once('value');
    res.status(200).json(snapshot.val());
  } catch (error) {
    res.status(500).send('Error fetching data: ' + error.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
