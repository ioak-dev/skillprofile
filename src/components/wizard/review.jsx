import React from 'react';
import PropTypes from 'prop-types';
import ErrorMessage from "./errormessage";
import { Grid, Typography, Hidden } from '@material-ui/core';
import WizardFlow from './wizard-flow';
import withWizard from './with-wizard';
import ReviewItem from './review-item';
import moment from 'moment';
import ArcTextField from '../ui/elements/arc-text-field';

const componentName = "review";

const Review = (props) =>
    <div className="arc-root">
        <form noValidate autoComplete="off">
                <Grid item xs={12}>
                    {props.status.name === 'DRAFT' && (!props.createdBy || props.createdBy === props.loggedInUserId)&& 
                        <WizardFlow modify={props.firstPage.bind(this, props)} saveforlater={props.saveForLater.bind(this)} submit={submit.bind(this, props)} />}
                    {(props.status.name === 'L1' || props.status.name === 'L2' || props.status.name === 'ADMIN') && props.createdBy !== props.loggedInUserId &&
                        <WizardFlow approve={approve.bind(this, props)} reject={reject.bind(this, props)} />}
                    {props.status.name === 'ADMIN_APPROVED' && props.createdBy !== props.loggedInUserId &&
                        <WizardFlow complete={complete.bind(this, props)} />}
                </Grid>

                <ErrorMessage errors={props.errormessages} />

            {props.wizardid && 
            <div>
                <Grid item xs={12} container direction="column" align="center">
                    <Typography variant="h4">{props.wizardid}</Typography>
                </Grid>
                <Grid item xs={12} container direction="column" align="center">
                    <Typography variant="h6">{props.status.description}</Typography>
                </Grid>
                <br />
            </div>}

            {/* <Grid item xs={12} container direction="column">
                <Grid xs={12} container item direction="row">
                    <Typography variant="h6">Applicant Details</Typography>
                </Grid>
                <ReviewItem name="Applicant Name" value={props.createdBy}/>
            </Grid>

            <br /> */}

            <Grid item xs={12} container direction="column">
                <Grid xs={12} container item direction="row">
                    <Typography variant="h6">Travel Type</Typography>
                </Grid>
                <ReviewItem name="Request Type" value={props.traveltype.type}/>
            </Grid>

            <br />

            <Grid item xs={12} container direction="column">
                <Grid xs={12} container item direction="row">
                    <Typography variant="h6">Client Information</Typography>
                </Grid>
                <ReviewItem name="Customer Name" value={props.clientinfo.name}/>
                <ReviewItem name="City" value={props.clientinfo.city}/>
                <ReviewItem name="Country" value={props.clientinfo.country}/>
            </Grid>

            <br />


            <Grid item xs={12} container direction="column">
                <Grid xs={12} container item direction="row">
                    <Typography variant="h6">Purpose of visit</Typography>
                </Grid>
                <ReviewItem name="Project Description" value={props.purposeofvisit.description}/>
            </Grid>

            <br />

            <Grid item xs={12} container direction="column">
                <Grid xs={12} container item direction="row">
                    <Typography variant="h6">Flight Details</Typography>
                </Grid>
                <ReviewItem name="Sector1" value={props.flightdetails.sector1}/>
                <ReviewItem name="Sector2" value={props.flightdetails.sector2}/>
                <ReviewItem name="Travel Date" value={moment(props.flightdetails.fromdate).toLocaleString()}/>
                <ReviewItem name="Return Date" value={moment(props.flightdetails.todate).toLocaleString()}/>
                <ReviewItem name="Billability" value={props.flightdetails.billability}/>
            </Grid>

            <br />

            {props.traveltype.type === 'international' &&
                <div>
                    <Grid item xs={12} container direction="column">
                        <Grid xs={12} container item direction="row">
                            <Typography variant="h6">Visa Requirements</Typography>
                        </Grid>
                        <ReviewItem name="Visa Required" value={props.visa.required}/>
                        {props.visa.required === 'yes' &&
                            <ReviewItem name="Visa Details" value={props.visa.remark}/>
                        }
                    </Grid>
                    <br />
                </div>
            }

            <Grid item xs={12} container direction="column">
                <Grid xs={12} container item direction="row">
                    <Typography variant="h6">Hotel and Accommodation</Typography>
                </Grid>
                <ReviewItem name="Hotel Name" value={props.hoteldetails.name}/>
                <ReviewItem name="Address" value={props.hoteldetails.address}/>
                <ReviewItem name="Check-in Time" value={moment(props.hoteldetails.fromdate).toLocaleString()}/>
                <ReviewItem name="Check-out Time" value={moment(props.hoteldetails.todate).toLocaleString()}/>
                <ReviewItem name="Cost of stay" value={props.flightdetails.staycost}/>
                <ReviewItem name="Billability" value={props.flightdetails.billability}/>
            </Grid>

            <br />

            <Grid item xs={12} container direction="column">
                <Grid xs={12} container item direction="row">
                    <Typography variant="h6">Local Transportation</Typography>
                </Grid>
                <ReviewItem name="Sector1" value={props.localtransportdetails.sector1}/>
                <ReviewItem name="Sector2" value={props.localtransportdetails.sector2}/>
                <ReviewItem name="Onward Date" value={moment(props.localtransportdetails.fromdate).toLocaleString()}/>
                <ReviewItem name="Return Date" value={moment(props.localtransportdetails.todate).toLocaleString()}/>
                <ReviewItem name="Billability" value={props.flightdetails.billability}/>
            </Grid>

            <br />


            <Grid item xs={12} container direction="column">
                <Grid xs={12} container item direction="row">
                    <Typography variant="h6">Additional Remarks / Comments</Typography>
                </Grid>
                
                {props.status.name !== 'DRAFT' && props.review.applicantRemarks && <ReviewItem name="Remarks from Applicant" value={props.review.applicantRemarks}/>}
                {props.status.name !== 'DRAFT' && props.status.name !== 'L1' && <ReviewItem name="Remarks from L1" value={props.review.remarksL1}/>}
                {props.status.name !== 'DRAFT' && props.status.name !== 'L1' && props.status.name !== 'L2' && <ReviewItem name="Remarks from L2" value={props.review.remarksL2}/>}
                {props.status.name === 'COMPLETE' && <ReviewItem name="Remarks from Admin" value={props.review.remarksAdmin}/>}
                
            </Grid>

            <Grid item xs={12} container direction="row">
                <Hidden smDown>
                    <Grid xs={2} item></Grid>
                    <Grid xs={8} item>
                        {(!props.createdBy || props.loggedInUserId === props.createdBy) && props.status.name === 'DRAFT' && 
                            <ArcTextField id={componentName} label="Your comments" name="applicantRemarks" handlechange={e => props.handlechange(e)}   {...props}
                                        multiline rows="5" error={props.errorfields.indexOf("applicantRemarks") > -1}/>}
                            
                            {props.status.name === 'L1' && <ArcTextField id={componentName} label="Your comments" name="remarksL1" handlechange={e => props.handlechange(e)}   {...props}
                                        multiline rows="5" error={props.errorfields.indexOf("remarksL1") > -1}/>}

                            {props.loggedInUserId !== props.createdBy && props.status.name === 'L2' && <ArcTextField id={componentName} label="Your comments" name="remarksL2" handlechange={e => props.handlechange(e)}   {...props}
                                        multiline rows="5" error={props.errorfields.indexOf("remarksL2") > -1}/>}

                            {props.loggedInUserId !== props.createdBy && props.status.name === 'ADMIN' && <ArcTextField id={componentName} label="Your comments" name="remarksAdmin" handlechange={e => props.handlechange(e)}   {...props}
                                        multiline rows="5" error={props.errorfields.indexOf("remarksAdmin") > -1}/>}
                    </Grid>
                    <Grid xs={2} item></Grid>
                </Hidden>
                <Hidden smUp>
                    <Grid xs={12} item>
                        {(!props.createdBy || props.loggedInUserId === props.createdBy) && props.status.name === 'DRAFT' && 
                            <ArcTextField id={componentName} label="Your comments" name="applicantRemarks" handlechange={e => props.handlechange(e)}   {...props}
                                        multiline rows="5" error={props.errorfields.indexOf("applicantRemarks") > -1}/>}
                            
                            {props.status.name === 'L1' && <ArcTextField id={componentName} label="Your comments" name="remarksL1" handlechange={e => props.handlechange(e)}   {...props}
                                        multiline rows="5" error={props.errorfields.indexOf("remarksL1") > -1}/>}

                            {props.loggedInUserId !== props.createdBy && props.status.name === 'L2' && <ArcTextField id={componentName} label="Your comments" name="remarksL2" handlechange={e => props.handlechange(e)}   {...props}
                                        multiline rows="5" error={props.errorfields.indexOf("remarksL2") > -1}/>}

                            {props.loggedInUserId !== props.createdBy && props.status.name === 'ADMIN' && <ArcTextField id={componentName} label="Your comments" name="remarksAdmin" handlechange={e => props.handlechange(e)}   {...props}
                                        multiline rows="5" error={props.errorfields.indexOf("remarksAdmin") > -1}/>}
                    </Grid>
                </Hidden>
            </Grid>

        </form>
    </div>

