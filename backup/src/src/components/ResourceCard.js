import React from 'react';

function ResourceCard({ resource }) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img src={resource.thumbnail} alt={resource.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="text-xl font-bold mb-2">{resource.title}</h4>
        <p className="text-gray-400">{resource.category}</p>
        <p className="text-sm mt-2">{resource.description}</p>
        <a href={resource.link} className="text-neon-turquoise hover:text-white mt-4 inline-block">Learn More</a>
      </div>
    </div>
  );
}

export default ResourceCard;
