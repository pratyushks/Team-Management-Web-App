import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import ViewMembers from './pages/ViewMembers';
import MemberDetails from './pages/MemberDetails';
import RemoveMember from './pages/RemoveMember'; // 👈 Import it here

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddMember />} />
      <Route path="/members" element={<ViewMembers />} />
      <Route path="/members/:id" element={<MemberDetails />} />
      <Route path="/remove" element={<RemoveMember />} /> {/* 👈 Add route */}
    </Routes>
  );
}

export default App;

