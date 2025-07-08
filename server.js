require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app.js');

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_APP_NAME}`
  )
  .then(() => console.log('✅ Database connected successfully'))
  .catch((err) => console.error('❌ Database connection error:', err));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening to port ${port}`));
