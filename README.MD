# InsightTrack Project Documentation
## 1\. Project Overview
### Introduction
InsightTrack is a personal finance management web application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to track their income and expenses, view analytics, and manage transactions. Administrators have additional capabilities to manage users and view their transactions.
### Objectives
- Develop an intuitive personal finance management application.
- Provide users with tools to manage and analyze their transactions.
- Offer an admin panel for user and transaction management.
- Ensure a responsive design for various devices.
### Scope
- User authentication and authorization.
- User dashboard for transaction management.
- Data visualization with charts and tables.
- Admin panel for user and transaction management.
### Technologies Used
- **Frontend:** React, Axios, Bootstrap, Ant Design, Material UI
- **Backend:** Node.js, Express.js, MongoDB
- **Middleware:** CORS, Morgan, Colors, Mongoose, dotenv, Portfinder
- **State Management:** React Router DOM, Redux, React Redux
- **Date Handling:** Moment, Dayjs
- **Data Visualization:** React Icons, MUIX Charts, Recharts
- **Concurrency:** Concurrently
-----
## 2\. Installation Guide
### Prerequisites
- Node.js
- npm
### Backend Setup
1. Initialize the backend:
```bash
npm init -y
```
1. Install dependencies:
```bash
npm install express mongoose cors morgan dotenv colors portfinder
```
### Frontend Setup
1. Create the React application:
```bash
npx create-react-app client
```
2. Install dependencies:
```bash
cd client
npm install axios react-router-dom redux react-redux bootstrap @ant-design/icons @mui/material @mui/icons-material @mui/x-data-grid recharts moment dayjs react-icons
```
**Running the Project**

- **Running the Backend:**
```bash
npm run server
```
- **Running the Frontend:**
```bassh
cd client
npm start
```
- **Running Both Frontend and Backend:**
```bash
npm run dev
```
-----
## 3\. User Manual
### Login and Signup
- Users can sign up and log in to access their dashboard.
- Admins have a separate login page for admin access.
### Dashboard Overview
- **Transactions:**
  - Add, edit, and delete income and expense transactions.
  - Transactions are displayed in a table format.
- **Analytics:**
  - View transactions in charts (line, pie) by clicking the analytics button.
### Admin Panel
- **User Management:**
  - View a list of users.
  - Delete users.
  - View and edit user transactions.
  - View user analytics similar to regular users.
### Logout
- Secure logout functionality for both users and admins.
-----
## 4\. API Documentation
### Authentication Endpoints
- **POST /api/v1/user/register:** User signup.
- **POST /api/v1 /user/login:** User login.
### Transaction Endpoints
- **POST /api/v1/transactions/get-transactions:** Get all transactions.
- **POST /api/v1/transactions/add-transaction:** Add a new transaction.
- **POST /api/v1/transactions/edit-transaction/:id:** Update a transaction.
- **POST /api/v1/transactions/delete-transaction/:id:** Delete a transaction.
### User Management Endpoints
- **GET /api/v1/admin/users:** Get all users (admin only).
- **DELETE /api/v1/admin/users/:id:** Delete a user (admin only).
- **GET /api/users/:id:** Get transactions for a specific user (admin only).
-----
## 5\. Developer Guide
### Code Structure
- **client:** Frontend code.
- **server:** Backend code.
- **models:** Mongoose schemas.
- **routes:** Express routes.
### Key Modules and Components
- **Frontend:**
  - React components for UI.
  - State management with Redux and React Redux.
  - Routing with React Router DOM.
  - UI design with Bootstrap, Ant Design, and Material UI.
  - Icons with React Icons.
  - Charts with MUIX Charts and Recharts.
  - Date handling with Moment and Dayjs.
- **Backend:**
  - Express routes for API.
  - MongoDB models using Mongoose.
  - Middleware setup with CORS, Morgan, Colors, dotenv, and Portfinder.
### State Management
- **Redux:** For managing global state.
- **React Redux:** For connecting React components to the Redux store.
### Routing
- **React Router DOM:** For navigating between pages.
-----
## 6\. Testing Documentation
### Unit Testing
- Write and run unit tests for individual components and functions.
### Integration Testing
- Test interactions between different parts of the application.
### Running Tests
- Use testing libraries like Jest and React Testing Library.
-----
## 7\. Deployment Guide
### Setting up Environment Variables
- Use .env file for environment-specific configurations.
### Deploying to Cloud Platforms
- Deploy the backend and frontend to a cloud platform like Heroku, AWS, or Vercel.
### Continuous Integration and Deployment
- Set up CI/CD pipelines using tools like GitHub Actions or Travis CI.
-----
## 8\. Changelog
### Version History
- **v1.0.0:** Initial release with core functionalities.
### New Features
- Analytics view for users and admins.
- Admin functionalities for user and transaction management.
### Bug Fixes
- Fixed issues with transaction editing.
### Performance Improvements
- Optimized backend API responses.
-----
## 9\. Contributing Guide
### How to Report Issues
- Use the GitHub issues tracker to report bugs and suggest features.
### How to Submit Pull Requests
- Fork the repository, create a new branch, make your changes, and submit a pull request.
### Coding Standards
- Follow best practices for React, Node.js, and JavaScript.
- Use ESLint for code linting.
-----
