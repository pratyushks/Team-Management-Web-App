// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function MemberDetails() {
//   const { id } = useParams();
//   const [member, setMember] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:5050/api/members/${id}`)
//       .then(res => setMember(res.data));
//   }, [id]);

//   return member ? (
//     <div>
//       <img src={`http://localhost:5050/uploads/${member.image}`} alt="profile" width="150" />
//       <h2>{member.name}</h2>
//       <p>Role: {member.role}</p>
//       <p>Email: {member.email}</p>
//     </div>
//   ) : <p>Loading...</p>;
// }

// export default MemberDetails;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../MemberDetails.css'; // <-- new CSS file for styling

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5050/api/members/${id}`)
      .then(res => setMember(res.data));
  }, [id]);

  return member ? (
    <div className="member-details-container">
      <div className="member-card-details">
        <img
          src={`http://localhost:5050/uploads/${member.image}`}
          alt="profile"
          className="member-profile-img"
        />
        <h2>{member.name}</h2>
        <p><strong>Role:</strong> {member.role}</p>
        <p><strong>Email:</strong> {member.email}</p>
      </div>
    </div>
  ) : <p className="loading-text">Loading...</p>;
}

export default MemberDetails;
