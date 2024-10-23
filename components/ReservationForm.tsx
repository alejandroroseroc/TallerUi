// ReservationForm.tsx
import React, { useState } from 'react';
import { Button, Input } from "@nextui-org/react";

const ReservationForm: React.FC<{ sport: string; onSubmit: (name: string, date: string) => void }> = ({ sport, onSubmit }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, date);
    };

return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <h2>Reserve {sport} Court</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
            <Input
                isClearable
                label="Your Name"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                required
            />
        </div>
        <div>
            <Input
                type="date"
                label="Reservation Date"
                onChange={(e) => setDate(e.target.value)}
                required
            />
        </div>
        <div>
            <Button type="submit" color="primary" style={{ marginTop: '10px' }}>
                Confirm Reservation
            </Button>
        </div>
        </form>
    </div>
    );
};

export default ReservationForm;
