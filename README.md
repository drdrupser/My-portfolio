# Full-Stack Application

A modern full-stack application built with Node.js/Express backend and React frontend using TypeScript.

## 🏗️ Project Structure

```
├── backend/                 # Node.js/Express API server
│   ├── src/
│   │   ├── routes/         # API route handlers
│   │   ├── controllers/    # Business logic controllers
│   │   ├── middleware/     # Custom middleware functions
│   │   ├── config/         # Configuration files
│   │   ├── models/         # Data models
│   │   ├── app.js          # Express app setup
│   │   └── server.js       # Server entry point
│   ├── package.json
│   ├── .eslintrc.js
│   └── .prettierrc
├── frontend/               # React application with Vite
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── common/     # Shared components
│   │   │   ├── layout/     # Layout components
│   │   │   └── forms/      # Form components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── context/        # React context providers
│   │   ├── utils/          # Utility functions
│   │   ├── types/          # TypeScript type definitions
│   │   └── assets/         # Static assets
│   ├── public/             # Public static files
│   ├── package.json
│   └── vite.config.ts
├── db/                     # Database files
│   ├── migrations/         # Database migration files
│   ├── seeds/              # Database seed files
│   └── schemas/            # Database schema definitions
├── legacy-archive/         # Archived legacy files
├── package.json            # Root package.json with workspace config
├── .gitignore
├── .env.example
└── README.md
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)
- PostgreSQL (for database)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fullstack-app
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your actual configuration values.

4. **Set up the database**
   - Create a PostgreSQL database
   - Update database connection details in `.env`
   - Run migrations (when available):
     ```bash
     cd db && npm run migrate
     ```

## 🛠️ Development

### Running the Application

**Start both frontend and backend simultaneously:**
```bash
npm run dev
```

**Or run them separately:**

Backend (http://localhost:3000):
```bash
npm run dev:backend
```

Frontend (http://localhost:5173):
```bash
npm run dev:frontend
```

### Available Scripts

#### Root Level
- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both frontend and backend
- `npm run start` - Start the backend server
- `npm run lint` - Run linting on both frontend and backend
- `npm run test` - Run tests on both frontend and backend

#### Backend (`cd backend`)
- `npm run dev` - Start development server with nodemon
- `npm run start` - Start production server
- `npm run build` - Build for production (echoes message)
- `npm run test` - Run tests with Jest
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier

#### Frontend (`cd frontend`)
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests with Vitest

## 📦 Tech Stack

### Backend
- **Framework**: Express.js
- **Language**: JavaScript
- **Database**: PostgreSQL with pg
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcrypt
- **Validation**: Zod
- **Security**: helmet, cors, express-rate-limit
- **Logging**: morgan
- **Development**: nodemon, ESLint, Prettier
- **Testing**: Jest

### Frontend
- **Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router
- **HTTP Client**: Axios
- **Development**: ESLint, Prettier, Vitest

### Database
- **Database**: PostgreSQL
- **Migrations**: Ready for setup
- **Seeding**: Ready for setup

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and update the following variables:

**Database:**
- `DATABASE_URL` - PostgreSQL connection string
- `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` - Individual database config

**JWT:**
- `JWT_SECRET` - Secret key for JWT token signing
- `JWT_EXPIRES_IN` - Token expiration time

**Server:**
- `PORT` - Backend server port (default: 3000)
- `NODE_ENV` - Environment (development/production)
- `FRONTEND_URL` - Frontend URL for CORS

### Database Setup

1. Install PostgreSQL
2. Create a database:
   ```sql
   CREATE DATABASE fullstack_app;
   ```
3. Update `.env` with your database credentials
4. The application is ready for migration setup

## 📚 API Documentation

### Health Check
- **GET** `/health` - Server health status

### Base API
- **GET** `/api/` - API welcome message

### Adding New Routes

1. Create route files in `backend/src/routes/`
2. Add route handlers in `backend/src/controllers/`
3. Include middleware if needed
4. Register routes in `backend/src/routes/index.js`

## 🧪 Testing

### Backend Testing
```bash
cd backend && npm test
```

### Frontend Testing
```bash
cd frontend && npm test
```

### Run All Tests
```bash
npm test
```

## 📝 Code Style & Linting

The project uses ESLint and Prettier for consistent code formatting:

- **Backend**: ESLint with Node.js rules
- **Frontend**: ESLint with React and TypeScript rules
- **Formatting**: Prettier with consistent settings across all workspaces

Run linting:
```bash
npm run lint
```

Fix linting issues:
```bash
npm run lint:fix
```

Format code:
```bash
npm run format
```

## 🚀 Deployment

### Backend Deployment
1. Build the application (if needed)
2. Set production environment variables
3. Run migrations
4. Start the server: `npm run start`

### Frontend Deployment
1. Build the frontend: `cd frontend && npm run build`
2. Deploy the `frontend/dist` folder to your hosting service

### Environment Variables for Production
Ensure all production environment variables are set:
- `NODE_ENV=production`
- Strong `JWT_SECRET`
- Production database URL
- Proper CORS settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run linting and tests
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🗂️ Legacy Files

Legacy static files (index.html, stayle.css, main.js) have been moved to the `legacy-archive/` directory to maintain clean repository structure.
