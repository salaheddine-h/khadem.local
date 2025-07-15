import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/search'); // Bghiti tpassi `query` f URL? nqdr ndiro `/search?q=${query}`
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#2c5aa0" }}>اعثر على العامل المناسب لخدمتك</h1>
      <p style={{ fontSize: "1.2rem", margin: "1rem 0", color: "#666" }}>
        منصة خدم تربطك بأفضل الحرفيين في منطقتك
      </p>
      <input
        type="text"
        placeholder="ابحث عن كهربائي، صباغ، نجار..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "1rem",
          borderRadius: "50px",
          width: "60%",
          border: "2px solid #e0e0e0",
          marginBottom: "1.5rem"
        }}
      />
      <br />
      <button onClick={handleSearch} className="btn btn-primary">ابدأ البحث الآن</button>
    </div>
  );
};

export default Home;
