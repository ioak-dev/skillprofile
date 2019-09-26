import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from "./errormessage";
import { Grid } from '@material-ui/core';
import WizardFlow from './wizard-flow';
import withWizard from './with-wizard';
import UnitOfMeasure from './elements/unit-of-measure';

const componentName = "Split up of Overall Experience";

const Overallexperience = (props) =>
    <div className="arc-root">
        <form noValidate autoComplete="off">
            <Grid container direction="row" justify="center" alignItems="center"  spacing={8}>
                <Grid item xs={12}>
                    <WizardFlow headline={componentName} previouspage={previousPage.bind(this, props)} submit={nextPage.bind(this,props)} />
                </Grid>

                <ErrorMessage errors={props.errormessages} />

                <br />
            </Grid>

            {props[componentName].map((item, index) => 
                <UnitOfMeasure handlechange={props.handlechange} index={index} item={item} key={index}/>
            )}                

        </form>
    </div>

function previousPage(props) {
    props.previousPage(1);
}

function nextPage(props) {
    if (validate(props).length === 0) {
        alert('save to database not integrated');
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

Overallexperience.protoTypes = {
    "Split up of Overall Experience": PropTypes.object
}

export default withWizard(Overallexperience, componentName)
