// src/MemberCard.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './MemberCard.css'; // Import the CSS for styling

// Assume 'member' prop looks like:
// { _id: '...', name: '...', role: '...', image: 'uploads/filename.jpg', ... }

function MemberCard({ member }) {

  // Basic check in case member data is somehow missing
  if (!member) {
    return null; // Or return a placeholder card/message
  }

  // Construct the image source URL
  // IMPORTANT: Adjust this based on how your backend serves static files.
  // If member.image is 'uploads/xyz.jpg' and your backend serves 'uploads' folder:
  const imageUrl = `/${member.image}`;
  // If your backend runs on a different port (e.g., 5000) and serves uploads folder:
  // const imageUrl = `http://localhost:5000/${member.image}`;
  // If member.image only contains the filename 'xyz.jpg' and backend serves '/uploads':
  // const imageUrl = `/uploads/${member.image}`;

  return (
    <div className="member-card">
      {/* Member Image */}
      {member.image ? (
        <img
          // Use the constructed URL
          src={imageUrl}
          alt={`${member.name}'s profile`}
          className="member-card-image"
          // Optional: Add error handling for broken images
          onError={(e) => {
            e.target.onerror = null; // Prevents looping
            // Optionally set a placeholder image
            // e.target.src = "/path/to/placeholder.png";
            console.error(`Error loading image: ${imageUrl}`);
          }}
        />
      ) : (
        // Optional: Placeholder if no image exists
        <div className="member-card-image-placeholder">No Image</div>
      )}

      {/* Member Info */}
      <div className="member-card-content">
        <h3>{member.name || 'No Name'}</h3>
        <p>{member.role || 'Team Member'}</p>

        {/* Link to Member Details Page */}
        <Link
          to={`/members/${member._id}`} // Dynamic route using member's ID
          className="button button-primary button-small" // Use global button styles
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default MemberCard;