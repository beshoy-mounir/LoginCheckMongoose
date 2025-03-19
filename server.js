const mongoose = require('mongoose');
const app = require('./app.js');
mongoose
  .connect(
    'mongodb+srv://user1:besho1234@cluster01.6ik3w.mongodb.net/loginCheck?retryWrites=true&w=majority&appName=Cluster01'
  )
  .then(() => console.log('✅ Database connected successfully'))
  .catch((err) => console.error('❌ Database connection error:', err));
const port = 4000;
app.listen(port, () => console.log(`listening to port ${port}`));
