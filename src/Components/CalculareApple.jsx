import { Card, CardContent, Grid, TextField } from '@mui/material';
import React,{ useState } from 'react';
import "./Calculator.css"

const CalculareApple = () => {
    const [result, setResult] = useState("");
    const handelClick = (e) => {
      setResult(result.concat(e.target.name));
    };
    const clear = () => {
      setResult("");
    };
    // const backspace = () => {};
    const calculate = () => {
      setResult(eval(result));
    };
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={4.5}></Grid>
                <Grid item xs={3}>
            <Card className='content-main-card'>
                <CardContent>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <input value={result}  className='content-calc-input' />
                        </Grid>
                      
                        <Grid item xs={3}>
                            <button onClick={clear}className="content-silver-color">
                               C
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button onClick={handelClick} className="content-silver-color">
                                +/-
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button name="%" onClick={handelClick} className="content-silver-color">
                                %
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button name="/" onClick={handelClick} className="content-silver-Orange">
                                /
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button name="7" onClick={handelClick} className="content-dark-silver-color">
                               7
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button name="8"  onClick={handelClick} className="content-dark-silver-color">
                                8
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button name="9" onClick={handelClick} className="content-dark-silver-color">
                                9
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button name="*"  onClick={handelClick} className="content-silver-Orange">
                                X
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button name="4" onClick={handelClick} className="content-dark-silver-color">
                               4
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button name="5" onClick={handelClick} className="content-dark-silver-color">
                                5
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button name="6" onClick={handelClick} className="content-dark-silver-color">
                                6
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button name="-" onClick={handelClick} className="content-silver-Orange">
                                -
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button name="1" onClick={handelClick} className="content-dark-silver-color">
                               1
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button name="2" onClick={handelClick} className="content-dark-silver-color">
                                2
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button name="3" onClick={handelClick} className="content-dark-silver-color">
                                3
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button name="+" onClick={handelClick} className="content-silver-Orange">
                                +
                            </button>
                        </Grid>
                        
                        <Grid item xs={6}>
                            <button name="0" onClick={handelClick} className="content-dark-silver-color full-width">
                                0
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button name="." onClick={handelClick} className="content-dark-silver-color">
                                .
                            </button>
                        </Grid>
                        <Grid item xs={3}>
                            <button name="7" onClick={calculate} className="content-silver-Orange">
                               =
                            </button>
                        </Grid>
                      </Grid>
                </CardContent>
            </Card>
                </Grid>
                <Grid item xs={4.5}></Grid>
            </Grid>
        </React.Fragment>
    );
};

export default CalculareApple;