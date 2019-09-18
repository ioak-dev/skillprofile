import React from 'react'
import Geography from './geography.jsx';
import Domain from './domain.jsx';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWizard, reloadWizard, goToPage } from '../../actions/wizardActions';
import { Grid, Hidden } from '@material-ui/core';

import { SECTION_FIRST, SECTION_02, SECTION_03, SECTION_04 } from '../wizard/section-types';
import Profile from './profile.jsx';

class Wizard extends React.Component {

    componentDidMount() {
        this.props.reloadWizard();
        this.props.fetchWizard();

        if (!this.props.id) {
            this.props.goToPage(SECTION_FIRST);
        }
    }

    render() {
        const wizardPages =
            <div>
                {this.props.currentpage === SECTION_FIRST && <Profile loggedInUserId={this.props.loggedUser.id} />}
                {this.props.currentpage === SECTION_02 && <Geography loggedInUserId={this.props.loggedUser.id} />}
                {this.props.currentpage === SECTION_03 && <Domain loggedInUserId={this.props.loggedUser.id} />}
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
    goToPage: PropTypes.func.isRequired,
    currentpage: PropTypes.number,
    status: PropTypes.string,
}

const mapStateToProps = state => ({
    currentpage:  state.wizard.currentpage,
    loggedUser: state.user.loggedUser
})

export default connect( mapStateToProps, { fetchWizard, reloadWizard, goToPage } )(Wizard)
