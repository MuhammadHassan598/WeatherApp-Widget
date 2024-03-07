import SearchBox from "./src/SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Lahore",
        desc
            :
            "clear sky",
        feelsLike
            :
            23.1,
        humidity
            :
            25,
        temp
            :
            23.99,
        tempMax
            :
            23.99,
        tempMin
            :
            21.72,
    });
    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return (
        <>
            <div>
                <h1 style={{ textAlign: "center" }}>Weather App by Muhammad Hassan</h1>
                <SearchBox updateInfo={updateInfo} />
                <InfoBox info={weatherInfo} />
            </div>
        </>
    )

}