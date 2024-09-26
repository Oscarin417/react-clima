import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap';

const WeatherForm = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(city);
        setCity('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCity">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa una ciudad"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Buscar
            </Button>
        </Form>
    );
};

export default WeatherForm;
