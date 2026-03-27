const { body, validationResult } = require('express-validator');

// ভ্যালিডেশন রুলস
const validateStudent = [
  body('name').notEmpty().withMessage('Name is required').trim(),
  body('age').isInt({ min: 5, max: 100 }).withMessage('Age must be between 5 and 100'),
  body('email').isEmail().withMessage('Please enter a valid email').normalizeEmail(),
  body('course').notEmpty().withMessage('Course is required').trim(),
  
  // মিডলওয়্যার যা ভ্যালিডেশন রেজাল্ট চেক করে
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // যদি ফর্ম সাবমিটের সময় ভ্যালিডেশন এরর হয়, তখন ফর্ম পুনরায় দেখাবে
      const errorMsg = errors.array().map(err => err.msg).join(', ');
      // নির্ধারণ করি কোন ফর্মটি রেন্ডার করব (add বা edit)
      if (req.url === '/' && req.method === 'POST') {
        return res.status(400).render('add', { student: req.body, error: errorMsg });
      } else if (req.url.includes('/edit') && req.method === 'PUT') {
        // edit ফর্মের জন্য: student অবজেক্ট পাঠাতে হবে (আইডি দিয়ে আগের ডাটা আনা)
        // আমরা কন্ট্রোলারে এটি হ্যান্ডল করব, এখানে শুধু এরর মেসেজ পাস করব
        req.validationErrors = errorMsg;
        return next();
      }
      return res.status(400).render('add', { student: req.body, error: errorMsg });
    }
    next();
  }
];

module.exports = validateStudent;