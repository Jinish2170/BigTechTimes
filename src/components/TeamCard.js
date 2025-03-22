import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function TeamCard({ member }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 w-64">
      
      <h4 className="text-xl font-bold mb-2">{member.name}</h4>
      <p className="text-gray-400">{member.title}</p>
      <p className="text-sm mt-2">{member.bio}</p>
      <a href={member.linkedin} className="text-neon-turquoise hover:text-white mt-4 inline-block">
        <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
        LinkedIn
      </a>
    </div>
  );
}

export default TeamCard;
