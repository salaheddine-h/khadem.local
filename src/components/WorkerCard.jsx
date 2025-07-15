import React from 'react';

const WorkerCard = ({ worker }) => {
  return (
    <div style={{
      padding: '1rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#fff'
    }}>
      <h3>{worker.name}</h3>
      <p>{worker.title}</p>
      <p>{worker.city}</p>
      <p style={{ color: '#ffa500' }}>⭐ {worker.rating}</p>
      <p>{worker.description}</p>
      <p style={{ color: worker.available ? 'green' : 'gray' }}>
        {worker.available ? 'متوفر الآن' : 'غير متوفر حالياً'}
      </p>
    </div>
  );
};

export default WorkerCard;
