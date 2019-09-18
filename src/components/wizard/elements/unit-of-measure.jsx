import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, TextField } from '@material-ui/core';

function UnitOfMeasure(props) {
    return (
        <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
            <Grid item xs={2}>
                <TextField
                label='years'
                name='years'
                value={props.item['years']}
                type="number"
                onChange={e => props.handlechange(e, props.index)}
                margin="normal"
                variant="standard"
                fullWidth
                // error={error}
                />
            </Grid>
            <Grid item xs={2}>
                <TextField
                label='months'
                name='months'
                value={props.item['months']}
                type="number"
                onChange={e => props.handlechange(e, props.index)}
                margin="normal"
                variant="standard"
                fullWidth
                // error={error}
                />
            </Grid>    
            <Grid item xs={8}>
                <Typography variant="body1">{props.item['topic']}</Typography>
            </Grid>
        </Grid>
    )
}

UnitOfMeasure.propTypes = {
    index: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    handlechange: PropTypes.func.isRequired
};

export default UnitOfMeasure;
