import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

function Info(props) {
    let { state } = props.location;
    return(
        <>
        <Typography variant="h5" gutterBottom>
            Random Asteroid  Info
        </Typography>
        <Divider /><br />
        {state ? (
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} style={{textAlign:"end"}}>
                            <Typography variant="h6" gutterBottom>Name : </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            {state.name}
                        </Grid>
                    </Grid> 
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} style={{textAlign:"end"}}>
                            <Typography variant="h6" gutterBottom>Nasa Jpl Url :</Typography> 
                        </Grid>
                        <Grid item xs={6}>
                            <a href=""> {state.nasa_jpl_url}</a>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={4} style={{textAlign:"end"}}>
                            <Typography variant="h6" gutterBottom>Potentially hazardous Asteroid : </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            {String(state.is_potentially_hazardous_asteroid)} 
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        ):(
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>Oops! No Data Available</Typography>
                </Grid>
            </Grid>
        )}
        </>
    )
}
export default Info;