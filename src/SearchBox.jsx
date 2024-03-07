

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const API_URL = import.meta.env.VITE_REACT_APP_API_URL;



import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({ updateInfo }) {
    console.log(API_KEY);
    console.log(API_URL);
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let getWeatherInfo = async () => {
       try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            desc: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
       } catch (err) {
        throw err;
       } 
    }

    let HandleChange = (evt) => {
        setCity(evt.target.value);
    }
    let HandleSubmit = async (evt) => {
       try {
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
       } catch (err) {
        setError(true);
       }
    }




    return (
        <> <div className='search'>
            <form onSubmit={HandleSubmit}>

                <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={HandleChange} /><br /><br />
                <Button variant="contained" type='submit' >
                    Search
                </Button>
            </form>
            {error && <p style={{color:"Red"}}>NO Such Place exists!</p>}
        </div>

        </>)


}