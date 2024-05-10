import React, { useState } from 'react';
import './EventForm.css';

function EventForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        eventName: '',
        date: '',
        location: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            eventName: '',
            date: '',
            location: '',
            description: ''
        });
    };

    return (
        <div className="event-form-container">
            <h2>Formulario de Evento</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="eventName">Nombre del Evento</label>
                    <input type="text" id="eventName" name="eventName" value={formData.eventName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Fecha</label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Ubicación</label>
                    <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción</label>
                    <textarea id="description" name="description" rows="3" value={formData.description} onChange={handleChange} required />
                </div>
                <button type="submit">Registrar Evento</button>
            </form>
        </div>
    );
}

export default EventForm;
