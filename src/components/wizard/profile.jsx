import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from "./errormessage";
import { Grid, Typography, TextField } from '@material-ui/core';
import WizardFlow from './wizard-flow';
import withWizard from './with-wizard';
import {DatePicker, MuiPickersUtilsProvider} from "material-ui-pickers";
import MomentUtils from "@date-io/moment";

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
                            label='Employee ID'
                            name='empId'
                            disabled
                            value={props[componentName][index].empId}
                            onChange={e => props.handlechange(e, index)}
                            margin="normal"
                            variant="standard"
                            fullWidth
                            // error={error}
                        />
                    </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label='Designation'
                                name='designation'
                                disabled
                                value={props[componentName][index].designation}
                                onChange={e => props.handlechange(e, index)}
                                margin="normal"
                                variant="standard"
                                fullWidth
                                // error={error}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label='Primary Technology'
                                name='primaryTech'
                                value={props[componentName][index].primaryTech}
                                onChange={e => props.handlechange(e, index)}
                                margin="normal"
                                variant="standard"
                                fullWidth
                                // error={error}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label='Primary Skill'
                                name='primarySkill'
                                value={props[componentName][index].primarySkill}
                                onChange={e => props.handlechange(e, index)}
                                margin="normal"
                                variant="standard"
                                fullWidth
                                // error={error}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label='Billability'
                                name='billability'
                                value={props[componentName][index].billability}
                                onChange={e => props.handlechange(e, index)}
                                margin="normal"
                                variant="standard"
                                fullWidth
                                // error={error}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <div className="picker">
                                    <DatePicker
                                        label='Career Starting Date'
                                        name='careerStartDate'
                                        onChange={e => props.handledatechange(e, index)}
                                        margin="normal"
                                        variant="standard"
                                        fullWidth
                                    />
                                </div>
                            </MuiPickersUtilsProvider>
                        </Grid>

                        <Grid item xs={12}>
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <div className="picker">
                                    <DatePicker
                                        label='Date Of Joining'
                                        name='joiningDate'
                                        selected={props[componentName][index].joiningDate}
                                        onChange={e => props.handledatechange(e, index)}
                                        margin="normal"
                                        variant="standard"
                                        fullWidth
                                    />
                                </div>
                            </MuiPickersUtilsProvider>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label='Carrer Gap Years'
                                name='carrerGapYears'
                                value={props[componentName][index].carrerGapYears}
                                onChange={e => props.handlechange(e, index)}
                                margin="normal"
                                variant="standard"
                                fullWidth
                                // error={error}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label='Career Gap Months'
                                name='carrerGapMonths'
                                value={props[componentName][index].carrerGapMonths}
                                onChange={e => props.handlechange(e, index)}
                                margin="normal"
                                variant="standard"
                                fullWidth
                                // error={error}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label='Total Years Of Experience'
                                name='totalExpYears'
                                value={props[componentName][index].totalExpYears}
                                onChange={e => props.handlechange(e, index)}
                                margin="normal"
                                variant="standard"
                                fullWidth
                                // error={error}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label='Total Experience Months'
                                name='totalExpMonths'
                                value={props[componentName][index].totalExpMonths}
                                onChange={e => props.handlechange(e, index)}
                                margin="normal"
                                variant="standard"
                                fullWidth
                                // error={error}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label='Functional Years Of Experience'
                                name='functionalExpYears'
                                value={props[componentName][index].functionalExpYears}
                                onChange={e => props.handlechange(e, index)}
                                margin="normal"
                                variant="standard"
                                fullWidth
                                // error={error}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label='Functional Experience Months'
                                name='functionalExpMonths'
                                value={props[componentName][index].functionalExpMonths}
                                onChange={e => props.handlechange(e, index)}
                                margin="normal"
                                variant="standard"
                                fullWidth
                                // error={error}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label='Previous Westernacher Experience Years'
                                name='previousWesternacherExpYears'
                                value={props[componentName][index].previousWesternacherExpYears}
                                onChange={e => props.handlechange(e, index)}
                                margin="normal"
                                variant="standard"
                                fullWidth
                                // error={error}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label='Previous Westernacher Experience Months'
                                name='previousWesternacherExpMonths'
                                value={props[componentName][index].previousWesternacherExpMonths}
                                onChange={e => props.handlechange(e, index)}
                                margin="normal"
                                variant="standard"
                                fullWidth
                                // error={error}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label='Total Westernacher Experience Years'
                                name='totalWesternacherExpYears'
                                value={props[componentName][index].totalWesternacherExpYears}
                                onChange={e => props.handlechange(e, index)}
                                margin="normal"
                                variant="standard"
                                fullWidth
                                // error={error}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label='Total Westernacher Experience Months '
                                name='totalWesternacherExpMonths'
                                value={props[componentName][index].totalWesternacherExpMonths}
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
