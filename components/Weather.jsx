import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap';

const Weather = ({ weather }) => {
    return (
        <Card style={{ width: '18rem', marginTop: '20px' }}>
            <Card.Body>
                <Card.Title>{weather.name}</Card.Title>
                <Card.Text>
                    Temperatura: {(weather.main.temp - 273.15).toFixed(2)} °C
                </Card.Text>
                <Card.Text>
                    Humedad: {weather.main.humidity} %
                </Card.Text>
                <Card.Text>
                    Descripción: {weather.weather[0].description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Weather;
