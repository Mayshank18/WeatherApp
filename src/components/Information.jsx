import { Box, Typography,makeStyles} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn' 
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import OpacityIcon from '@material-ui/icons/Opacity'
import Brightness5Icon from '@material-ui/icons/Brightness5'
import Brightness6Icon from '@material-ui/icons/Brightness6'
import DehazeIcon from '@material-ui/icons/Dehaze'
import CloudIcon from '@material-ui/icons/Cloud'
import AccessibilityIcon from '@material-ui/icons/Accessibility';


const useStyles=makeStyles(theme=>({
    component:{
        margin:30
    },
    row:{
        padding:8,
        fontSize:17,
        letterSpacing:2,
        [theme.breakpoints.down('sm')]:{
            padding:8,
            fontSize:10,
            letterSpacing:2,
        }
    },
    value:{
        color:'#fff',
        fontSize:15,
        [theme.breakpoints.down('sm')]:{
            color:'#fff',
            fontSize:8,
        }
    },
    icon:{
        marginRight:15,
        color:'darkred',
    }
}));

const Information=({data})=>{
    const classes=useStyles();
    return(
        data?
            <Box className={classes.component}>
                <Typography className={classes.row}><LocationOnIcon className={classes.icon}/>Location <Box className={classes.value} component="span">{data.name},{data.sys.country}</Box></Typography>
                <Typography className={classes.row}><SettingsBrightnessIcon className={classes.icon}/>Temperature <Box className={classes.value} component="span">{data.main.temp}°C</Box></Typography>
                <Typography className={classes.row}><AccessibilityIcon className={classes.icon}/>Feels Like <Box className={classes.value} component="span">{data.main.feels_like}°C</Box></Typography>
                <Typography className={classes.row}><OpacityIcon className={classes.icon}/>Humidity <Box className={classes.value} component="span">{data.main.humidity}%</Box></Typography>
                <Typography className={classes.row}><Brightness5Icon className={classes.icon}/>SunRise <Box className={classes.value} component="span">{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</Box></Typography>
                <Typography className={classes.row}><Brightness6Icon className={classes.icon}/>Sunset <Box className={classes.value} component="span">{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</Box></Typography>
                <Typography className={classes.row}><DehazeIcon className={classes.icon}/>Condition <Box className={classes.value} component="span">{data.weather[0].main}</Box></Typography>
                <Typography className={classes.row}><CloudIcon className={classes.icon}/>Clouds <Box className={classes.value} component="span">{data.clouds.all}</Box></Typography>
            </Box>:''
    )
}

export default Information;