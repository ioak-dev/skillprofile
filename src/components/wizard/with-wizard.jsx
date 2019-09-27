import React, { Component} from 'react';
import { connect } from 'react-redux';
import { goToPage, goToFirstPage, goToPreviousPage, goToNextPage, fetchWizard, updateWizard, saveWizard } from '../../actions/wizardActions';
import moment from 'moment';

const withWizard = (WrappedComponent, dataref) => {
    class Wrapper extends Component {
        componentDidMount() {
            this.props.fetchWizard();
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps[dataref]) {
                this.setState(
                    {
                        [dataref]: nextProps[dataref]
                    }
                )
            }
        }

        constructor(props) {
            super(props);

            this.state = {
                errormessages: [],
                [dataref]: this.props[dataref]
            };

            this.handlechange = this.handlechange.bind(this);
            this.handledatechange = this.handledatechange.bind(this);
            // this.submit = this.submit.bind(this);
        }

        handledatechange(event, fieldname, index) {
            const node = this.state[dataref];
            node[index][fieldname] = moment(event).toDate();
            this.setState(
                {
                    [dataref]: node
                }
            );
        }

        handlechange = (event, index) => {
            const node = this.state[dataref];
            node[index][event.currentTarget.name] = event.currentTarget.value;
            this.setState({
                [dataref]: node
            });
        }

        getReducerType() {
            return 'UPDATE_' + dataref.toUpperCase();
        }

        reportErrors(errormessages) {
            this.setState({
                errormessages: errormessages
            })
        }

        nextPage(count) {
            this.props.updateWizard(dataref, this.state[dataref]);
            this.props.goToNextPage(this.props.currentpage, count);
        }

        submit(userId) {
            this.props.updateWizard(dataref, this.state[dataref]);
            this.props.saveWizard(userId, this.props.profile[0], {
                'Geography worked for - Customer served': this.props['Geography worked for - Customer served'],
                'IT & SAP Expertise': this.props['IT & SAP Expertise'],
                'Split up of Overall Experience': this.props['Split up of Overall Experience']
            });
            this.props.goToNextPage(this.props.currentpage, 1);
        }

        firstPage() {
            this.props.goToFirstPage();
        }

        previousPage(count) {
            this.props.updateWizard(this.getReducerType(), "1", this.state);
            this.props.goToPreviousPage(this.props.currentpage, count);
        }

        validate() {
            let errormessages = [];
            const totalExperience = (this.props.profile[0].totalExpYears * 12) + this.props.profile[0].totalExpMonths;
            let sectionTotal = 0;
            this.state[dataref].map(item => {
                sectionTotal = +sectionTotal + (+item.years * 12);
                sectionTotal = +sectionTotal + +item.months;
            });

            if (totalExperience - sectionTotal > 3) {
                errormessages.push('Section total (' + sectionTotal + ' months) does not match your total experience (' + totalExperience + ' months)');
            } else if (totalExperience - sectionTotal < 3) {
                errormessages.push('Section total (' + sectionTotal + ' months) cannot be higher than your total experience (' + totalExperience + ' months)');
            }
            this.setState({
                errormessages: errormessages
            });
            return errormessages;
        }

        render() {
            return (
                <WrappedComponent
                    reportErrors={this.reportErrors.bind(this)}
                    handlechange={this.handlechange.bind(this)}
                    handledatechange={this.handledatechange.bind(this)}
                    firstPage={this.firstPage.bind(this)}
                    nextPage={this.nextPage.bind(this)}
                    submit={this.submit.bind(this)}
                    previousPage={this.previousPage.bind(this)}
                    validate={this.validate.bind(this)}
                    {...this.props} {...this.state} />
            );
        }
    }

    const mapStateToProps = state => ({
        wizardid: state.wizard.wizardid,
        currentpage: state.wizard.currentpage,
        profile: state.wizard.profile,
        'Geography worked for - Customer served': state.wizard['Geography worked for - Customer served'],
        'IT & SAP Expertise': state.wizard['IT & SAP Expertise'],
        'Split up of Overall Experience': state.wizard['Split up of Overall Experience']
    })

    return connect(mapStateToProps, { goToPage, goToFirstPage, goToPreviousPage, goToNextPage, fetchWizard, updateWizard, saveWizard })(Wrapper);
}


export default withWizard;
