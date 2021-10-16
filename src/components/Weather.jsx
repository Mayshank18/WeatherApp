import {Box,FormHelperText,makeStyles} from '@material-ui/core'
import logo from '../images/bg.jpg'
import Form from './Form'

const useStyles=makeStyles(theme=>({
    container:{
        height:'100vh',
        display:'flex',
        alignItems:'center',
        width:'65%',
        margin:'0 auto',
        [theme.breakpoints.down('sm')]:{
            display:'flex',
            flexDirection:'column',
            height:'100vh',
            width:'100%',
        }
    },
    leftContainer:{
        backgroundImage:`url(${logo})`,
        height:'80%',
        width:'30%',
        backgroundSize:'cover',
        borderRadius:'20px 0 0 20px',
        [theme.breakpoints.down('sm')]:{
            backgroundImage:`url(${logo})`,
            height:'30%',
            width:'100%',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            borderRadius:'0 0 0 0'
        }
    },
    rightContainer:{
        background:'linear-gradient(to right,#e24c3c,#e67e22)',
        height:'80%',
        width:'70%',
        [theme.breakpoints.down('sm')]:{
            background:'linear-gradient(to right,#e24c3c,#e67e22)',
            height:'70%',
            width:'100%',
            overflow:'scroll'
        }
    }
}));

const Weather=()=>{
    const classes=useStyles();
    return(
    <Box className={classes.container}>
        <Box className={classes.leftContainer}></Box>
        <Box className={classes.rightContainer}>
            <Form/>
        </Box>
    </Box>
    );
     
}

export default Weather;