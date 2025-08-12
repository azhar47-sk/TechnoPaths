# Techno-Paths
**Techno-paths** is a dynamic web platform that connects **students** with **potential sponsors**. Students can showcase their innovative projects, and sponsors can discover, support, and invest in promising ideas.
---

## 🚀 Features

- **Student Project Listing**  
  Students can create detailed profiles for their projects, including descriptions, images, videos, and technical details.
  
- **Sponsor Dashboard**  
  Sponsors can browse projects, filter by category, and view project details before deciding to invest.
  
- **Investment & Support System**  
  Secure communication and investment workflows to connect sponsors with students.
  
- **Search & Filter**  
  Sponsors can search for projects by keywords, categories, or popularity.
  
- **User Authentication**  
  Secure sign-up and login for both students and sponsors.

---

## 📁 Folder Structure
/student-sponsor-platform/
│
├── /client/              # React frontend
│   ├── /public/
│   ├── /src/
│   │   ├── /assets/           # Images, icons, etc.
│   │   ├── /components/       # Reusable components (Navbar, Card, etc.)
│   │   ├── /pages/            # Routes/pages (Home, Login, Dashboard, etc.)
│   │   ├── /services/         # Axios API calls
│   │   ├── /context/          # Auth/User context (if needed)
│   │   ├── /utils/            # Helper functions (e.g., validators)
│   │   ├── /hooks/            # Custom React hooks
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...config files
│   └── package.json
│
├── /server/              # Node.js + Express backend
│   ├── /controllers/         # Logic for each route (project, user, sponsor)
│   ├── /models/              # Mongoose schemas
│   ├── /routes/              # Express routes (auth, project, sponsor)
│   ├── /middlewares/         # Auth, error handling, file uploads
│   ├── /utils/               # JWT, email sender, etc.
│   ├── /config/              # DB connection, environment configs
│   ├── server.js             # Entry point
│   └── package.json
│
├── .env                      # Environment variables (Mongo URI, secret keys)
├── .gitignore
└── README.md

---

## 🛠 Tech Stack

**Frontend (React)**
- React.js
- Material UI / Tailwind CSS for styling
- Axios for API requests
- React Router for navigation
- Context API / Redux for state management (if required)

**Backend (Node + Express)**
- Node.js
- Express.js for server-side routing and APIs
- JWT for authentication & authorization
- Multer for file uploads (if project images/documents are used)

**Database**
- MongoDB (NoSQL database)
- Mongoose ODM for schema modeling

**Development Tools**
- Nodemon for backend auto-restart during development
- Concurrently to run frontend & backend together
- dotenv for environment variable management


