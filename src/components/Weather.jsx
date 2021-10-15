import {Box,makeStyles} from '@material-ui/core'
import logo from '../images/bg.jpg'
import Form from './Form'

const useStyles=makeStyles({
    container:{
        height:'100vh',
        display:'flex',
        alignItems:'center',
        width:'65%',
        margin:'0 auto'
    },
    leftContainer:{
        backgroundImage:`url(${logo})`,
        height:'80%',
        width:'30%',
        backgroundSize:'cover',
        borderRadius:'20px 0 0 20px'

    },
    rightContainer:{
        background:'linear-gradient(to right,#e24c3c,#e67e22)',
        height:'80%',
        width:'70%'
    }
})

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