import React, { useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
<button type="button" class="btn btn-primary">Primary</button>

function App() {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    eventName: '',
    date: '',
    location: '',
    description: '',
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
    setEvents([...events, formData]);
    setFormData({
      eventName: '',
      date: '',
      location: '',
      description: ''
    });
  };

  return (
    <Container>
      <h1>Eventos App</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="eventName">
          <Form.Label>Nombre del Evento</Form.Label>
          <Form.Control
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>Ubicación</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrar Evento
        </Button>
      </Form>
      <hr />
      <h2>Eventos Registrados</h2>
      <ListGroup>
        {events.map((event, index) => (
          <ListGroup.Item key={index}>
            <strong>{event.eventName}</strong> - {event.date} - {event.location}<br />
            {event.description}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>

  )
}

export default App
