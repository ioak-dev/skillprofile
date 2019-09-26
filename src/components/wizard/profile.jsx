import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from "./errormessage";
import { Grid, Typography, TextField } from '@material-ui/core';
import WizardFlow from './wizard-flow';
import withWizard from './with-wizard';

const componentName = "profile";

const Profile = (props) =>
    <div className="arc-root">
        <form noValidate autoComplete="off">
            <Grid container direction="row" justify="center" alignItems="center"  spacing={8}>
                <Grid item xs={12}>
                    <WizardFlow nextpage={nextPage.bind(this, props)} />
                </Grid>

                <ErrorMessage errors={props.errormessages} />
                {props[componentName].map((item, index) =>
                    <Grid container key={index}>
                        <Grid item xs={12}>
                            <TextField
                            label='First Name'
                            name='firstName'
                            // disabled
                            value={props[componentName][index].firstName}
                            onChange={e => props.handlechange(e, index)}
                            margin="normal"
                            variant="standard"
                            fullWidth
                            // error={error}
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField
                            label='Last Name'
                            name="lastName"
                            disabled
                            value={props[componentName][index].lastName}
                            onChange={e => props.handlechange(e, index)}
                            margin="normal"
                            variant="standard"
                            fullWidth
                            // error={error}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            label='Date of joining'
                            name='joiningdate'
                            value={props[componentName][index].joiningdate}
                            onChange={e => props.handlechange(e, index)}
                            margin="normal"
                            variant="standard"
                            fullWidth
                            // error={error}
                            />
                        </Grid>
                    </Grid>
                )}
                
            </Grid>
        </form>
    </div>

function previousPage(props) {
    props.previousPage(1);
}

function nextPage(props) {
    if (validate(props).length === 0) {
        props.nextPage(1);
    }
}

function validate(props) {
    const errorfields = props.validateMandatoryFields();
    const errormessages = [];

    if (errorfields.length > 0) {
        errormessages.push("Mandatory fields missing");
    }

    props.reportErrors(errorfields, errormessages);

    return errorfields;
}



Profile.protoTypes = {
    geography: PropTypes.object
}

export default withWizard(Profile, componentName)
