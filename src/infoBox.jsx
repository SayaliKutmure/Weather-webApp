import Card from '@mui/material/Card';


import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";

export default function InfoBox({info}){
  let img = "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=421&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const hot ="https://media.istockphoto.com/id/880957024/photo/italy-tuscany-region-beautiful-panoramic-landscape-of-traditional-tuscan-nature-sunrise-dawn.jpg?s=1024x1024&w=is&k=20&c=cgbkBay0cgnKOfGOEVnkMZvT-AxWDbVW9suS1WlPtE0=";
  const cold="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const rainy="https://images.unsplash.com/photo-1583054994298-cc68ddaca862?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
 
    return(
       <div className="InfoBox">
       
        <div className='cardcontainer'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80 ? rainy : info.temp >15 ? hot : cold}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} >
      <p>   <p> Temperture = {info.temp}&deg;C</p>
          <p> Humidity = {info.humidity}</p>
           <p> Max Temp = {info.tempMax}&deg;C</p>
            <p> Min Temp = {info.humidity}&deg;C</p>
             <p> The Weather feels like {info.feelslike}&deg;C</p></p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
        )


}