// import React, { useState } from 'react';
// import axios from 'axios';

// function AddMember() {
//   const [form, setForm] = useState({ name: '', role: '', email: '', image: null });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image') {
//       setForm({ ...form, image: files[0] });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // basic email regex
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(form.email)) {
//       alert('Please enter a valid email address.');
//       return;
//     }

//     const data = new FormData();
//     data.append('name', form.name);
//     data.append('role', form.role);
//     data.append('email', form.email);
//     data.append('image', form.image);

//     try {
//       await axios.post('http://localhost:5050/api/members', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Member added!');
//     } catch (err) {
//       console.error('Error uploading member:', err.response?.data || err.message);
//       alert(err.response?.data?.error || 'Failed to add member.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" placeholder="Name" onChange={handleChange} required />
//       <input name="role" placeholder="Role" onChange={handleChange} required />
//       <input
//         name="email"
//         placeholder="Email"
//         type="email"
//         onChange={handleChange}
//         required
//       />
//       <input type="file" name="image" accept="image/*" onChange={handleChange} required />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default AddMember;



import React, { useState } from 'react';
import axios from 'axios';
import '../AddMemberPage.css'; // Ensure this is imported!

function AddMember() {
  const [form, setForm] = useState({ name: '', role: '', email: '', image: null });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const data = new FormData();
    data.append('name', form.name);
    data.append('role', form.role);
    data.append('email', form.email);
    data.append('image', form.image);

    try {
      await axios.post('http://localhost:5050/api/members', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Member added!');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.error || 'Failed to add member.');
    }
  };

  return (
    <div className="add-member-form">
      <h2>Add Team Member</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <input
            name="role"
            placeholder="Role"
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <input
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="form-control-file"
            required
          />
        </div>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
}

export default AddMember;
