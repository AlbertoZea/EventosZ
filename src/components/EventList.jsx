import React from 'react';

const EventList = ({ events }) => {
  return (
    <div className="fade">
      <h2>Eventos Registrados:</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <h3>{event.eventName}</h3>
            <p>Fecha: {event.date}</p>
            <p>Ubicación: {event.location}</p>
            <p>Descripción: {event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
