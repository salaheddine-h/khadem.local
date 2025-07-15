import React from 'react';
import WorkerCard from '../components/WorkerCard';

const workers = [
  {
    id: 1,
    name: 'أحمد المهدي',
    title: 'كهربائي محترف',
    city: 'الدار البيضاء',
    rating: 4.8,
    available: true,
    description: 'خبرة 5 سنوات في الكهرباء المنزلية والصناعية',
  },
  {
    id: 2,
    name: 'يوسف التازي',
    title: 'نجار',
    city: 'الرباط',
    rating: 4.5,
    available: false,
    description: 'نجار محترف، ديكور وأثاث',
  },
];

const SearchResults = () => {
  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>نتائج البحث:</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {workers.map(worker => (
          <WorkerCard key={worker.id} worker={worker} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
