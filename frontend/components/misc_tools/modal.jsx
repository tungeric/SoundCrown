import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../main_body/session_form/login_form_container';
import SignupFormContainer from '../main_body/session_form/signup_form_container';
import UploadTrackFormContainer from '../main_body/upload_track_form/upload_track_form_container';

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

const LOGIN = "login";
const SIGNUP = "signup";
const UPLOAD = "upload";

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

  renderForm() {
    switch(this.props.formType) {
      case LOGIN:
        return <LoginFormContainer action="login" closeModal={this.closeModal}/>;
      case SIGNUP:
        return <SignupFormContainer action="signup" closeModal={this.closeModal}/>;
      case UPLOAD:
        return <UploadTrackFormContainer action="upload" closeModal={this.closeModal}/>;
      default:
        return <div></div>;
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
          contentLabel="Modal"
        >

          <br/>
          { this.renderForm() }

        </Modal>
      </div>
    );
  }
}

export default AppModal;
