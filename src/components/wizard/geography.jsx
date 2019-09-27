import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from "./errormessage";
import { Grid } from '@material-ui/core';
import WizardFlow from './wizard-flow';
import withWizard from './with-wizard';
import UnitOfMeasure from './elements/unit-of-measure';

const componentName = "Geography worked for - Customer served";

const Geography = (props) =>
    <div className="arc-root">
        <form noValidate autoComplete="off">
            <Grid container direction="row" justify="center" alignItems="center"  spacing={8}>
                <Grid item xs={12}>
                    <WizardFlow headline={componentName} previouspage={previousPage.bind(this, props)} nextpage={nextPage.bind(this, props)} />
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
    if (props.validate().length === 0) {
        props.nextPage(1);
    }
}



Geography.protoTypes = {
    geography: PropTypes.object
}

export default withWizard(Geography, componentName)
