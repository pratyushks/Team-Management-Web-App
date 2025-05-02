// import React, { useState } from 'react';
// import axios from 'axios';

// function RemoveMember() {
//   const [email, setEmail] = useState('');

//   const handleChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.delete('http://localhost:5050/api/members', {
//         data: { email },
//       });
//       alert('Member removed!');
//       setEmail('');
//     } catch (err) {
//       console.error('Error removing member:', err.response?.data || err.message);
//       alert('Failed to remove member.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="email"
//         name="email"
//         placeholder="Enter member's email"
//         value={email}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">Remove Member</button>
//     </form>
//   );
// }

// export default RemoveMember;

import React, { useState } from 'react';
import axios from 'axios';
import '../AddMemberPage.css'; // Reuse same CSS for styling

function RemoveMember() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.delete('http://localhost:5050/api/members', {
        data: { email },
      });
      alert('Member removed!');
      setEmail('');
    } catch (err) {
      console.error('Error removing member:', err.response?.data || err.message);
      alert('Failed to remove member.');
    }
  };

  return (
    <div className="add-member-form">
      <h2>Remove Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Enter member's email"
            value={email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="button">Remove Member</button>
      </form>
    </div>
  );
}

export default RemoveMember;
