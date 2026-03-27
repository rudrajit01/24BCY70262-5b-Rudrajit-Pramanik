# Student Management System (MVC)

A full-stack web application to manage student records, built with **Node.js**, **Express**, **MongoDB**, and **EJS**. The project follows the **MVC (Model-View-Controller)** architectural pattern and includes RESTful routing, input validation, responsive UI, and custom cursor animations.

## 📌 Features

- ✅ **CRUD Operations** – Create, Read, Update, Delete student records  
- ✅ **RESTful API** – Well-structured routes (GET, POST, PUT, DELETE)  
- ✅ **MongoDB Database** – Persistent data storage with Mongoose ODM  
- ✅ **Server-side Validation** – Using `express-validator` to ensure data integrity  
- ✅ **Responsive UI** – Built with Bootstrap 5 and custom CSS  
- ✅ **Interactive Cursor** – Custom cursor with spark effect on mouse movement  
- ✅ **Error Handling** – Centralized error handling and user-friendly error pages  

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (local or Atlas)  
- **Frontend:** EJS (Embedded JavaScript), Bootstrap 5, CSS3  
- **Validation:** express-validator  
- **Environment Management:** dotenv  

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js (v18 or higher)  
- MongoDB (local installation or Atlas account)  
- Git  

### Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/rudrajit01/24BCY70262-5b-Rudrajit-Pramanik.git
   cd 24BCY70262-5b-Rudrajit-Pramanik
Install dependencies

bash
npm install
Set up environment variables
Create a .env file in the root directory and add:

text
MONGO_URI=mongodb://localhost:27017/studentDB
PORT=3000
If using MongoDB Atlas, replace the URI accordingly.

Start MongoDB service

For local installation: run mongod or start the MongoDB service.

For Atlas: ensure your IP is whitelisted.

Run the application

bash
npm start
The server will start at http://localhost:3000.

📂 Project Structure
text
.
├── config/               # Database connection
├── controllers/          # Business logic
├── models/               # Mongoose schemas
├── routes/               # API routes
├── middlewares/          # Validation & error handlers
├── views/                # EJS templates
│   ├── partials/         # Header, footer
│   ├── index.ejs
│   ├── add.ejs
│   ├── edit.ejs
│   ├── show.ejs
│   └── error.ejs
├── public/               # Static assets (CSS, images)
├── .env                  # Environment variables (not committed)
├── app.js                # Entry point
└── package.json
🎨 UI Preview
Add screenshots here if desired.
Example:
https://screenshot.png

✨ Custom Features
Spark Effect – A trail of tiny particles follows the mouse pointer, adding a modern feel.

Responsive Table – On small screens, action buttons wrap or become a dropdown menu (customizable).

Bootstrap Icons – Clean icons used throughout the interface.

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📄 License
This project is licensed under the ISC License – see the LICENSE file for details.

👤 Author
Rudrajit Pramanik
GitHub: rudrajit01
