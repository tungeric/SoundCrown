import React from 'react';
import DropdownMenu from 'react-dd-menu';

export default class TrackMenu extends React.Component {
  constructor() {
    super();
    this.state = {
        isMenuOpen: false,
        track: {},
    };
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    this.setState({track: this.props.track});
  }
  toggle() {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  close() {
    this.setState({ isMenuOpen: false });
  }

  edit() {
    // this.props.history.push(`/tracks/${this.props.track.id}/edit`);
    location.href = `/#/tracks/${this.props.track.id}/edit`;
  }

  delete() {
    const result = confirm("Are you sure you want to delete this track?");
    console.log(this.state.track);
    if (result) {
      this.props.deleteTrack(this.state.track)
      .then((response) => {
        this.props.history.push(`/${this.state.track.creator}`);
      });
    }
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
        <li><button type="button" onClick={this.delete}>Delete track</button></li>
      </DropdownMenu>
    );
  }
}
