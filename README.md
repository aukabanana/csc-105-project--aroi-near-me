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
- Zod validation
- CORS
- Morgan
- Prisma ORM
- Multer for image upload
- Cookie-based authentication
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

### 2. Backend Setup

```bash
cd backend
npm install
```

Create an environment file:

```bash
touch .env
```

Example `.env` file:

```env
PORT=3000
CORS_ORIGIN=http://localhost:5173
DATABASE_URL="file:./dev.db"
JWT_SECRET=your_secret_key_here
```

Generate Prisma client:

```bash
npx prisma generate
npx prisma db push
npm run dev
```
---

### 3. Database view with Prisma Studio

Launch Prisma Studio :

```bash
cd backend
npx prisma studio
```

### 4. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Admin Auth
```text
username: AroiNearMe
password: aroiAdmin
```

---

## Notes:
- Do not commit `node_modules`
- Do not commit `.env`
- Commit uploaded user images is available
- Uploaded images should be stored as file paths, not BLOBs
