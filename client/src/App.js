import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => <div>Home</div>;
const StudentDashboard = () => <div>Student Dashboard</div>;
const TeacherDashboard = () => <div>Teacher Dashboard</div>;
const AdminPanel = () => <div>Admin Panel</div>;
const InstitutionPanel = () => <div>Institution Panel</div>;
const CorporatePanel = () => <div>Corporate Panel</div>;
const ChatRoom = () => <div>Chat Room</div>;
const Courses = () => <div>Courses</div>;
const Quizzes = () => <div>Quizzes</div>;
const Analytics = () => <div>Analytics</div>;
const Login = () => <div>Login</div>;
const Register = () => <div>Register</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/institution" element={<InstitutionPanel />} />
        <Route path="/corporate" element={<CorporatePanel />} />
        <Route path="/chat" element={<ChatRoom />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;
