import React from 'react';
import DropdownMenu from 'react-dd-menu';

export default class Example extends React.Component {
  constructor() {
    super();
    this.state = {
        isMenuOpen: false
    };
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
  }

  toggle() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  close() {
    this.setState({ isMenuOpen: false });
  }

  edit() {
    console.log(this.props);
    // this.props.history.push(`/tracks/${this.props.track.id}/edit`);
    location.href = `/#/tracks/${this.props.track.id}/edit`;
  }

  delete() {
    console.log('You clicked an item');
  }

  render() {
    const menuOptions = {
      isOpen: this.state.isMenuOpen,
      close: this.close,
      toggle: <button type="button" onClick={this.toggle}>{<i className="fa fa-ellipsis-h" />}</button>,
      align: 'left'
    };

    return (
      <DropdownMenu {...menuOptions}>
        <li><button type="button" onClick={this.edit}>Edit track</button></li>
        <li><button type="button" onClick={this.click}>Delete track</button></li>
      </DropdownMenu>
    );
  }
}