function reject(props) {
    if (validate(props, 'reject').length === 0) {
        // props.nextPage(1);
        props.reject(props.loggedInUserId);
    }
}

function approve(props) {
    if (validate(props, 'approve').length === 0) {
        // props.nextPage(1);
        props.approve(props.loggedInUserId);
    }
}

function submit(props) {
    if (validate(props, 'submit').length === 0) {
        // props.nextPage(1);
        props.submit(props.loggedInUserId);
    }
}

function complete(props) {
    if (validate(props, 'complete').length === 0) {
        // props.nextPage(1);
        props.complete(props.loggedInUserId);
    }
}

function validate(props, action) {
    let errorfields = props.validateMandatoryFields();
    const errormessages = [];

    if (props.status.name === 'L1' && action === 'reject') {
        errorfields = props.validateMandatoryFields('remarksL1');
    }
    
    if (props.status.name === 'L2' && action === 'reject') {
        errorfields = props.validateMandatoryFields('remarksL2');
    }
    
    if (props.status.name === 'ADMIN' && action === 'reject') {
        errorfields = props.validateMandatoryFields('remarksAdmin');
    }
    
    if (errorfields.length > 0) {
        errormessages.push("Reason for rejection missing");
    }

    props.reportErrors(errorfields, errormessages);

    return errorfields;
}

Review.protoTypes = {
    wizardid: PropTypes.string,
    traveltype: PropTypes.object,
    clientinfo: PropTypes.object,
    purposeofvisit: PropTypes.object,
    flightdetails: PropTypes.object,
    visa: PropTypes.object,
    hoteldetails: PropTypes.object,
    localtransportdetails: PropTypes.object,
    review: PropTypes.object,
    status: PropTypes.string,
    createdBy:  PropTypes.string,
    loggedInUserId: PropTypes.string
}

export default withWizard(Review, componentName)
