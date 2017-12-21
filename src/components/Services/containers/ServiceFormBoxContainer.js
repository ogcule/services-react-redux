import { connect } from 'react-redux';
import ServiceFormBox from './../ServiceFormBox';

const mapStateToProps = state => ({ errorMsg: state.formView.invalidMsgs });

const serviceFormBoxContainer = connect(mapStateToProps)(ServiceFormBox);

export default serviceFormBoxContainer;
