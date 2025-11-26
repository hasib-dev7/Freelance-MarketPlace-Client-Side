# Task-Hub - Freelance Marketplace

**Live Demo:** https://task-hub-market-please.netlify.app/

---

## Description
**Task-Hub** is a modern Freelance Marketplace web application where users can post jobs, accept tasks, and track them efficiently.  
This project emphasizes a **user-friendly interface**, **real-time data handling**, and **interactive animations**.

---

## Pages & Functionalities

### 1. **Home**
- Landing page of the project.  
- Displays an overview of the website and recent jobs.  
- Includes hero section, featured jobs, and call-to-action buttons.  

### 2. **All Jobs**
- Displays all job listings.  
- Options to filter and sort jobs (Newest/Oldest).  
- Each job card shows basic info like Title, Category, Date, Posted By, etc.  
- Clicking a job navigates to the **Job Details Page**.  

### 3. **Job Details**
- Shows detailed information for a specific job.  
- Logged-in users can accept the job.  
- Displays Posted By, Description, Category, Date, and more.  

### 4. **Add Job**
- Form to post a new job.  
- Fields: Title, Description, Category, Image URL, User Name, User Email  
- Submitting saves the job in MongoDB.  
- Includes validation and toast notifications.  
- Only authenticated users can access.  

### 5. **Update Job**
- Page to update an existing job.  
- Only the job owner can access.  
- Data is updated via PUT/PATCH API calls.  

### 6. **My Posted Jobs**
- Displays jobs posted by the logged-in user.  
- Options to edit or delete jobs.  
- Realtime data updates.  

### 7. **My Accepted Tasks**
- Shows the list of jobs accepted by the user.  
- Options to mark tasks complete or cancel.  

### 8. **Authentication Pages**
- **Login:** Email/password and social login (Google via Firebase Auth)  
- **Register:** User registration page  

### 9. **404 Page**
- Custom 404 Error page for invalid routes.  

---

## Features
- User Authentication (Email & Social Login) using **Firebase Auth**
- Add, Update, Delete jobs
- Accept and manage tasks
- Filter and sort jobs
- Dynamic Job Details Page
- Responsive Design using **Tailwind CSS**
- Smooth Animations using **Framer Motion**
- MongoDB as backend database
- Live Notifications and Toasts

---

## Tech Stack
- **Frontend:** React, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication & Hosting:** Firebase Auth
- **Deployment:** Vercel

