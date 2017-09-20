import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../main_body/session_form/login_form_container';
import SignupFormContainer from '../main_body/session_form/signup_form_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class AppModal extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    if (this.subtitle) {
      this.subtitle.style.color = '#f00';
    }
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  renderSessionForm() {
    if(this.props.formType==="login") {
      return <LoginFormContainer />;
    } else {
      return <SignupFormContainer />;
    }
  }


  render() {
    return (
      <div>
        <button className={this.props.className}
                onClick={this.openModal}
                >{this.props.text}</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <br/>
          { this.renderSessionForm() }

        </Modal>
      </div>
    );
  }
}

export default AppModal;
