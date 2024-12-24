---

# Event Management App

## 📝 Overview
The Event Management App is a web platform designed to help users create, manage, and view events. It provides features for event discovery, registration, and managing attendees, offering an engaging experience for event organizers and participants.

## 🌟 Features

1. **User Authentication**: Secure registration and login system for event organizers and participants.
2. **Event Management**: Create, edit, and delete events with ease.
3. **Event Discovery**: Browse and search for events organized by others.
4. **Event Registration**: Users can register for events and manage their registrations.
5. **Attendee Management**: Organizers can manage attendees and their participation.
6. **Responsive Design**: Optimized for both desktop and mobile devices.

## 🛠 Prerequisites

Ensure the following tools are installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or remote instance)
- [Git](https://git-scm.com/) (for version control)
- A text editor or IDE (e.g., Visual Studio Code)

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/codingwizzzard/event-management.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd event-management
   ```
3. **Frontend Setup:**
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
4. **Backend Setup:**
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file in the `backend` directory and add the following environment variables:
     ```env
     PORT=5000
     MONGODB_URL=mongodb://localhost/event-management
     JWT_SECRET=your-secret-key
     ```
     Replace `your-secret-key` with a secure secret for JWT token generation.

5. **Start the Development Server:**
   ```bash
   node index.js
   ```

6. **Access the Application:**
   - Frontend: Open `http://localhost:3000` in your browser.
   - Backend: The server runs on `http://localhost:5000` by default.

---

## 💻 Technologies Used

### Frontend:
- React
- React Router DOM
- React-toastify (for notifications)

### Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT) for authentication
- bcrypt for secure password hashing

## 🤝 Contributing

Contributions are welcome! If you have ideas or fixes, please fork the repository and create a pull request.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request on GitHub.

## ❓ Troubleshooting

- **MongoDB Connection Issues:**
  Ensure MongoDB is running locally or update the `MONGODB_URI` in the `.env` file with the correct remote URL.
- **Port Conflicts:**
  If the default ports are in use, update the `PORT` variable in the `.env` file.

--- 
