// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function ViewMembers() {
//   const [members, setMembers] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5050/api/members')
//       .then(res => setMembers(res.data));
//   }, []);

//   return (
//     <div>
//       <h2>Team Members</h2>
//       {members.map(member => (
//         <div key={member._id}>
//           <img src={`http://localhost:5050/uploads/${member.image}`} alt="profile" width="100" />
//           <h3>{member.name}</h3>
//           <p>{member.role}</p>
//           <Link to={`/members/${member._id}`}><button>View Details</button></Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ViewMembers;





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Membercard.css'; // Ensure this CSS is imported

function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5050/api/members')
      .then(res => setMembers(res.data));
  }, []);

  return (
    <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2 style={{ color: '#007bff', fontSize: '2rem', marginBottom: '30px' }}>
        MEET OUR AMAZING TEAM
      </h2>
      <div className="members-grid">
        {members.map(member => (
          <div key={member._id} className="member-card">
            <img
              src={`http://localhost:5050/uploads/${member.image}`}
              alt={member.name}
              className="member-card-image"
            />
            <div className="member-card-content">
              <h3>{member.name}</h3>
              <p>{member.role}</p> 
              <Link to={`/members/${member._id}`}>
                <button className="button button-primary button-small">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMembers;
