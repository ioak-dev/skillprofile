import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from "./errormessage";
import ArcTextField from '../ui/elements/arc-text-field';
import { Grid, Typography } from '@material-ui/core';
import WizardFlow from './wizard-flow';
import withWizard from './with-wizard';
import UnitOfMeasure from './elements/unit-of-measure';

const componentName = "clientinfo";

const ClientInfo = (props) =>
    <div className="arc-root">
        <form noValidate autoComplete="off">
            <Grid container direction="row" justify="center" alignItems="center"  spacing={8}>
                <Grid item xs={12}>
                    <WizardFlow headline="Client Details"
                                previouspage={previousPage.bind(this, props)} saveforlater={props.saveForLater.bind(this)} nextpage={nextPage.bind(this, props)} />
                </Grid>

                <ErrorMessage errors={props.errormessages} />

                <br />
                <UnitOfMeasure category="Geography" topic="EMEA" />
                <Grid item xs={4}>
                    <Typography variant="body1">SAP EWM</Typography>
                </Grid>
                <Grid item xs={2}>
                    <ArcTextField id={componentName} label="Years" name="name" handlechange={e => props.handlechange(e)}   {...props}
                                  error={props.errorfields.indexOf("name") > -1}/>
                </Grid>
                <Grid item xs={2}>
                    <ArcTextField id={componentName} label="Months" name="name" handlechange={e => props.handlechange(e)}   {...props}
                                  error={props.errorfields.indexOf("name") > -1}/>
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}>
                    <Typography variant="body1">SAP Travel Management</Typography>
                </Grid>
                <Grid item xs={2}>
                    <ArcTextField id={componentName} label="Years" name="name" handlechange={e => props.handlechange(e)}   {...props}
                                  error={props.errorfields.indexOf("name") > -1}/>
                </Grid>
                <Grid item xs={2}>
                    <ArcTextField id={componentName} label="Months" name="name" handlechange={e => props.handlechange(e)}   {...props}
                                  error={props.errorfields.indexOf("name") > -1}/>
                </Grid>
                <Grid item xs={4}></Grid>

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
    return errorfields;
}



ClientInfo.protoTypes = {
    clientinfo: PropTypes.object
}

export default withWizard(ClientInfo, componentName)
