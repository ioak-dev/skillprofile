import React from 'react'
import Geography from './geography.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWizard, reloadWizard, goToPage } from '../../actions/wizardActions';
import { fetchLoggedUser, reloadLoggedUser } from '../../actions/userActions';
import { Grid, Hidden } from '@material-ui/core';

import { SECTION_FIRST, SECTION_02, SECTION_03, SECTION_04, SECTION_05, SECTION_06 ,SECTION_OUTCOME_SAVE } from '../wizard/section-types';
import Profile from './profile.jsx';
import Sapexpertise from './sapexpertise.jsx';
import Overallexperience from './overallexperience.jsx';
import Outcomesave from './outcomesave.jsx';
import IndustrialVertical from './industrial-vertical';
import Offshore from './offShore.jsx';

class Wizard extends React.Component {

    componentDidMount() {
        this.props.fetchLoggedUser(sessionStorage.getItem('userSigninName'));
        this.props.fetchWizard();
        this.setState({
            wizardLoaded: false
        })

        if (!this.props.id) {
            this.props.goToPage(SECTION_FIRST);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedUser && nextProps.loggedUser.id && !this.state.wizardLoaded) {
            this.props.reloadWizard(nextProps.loggedUser.id);
            this.setState({
                wizardLoaded: true
            })
        }
    }

    render() {
        const wizardPages =
            <div>
                {this.props.currentpage === SECTION_FIRST && <Profile loggedInUserId={this.props.loggedUser.id} />}
                {this.props.currentpage === SECTION_02 && <Geography loggedInUserId={this.props.loggedUser.id} />}
                {this.props.currentpage === SECTION_03 && <Sapexpertise loggedInUserId={this.props.loggedUser.id} />}
                {this.props.currentpage === SECTION_04 && <Overallexperience loggedInUserId={this.props.loggedUser.id} />}
                {this.props.currentpage === SECTION_05 && <IndustrialVertical loggedInUserId={this.props.loggedUser.id} />}
                {this.props.currentpage === SECTION_06 && <Offshore loggedInUserId={this.props.loggedUser.id} />}
                {this.props.currentpage === SECTION_OUTCOME_SAVE && <Outcomesave loggedInUserId={this.props.loggedUser.id} />}
            </div>;

        return (
            <Grid container direction="row" justify="center" alignItems="center"  spacing={8}>
                <Hidden smUp>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={10}>
                        {wizardPages}
                    </Grid>
                    <Grid item xs={1}></Grid>
                </Hidden>
                <Hidden smDown>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        {wizardPages}
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Hidden>
            </Grid>
        );
    }
}

Wizard.protoTypes = {
    id: PropTypes.string,
    fetchWizard: PropTypes.func.isRequired,
    reloadWizard: PropTypes.func.isRequired,
    fetchLoggedUser: PropTypes.func.isRequired,
    reloadLoggedUser: PropTypes.func.isRequired,
    goToPage: PropTypes.func.isRequired,
    currentpage: PropTypes.number,
    status: PropTypes.string,
}

const mapStateToProps = state => ({
    currentpage:  state.wizard.currentpage,
    loggedUser: state.user.loggedUser
})

export default connect( mapStateToProps, { fetchWizard, reloadWizard, goToPage, fetchLoggedUser, reloadLoggedUser } )(Wizard)
