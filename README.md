# Aroi Near Me

AroiNearMe is a full-stack Japanese food menu web application with responsive web design.  
The project supports restaurant management, menu management, image upload, promotion menus, menu availability status, and admin authentication.

---

## Tech Stack

### Frontend

- React
- TypeScript
- React Router
- Axios
- Tailwind CSS
- Font Awesome

### Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- Zod validation
- Multer for image upload
- Cookie-based authentication
- CORS
- Morgan
- Cookie Parser

  
### Database

- SQLite
- Prisma ORM

---

## Installation & Run Project

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-folder>
```

---

## Backend Setup:

```bash
cd backend
npm install
```

Create environment file

```bash
touch .env
```

Example `.env` file

```env
PORT=3000
CORS_ORIGIN=http://localhost:5173
DATABASE_URL="file:./dev.db"
JWT_SECRET=your_secret_key_here
```

Then continue with

```bash
npx prisma generate
npx prisma db push
npm run dev
```

The backend server should run at:

```txt
http://localhost:3000
```

---

## Frontend Setup:

```bash
cd frontend
npm install
npm run dev
```

---

The frontend should run at:

```txt
http://localhost:5173
```

---
