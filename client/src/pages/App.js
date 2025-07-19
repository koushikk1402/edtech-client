import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import AdminPanel from './pages/AdminPanel';
import InstitutionPanel from './pages/InstitutionPanel';
import CorporatePanel from './pages/CorporatePanel';
import ChatRoom from './pages/ChatRoom';
import Courses from './pages/Courses';
import Quizzes from './pages/Quizzes';
import Analytics from './pages/Analytics';
import Login from './pages/Login';
import Register from './pages/Register';

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
