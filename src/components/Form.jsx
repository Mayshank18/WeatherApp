import { Box,Button,TextField,makeStyles } from "@material-ui/core";
import { useEffect } from "react";
import { getData } from "../service/api";
import { useState } from "react";
import Information from "./Information";


const useStyles=makeStyles(theme=>({
    component:{
        padding:10,
        background:'#445A6F'
    },
    input:{
        color:'#fff',
        marginRight:15
    },
    button:{
        width:150,
        height:40,
        background:'#e67e22',
        color:'#fff',
        marginTop:5,
        [theme.breakpoints.down('sm')]:{
            width:100,
            height:30,
            background:'#e67e22',
            color:'#fff',
            marginTop:10,
            fontSize:9
        }
    }
}));

const Form=()=>{
    const classes=useStyles();
    const [data,getWeatherData]=useState();
    const [city,setCity]=useState('');
    const [country,setCountry]=useState('');
    const [click,handleClick]=useState(false);

    useEffect(()=>{
        const getWeather=async()=>{
            city && await getData(city,country).then(response=>{
                getWeatherData(response.data);
                console.log(response.data);
            })
        }
        getWeather();
        handleClick(false);
    },[click]);

    const handleCityChange=(value)=>{
        setCity(value);
    }
    const handleCountryChange=(value)=>{
        setCountry(value);
    }

    return(
        <>
            <Box className={classes.component}>
                <TextField className={classes.input}
                    inputProps={{className:classes.input}}
                    onChange={(e)=>handleCityChange(e.target.value)}
                    label="City"
                />
                <TextField className={classes.input}
                    inputProps={{className:classes.input}}
                    onChange={(e)=>handleCountryChange(e.target.value)}
                    label="Country"
                />
                <Button className={classes.button} variant="contained" onClick={()=>handleClick(true)}>Get Weather</Button>
            </Box>
            <Information data={data}/>
        </>
    )
}
export default Form;