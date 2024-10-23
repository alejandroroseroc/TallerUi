// HomePage.tsx
import React, { useState } from 'react';
import ReserveButton from "@/components/ReserveButton";
import ReservationForm from "@/components/ReservationForm"; 

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedSport, setSelectedSport] = useState('');

  const handleReserve = (sport: string) => {
    setSelectedSport(sport);
    setShowForm(true);
  };

  const handleSubmit = (name: string, date: string) => {
    console.log(`Reservation made for ${name} on ${date} for ${selectedSport}`);
    
  };

  return (
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      {!showForm ? (
        <>
          <ReserveButton
            sport="Football"
            imageUrl="https://imgs.search.brave.com/tqtYpIvoZFN4erovG3pQzVHLiXGLKqmHAPavChvutUw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzgyLzY3Lzg1/LzM2MF9GXzg4MjY3/ODU5MV9TaGVtaWFP/Y2ZzbXFPbnBkd1RP/Y3N5bkVoU2d3WHdQ/YS5qcGc"
            onClick={() => handleReserve("Football")}
          />
          <ReserveButton
            sport="Micro Football"
            imageUrl="https://imgs.search.brave.com/31V4F8JQwbeXZ-CKNsYoFVUuvA_oN7TPMvHmDuYHddA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/NjIwNzc5Ny9lcy9m/b3RvL2NhbmNoYS1k/ZS1mJUMzJUJBdGJv/bC1zYWxhLWp1cm9u/Zy1vZXN0ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9R3Nk/TTFrLW5obUg2NVN3/UXQtTUxuMGs2M0dO/TmQ0YkVlSGMwT1VR/MVh3ND0"
            onClick={() => handleReserve("Micro Football")}
          />
          <ReserveButton
            sport="Volleyball"
            imageUrl="https://imgs.search.brave.com/Sh7vKvtP7VnQsOfHXLHzce9dqVEf2zrFENvQYjoiac8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbnRl/Z3JhbHNwb3IuY29t/L2Fzc2V0cy9maWxl/bWFuYWdlci9jMjU0/NTUyNDc1MzYwZjQw/MGE4YTY4ODY4NTIy/OGM2MS5qcGc"
            onClick={() => handleReserve("Volleyball")}
          />
        </>
      ) : (
        <ReservationForm sport={selectedSport} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default HomePage;
