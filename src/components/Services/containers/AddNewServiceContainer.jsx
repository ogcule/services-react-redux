import React from 'react';
// import { connect } from 'react-redux';
import ServiceFormContainer from './../ServiceFormContainer';
import ServiceForm from './../ServiceForm';
// import defaultFormValues from './../../../utils/defaultFormValues';
// import apiServices from './../../../api/apiServices';

class AddNewServiceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // values: {
      //   image: '',
      //   rcgpCategory: 'Healthy People',
      //   category: 'Community',
      //   name: '',
      //   description: '',
      //   address: '',
      //   telephone: '',
      //   email: '',
      //   weblink: '',
      //   postcode: '',
      //   tags: [],
      //   referral: '',
      // },
      // errorMsg: {
      //   name: '',
      //   description: '',
      //   telephone: '',
      //   postcode: '',
      //   email: '',
      //   weblink: '',
      //   image: '',
      //   tags: '',
      // },
      hasErrored: false,
      hasSubmitted: false,
    };
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleClearForm = this.handleClearForm.bind(this);
    // this.handleMessageChange = this.handleMessageChange.bind(this);
    // this.handleClearErrorMsg = this.handleClearErrorMsg.bind(this);
  }

  // handleSubmit(e) {
  //   console.log('handlesubmit');
  //   e.preventDefault();
  //   apiServices.requestPost(...defaultFormValues(this.state.values))
  //     .then((data) => {
  //       console.log('Response data from submit call in ServicesContainer', data);
  //       /* data from requstPost is either an error message(object)
  //       or returned id number if successful */
  //       if (typeof data !== 'number') {
  //         /* destructuring from data object and giving
  //         default value of '' when error message is not present */
  //         const {
  //           name = '',
  //           description = '',
  //           telephone = '',
  //           postcode = '',
  //           email = '',
  //           weblink = '',
  //           image = '',
  //           tags = '',
  //         } = data;
  //         this.setState({
  //           errorMsg: {
  //             // shorthand
  //             name,
  //             description,
  //             telephone,
  //             postcode,
  //             email,
  //             weblink,
  //             image,
  //             tags,
  //           },
  //         });
  //         return this.state.errorMsg;
  //       }
  //       return data;
  //     })
  //     .then((results) => {
  //       /* if id (number) returned then successful submission
  //       and can reload services and clear form, show message */
  //       if (typeof results === 'number') {
  //         // if (this.state.filter.category) {
  //         //   this.props.getFilteredCategory(this.props.filter.category);
  //         // } this if statement would update the category view if you were in it
  //         this.handleClearForm();
  //         this.handleClearErrorMsg();
  //         this.handleMessageChange();
  //         setTimeout(() => {
  //           this.handleMessageChange();
  //         }, 3000);
  //       }
  //     })
  //     .catch((error) => {
  //       this.setState({
  //         hasErrored: true,
  //       });
  //       console.log(error);
  //     });
  // }

  // handleInputChange(e) {
  //   e.preventDefault();
  //   const { target } = e;
  //   const {
  //     value, name, type, options,
  //   } = target;
  //   switch (true) {
  //     case type === 'select-multiple': {
  //       const selectedOptions = [];
  //       Object.values(options).map((option) => {
  //         console.log(option.selected);
  //         if (option.selected) {
  //           selectedOptions.push(option.value);
  //         }
  //         return selectedOptions;
  //       });
  //       this.setState(prevState => (
  //         { values: Object.assign({}, prevState.values, { [name]: selectedOptions }) }
  //       ));
  //       break;
  //     }
  //     default:
  //       this.setState(prevState => (
  //         { values: Object.assign({}, prevState.values, { [name]: value }) }
  //       ));
  //   }
  // }
  //
  // handleClearForm() {
  //   this.setState({
  //     values: {
  //       image: '',
  //       rcgpCategory: 'Healthy People',
  //       category: 'Community',
  //       name: '',
  //       description: '',
  //       address: '',
  //       telephone: '',
  //       email: '',
  //       weblink: '',
  //       postcode: '',
  //       tags: [],
  //       referral: '',
  //     },
  //   });
  // }
  // // handler to change success message
  // handleMessageChange() {
  //   this.setState(prevState => ({ hasSubmitted: !prevState.hasSubmitted }));
  // }
  // handleClearErrorMsg() {
  //   this.setState({
  //     errorMsg: {
  //       name: '',
  //       description: '',
  //       telephone: '',
  //       postcode: '',
  //       email: '',
  //       weblink: '',
  //       image: '',
  //       tags: '',
  //     },
  //     hasErrored: false,
  //   });
  // }
  render() {
    const submit = values =>
    // print the form values to the console
      console.log(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    return (
      <ServiceFormContainer
        hasErrored={this.state.hasErrored}
        hasSubmitted={this.state.hasSubmitted}
      >
        <ServiceForm
          onSubmit={submit}
        />
      </ServiceFormContainer>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     values: state.values,
//     errorMsg: state.errorMsg,
//     hasErrored: state.valuesHasErrored,
//     hasSubmitted: state.valuesHasSubmitted,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchData: url => dispatch(itemsFetchData(url))
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AddNewServiceContainer);
export default AddNewServiceContainer;
