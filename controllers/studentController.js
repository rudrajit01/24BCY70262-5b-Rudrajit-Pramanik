const Student = require('../models/Student');

// সব স্টুডেন্ট দেখানোর জন্য
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().sort({ createdAt: -1 }); // নবীনতম প্রথমে
    res.render('index', { students });
  } catch (err) {
    res.status(500).render('error', { message: err.message });
  }
};

// নতুন স্টুডেন্ট যোগ ফর্ম দেখানোর জন্য
exports.getAddForm = (req, res) => {
  res.render('add', { student: null, error: null });
};

// নতুন স্টুডেন্ট তৈরি করার জন্য (validation handled by middleware)
exports.createStudent = async (req, res) => {
  try {
    const { name, age, email, course } = req.body;
    const student = new Student({ name, age, email, course });
    await student.save();
    res.redirect('/');
  } catch (err) {
    // যদি ডাটাবেস ভ্যালিডেশন বা অন্যান্য এরর হয়
    res.render('add', { student: req.body, error: err.message });
  }
};

// এডিট ফর্ম দেখানোর জন্য (আইডি দিয়ে ডাটা আনতে হবে)
exports.getEditForm = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).render('error', { message: 'Student not found' });
    }
    res.render('edit', { student, error: null });
  } catch (err) {
    res.status(500).render('error', { message: err.message });
  }
};

// স্টুডেন্ট আপডেট করার জন্য (validation handled by middleware)
exports.updateStudent = async (req, res) => {
  try {
    // যদি validation থেকে এরর এসে থাকে (মিডলওয়্যার থেকে সেট করা)
    if (req.validationErrors) {
      const student = await Student.findById(req.params.id);
      return res.render('edit', { student, error: req.validationErrors });
    }
    const { name, age, email, course } = req.body;
    await Student.findByIdAndUpdate(
      req.params.id,
      { name, age, email, course },
      { new: true, runValidators: true }
    );
    res.redirect('/');
  } catch (err) {
    // যদি ডাটাবেস ভ্যালিডেশন বা অন্যান্য এরর হয়
    const student = await Student.findById(req.params.id);
    res.render('edit', { student, error: err.message });
  }
};

// স্টুডেন্ট ডিলিট করার জন্য
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).render('error', { message: err.message });
  }
};

// একটি স্টুডেন্টের বিস্তারিত দেখানোর জন্য
exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).render('error', { message: 'Student not found' });
    }
    res.render('show', { student });
  } catch (err) {
    res.status(500).render('error', { message: err.message });
  }
};