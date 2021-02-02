import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import axios from "axios";

const key ="kzuTQeaHcCMdQ02VyV38dRKVvTBffunvuHxyjztB";


function Main(props) {
  const [ check, setCheck ] = useState(true);
  const [ asteroidId, setAsteroidId] = useState("");

const valueChange = e =>{
    setAsteroidId(e.target.value);
    setCheck(e.target.value.length === 0 ? true : false);
}

// getSubmit button API Call
    const getSubmit = () => {
        let { history } = props;
        axios
        .get 
            (`https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${key}`)
            .then (res => {
                console.log(res.data);
                if (res && res.data) {
                    console.log("astroid ID")
                    history.push ({
                        pathname:"data",
                        state: res.data
                    });
                }

            })
            . catch(error => {
                history.push ({
                    pathname:"data",
                    state: ""
                });
    
            })
        
        
    }

//generateRandomData button API Call
const generateRandomData = () => {
    let { history } = props;
    axios.get 
        (`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${key}`)
        .then (res => {
            console.log(res);
            if (res && res.data && res.data.near_earth_objects){
                console.log(res.data.near_earth_objects);
                let length = res.data.near_earth_objects.length;
                let random = Math.random() * (length - 0) + 0 ;
                let final = Math.floor(random);
                let info = res.data.near_earth_objects[final];
                history.push ({
                    pathname:"data",
                    state: info
                });
            } 
        })
        . catch(error => {
            history.push ({
                pathname:"data",
                state: ""
            });

        })
    
}


  return (
    <>
        <Typography variant="h5" gutterBottom>
             Engineering AI Task   
        </Typography>
        <br />

        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField id="outlined-basic"
                 label="Enter Asteroid ID"
                  variant="outlined"
                  onChange={valueChange}
                  value={asteroidId}
                  />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained"
                    disabled= {check} 
                    onClick={getSubmit}
                >
                    Submit
                </Button>
            </Grid>
        </Grid>
        <br />
        <br />
        <Divider />
        <br />
        <br />
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                    Generate Random Asteroid 
                </Typography>
                <Button variant="contained"
                    color="primary"
                    onClick={generateRandomData}    
                >
                    Random Asteroid
                </Button>    
            </Grid>
        </Grid>
        
    </>    
  );
}

export default Main;