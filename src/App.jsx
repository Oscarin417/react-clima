import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import WeatherForm from '../components/WeatherForm';
import Weather from '../components/Weather';
import { Container } from 'react-bootstrap';
import axios from 'axios'

const App = () => {
    const [weather, setWeather] = useState(null);
    const apiKey = 'df5c47b82fb6c11849b3732a2928b073'; //Clave API

    const handleSearch = async (city) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
            );
            setWeather(response.data);
        } catch (error) {
            console.error("Error fetching the weather data", error);
            setWeather(null);
        }
    };

    return (
        <Container>
            <h1>Aplicación del Clima</h1>
            <WeatherForm onSearch={handleSearch} />
            {weather && <Weather weather={weather} />}
        </Container>
    );
};

export default App;