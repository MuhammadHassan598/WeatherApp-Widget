import AcUnitIcon from '@mui/icons-material/AcUnit';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LightModeIcon from '@mui/icons-material/LightMode';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({ info }) {
    let COLD_URL = "https://images.unsplash.com/photo-1477468572316-36979010099d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q09MRHxlbnwwfHwwfHx8MA%3D%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1661498198533-4d1bc830546f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlciUyMGltYWdlfGVufDB8fDB8fHww";
    let RAIN_URL = "https://images.unsplash.com/photo-1428592953211-077101b2021b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW58ZW58MHx8MHx8fDA%3D";








    return (
        <>
            <div className="infoBox">

                <div className='infoCard'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia className='cardImage'
                            sx={{ height: 180 }}
                            image={info.humidity > 80 ? RAIN_URL : info.temp > 17 ? HOT_URL : COLD_URL}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city}
                                {info.humidity > 80 ? <BeachAccessIcon /> : info.temp > 17 ? <LightModeIcon /> : <AcUnitIcon />}

                            </Typography>
                            <Typography variant="body2" color="text.secondary" component={"span"}>

                                <p>Temperature : {info.temp}&deg;C</p>
                                <p>Humidity : {info.humidity}</p> <p> Min Temperature : {info.tempMin}&deg;C
                                </p>
                                <p>Max Temperature : {info.tempMax}&deg;C</p>
                                <p>The weather can be descibed as {info.desc} and feels Like : {info.feelsLike}&deg;C</p>
                            </Typography>
                        </CardContent>

                    </Card>

                </div>

            </div>
        </>

    )
}