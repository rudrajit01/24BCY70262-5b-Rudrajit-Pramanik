require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// ডাটাবেজ কানেক্ট
connectDB();

// মিডলওয়্যার
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// ভিউ ইঞ্জিন সেটআপ
app.set('view engine', 'ejs');
app.set('views', './views');

// রাউটস
app.use('/', studentRoutes);

// 404 হ্যান্ডলিং
app.use((req, res) => {
  res.status(404).render('error', { message: 'Page not found' });
});

// এরর হ্যান্ডলিং মিডলওয়্যার (পরে উন্নত করা হবে)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error', { message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});