import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from "./errormessage";
import { Grid } from '@material-ui/core';
import WizardFlow from './wizard-flow';
import withWizard from './with-wizard';
import UnitOfMeasure from './elements/unit-of-measure';

const componentName = "domain";

const Domain = (props) =>
    <div className="arc-root">
        <form noValidate autoComplete="off">
            <Grid container direction="row" justify="center" alignItems="center"  spacing={8}>
                <Grid item xs={12}>
                    <WizardFlow previouspage={previousPage.bind(this, props)} nextpage={nextPage.bind(this, props)} />
                </Grid>

                <ErrorMessage errors={props.errormessages} />

                <br />
            </Grid>

            {/* <Grid container direction="row" justify="center" alignItems="center"  spacing={8}> */}
                {props.domain.map((item, index) => 
                    <UnitOfMeasure handlechange={props.handlechange} index={index} item={item} key={index}/>
                )}
            {/* </Grid> */}


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



Domain.protoTypes = {
    domain: PropTypes.object
}

export default withWizard(Domain, componentName)
