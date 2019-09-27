import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from "./errormessage";
import ArcTextField from '../ui/elements/arc-text-field';
import { Grid, Typography } from '@material-ui/core';
import WizardFlow from './wizard-flow';
import withWizard from './with-wizard';
import UnitOfMeasure from './elements/unit-of-measure';

const componentName = "outcomesave";

const Outcomesave = (props) =>
    <div className="arc-root">
        <Grid container direction="column" justify="center" alignItems="center"  spacing={8}>

            <br />
            <i className="material-icons" style={{'transform': 'scale(4)', 'color':'#4E8E57'}}>check_circle</i>
            <br /><br />
            
            <Typography variant="h6">Profile changes saved successfully</Typography>
        </Grid>
    </div>


Outcomesave.protoTypes = {
}

export default withWizard(Outcomesave, componentName)
