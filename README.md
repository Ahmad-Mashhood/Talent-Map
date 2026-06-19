# TalentMap - Smart Recommender System

A MERN stack career matching and learning roadmap generation application. It allows candidates to track skills, analyze skill gaps against jobs in real-time, and get personalized study paths.

## Tech Stack

- **Frontend**: React (Vite) + Vanilla CSS + Lucide Icons
- **Backend**: Node.js + Express + PDFKit (PDF reports)
- **Database**: MongoDB (Mongoose)

---

## Getting Started

### 1. Database Configuration (MongoDB Atlas Setup)

To use MongoDB Atlas (Cloud) instead of MongoDB Compass (Local):

1. Sign in to your account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new Cluster (e.g., Free tier Cluster0).
3. Under **Security -> Database Access**, create a user with read/write access and note their username & password.
4. Under **Security -> Network Access**, whitelist IP address `0.0.0.0/0` (allows access from anywhere) or your current IP.
5. In your Cluster dashboard, click **Connect** -> **Drivers**, and copy the connection string. It will look like this:
   ```text
   mongodb+srv://<username>:<password>@cluster0.example.mongodb.net/talentmap?retryWrites=true&w=majority
   ```
6. In the project backend, open the `backend/.env` file and set the `MONGO_URI` variable to your connection string (replace `<username>` and `<password>` with your database user credentials).

### 2. Copy and Configure Environment variables

If you haven't already, copy the environment file:

```bash
# Windows command
copy backend\.env.example backend\.env
```

Ensure the settings inside `backend/.env` are updated:
- `MONGO_URI`: Your MongoDB Atlas URL.
- `PORT`: Server port (defaults to `5000`).
- `CLIENT_URL`: Client address (defaults to `http://localhost:5173`).

---

### 3. Install Dependencies

Install the workspaces dependencies from the root directory:

```bash
npm install
```

---

### 4. Seed the Database

Run the database seed command to clean collections and insert initial roles, jobs, skills taxonomy, and learning resources:

```bash
npm run seed
```

---

### 5. Run the Application

Start the development server for both frontend and backend concurrently:

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Seeded Demo Accounts

Once seeded, you can log in using these demo accounts (all accounts use the password `password123`):

| Role / Account Type | Email | Password | Description |
| --- | --- | --- | --- |
| **Candidate (Student)** | `student@talentmap.edu` | `password123` | View job matches, skill gaps, bookmarks, and timelines. |
| **Content Manager (Staff)** | `manager@talentmap.edu` | `password123` | Create and edit job postings, skill taxonomy, and learning resources. |
| **Platform Administrator** | `admin@talentmap.edu` | `password123` | View dashboard statistics, change user roles, view audit logs, and export PDF reports. |
| **Super Administrator** | `superadmin@talentmap.edu` | `password123` | Adjust algorithm weights (skills matching vs interest matching), monitor server health diagnostics. |
