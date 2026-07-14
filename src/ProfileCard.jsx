import React, { useState, useEffect } from 'react';

export default function ProfileCard({ name, bio, status }) {
  const [likes, setLikes] = useState(0);
  const [showMore, setShowMore] = useState(false);

  // Sync browser tab title with the name and number of likes
  useEffect(() => {
    document.title = `${name} — ${likes} likes`;
  }, [name, likes]);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  const handleToggle = () => {
    setShowMore(prevShowMore => !prevShowMore);
  };

  const skills = [
    { id: 1, name: 'Java' },
    { id: 2, name: 'Spring Boot' },
    { id: 3, name: '.NET' },
    { id: 4, name: 'Git' },
    { id: 5, name: 'GitHub' },
    { id: 6, name: 'HTML & CSS' }
  ];

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="avatar">
          {name.charAt(0)}
        </div>
        <div className="profile-info">
          <h2>{name}</h2>
          <p className="subtitle">{bio}</p>
        </div>
      </div>

      {status && (
        <div className="status-bubble">
          <span className="status-text">Status: "{status}"</span>
        </div>
      )}

      <div className="card-actions">
        <button className="like-btn" onClick={handleLike}>
          Like ({likes})
        </button>
        <button className="toggle-btn" onClick={handleToggle}>
          {showMore ? 'Show less' : 'Show more'}
        </button>
      </div>

      {showMore && (
        <div className="extended-bio animate-fade-in">
          <h3>About Me</h3>
          <p>
            I'm a backend developer focusing on Java Spring Boot and .NET. 
            When I'm not coding or designing APIs, you can find me sketching, 
            oil painting, or skateboarding outside.
          </p>
        </div>
      )}

      <div className="skills-section">
        <h3>Skills</h3>
        <ul className="skills-list">
          {skills.map(skill => (
            <li key={skill.id} className="skill-tag">
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
