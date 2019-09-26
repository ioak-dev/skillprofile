import React, { Component} from 'react';
import { connect } from 'react-redux';
import { goToPage, goToFirstPage, goToPreviousPage, goToNextPage, fetchWizard, updateWizard } from '../../actions/wizardActions';
import moment from 'moment';

const withWizard = (WrappedComponent, dataref, category) => {
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
                errorfields: [],
                errormessages: [],
                [dataref]: this.props[dataref]
            };

            this.handlechange = this.handlechange.bind(this);
            this.handledatechange = this.handledatechange.bind(this);
            // this.submit = this.submit.bind(this);
        }


        handledatechange(event, fieldname) {
            this.setState(
                {
                    [dataref]: {
                        ...this.state[dataref],
                        [fieldname]: moment(event).toDate()
                    }
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

        reportErrors(errorfields, errormessages) {
            this.setState({
                errorfields: errorfields,
                errormessages: errormessages
            })
        }

        nextPage(count) {
            console.log(this.state[dataref]);
            this.props.updateWizard(dataref, this.state[dataref]);
            this.props.goToNextPage(this.props.currentpage, count);
        }

        firstPage() {
            this.props.goToFirstPage();
        }

        previousPage(count) {
            this.props.updateWizard(this.getReducerType(), "1", this.state);
            this.props.goToPreviousPage(this.props.currentpage, count);
        }

        validateMandatoryFields(...fields) {
            let errorfields = [];
            fields.map(field => {
                if (!this.state[dataref][field] || this.state[dataref][field] === '') {
                    errorfields.push(field);
                }
            })
            return errorfields;
        }

        render() {
            return (
                <WrappedComponent
                    reportErrors={this.reportErrors.bind(this)}
                    handlechange={this.handlechange.bind(this)}
                    handledatechange={this.handledatechange.bind(this)}
                    firstPage={this.firstPage.bind(this)}
                    nextPage={this.nextPage.bind(this)}
                    previousPage={this.previousPage.bind(this)}
                    validateMandatoryFields={this.validateMandatoryFields.bind(this)}
                    {...this.props} {...this.state} />
            );
        }
    }

    const mapStateToProps = state => ({
        wizardid: state.wizard.wizardid,
        currentpage: state.wizard.currentpage,
        profile: state.wizard.profile,
        geography: state.wizard.geography,
        "IT & SAP Expertise": state.wizard["IT & SAP Expertise"],
        "Split up of Overall Experience": state.wizard["Split up of Overall Experience"]
    })

    return connect(mapStateToProps, { goToPage, goToFirstPage, goToPreviousPage, goToNextPage, fetchWizard, updateWizard })(Wrapper);
}


export default withWizard;
