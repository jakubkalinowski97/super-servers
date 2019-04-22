import React from 'react';
import './Dropdown.scss';
import { connect } from "react-redux";
import { turnOnServer, turnOffServer, rebootServer } from '../../actions/actions'
import PropTypes from 'prop-types';

export class Dropdown extends React.Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
  }

  showMenu = (event) => {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu = (event) => {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
    }
  }

  handleTurnOnServer = () => {
    this.props.turnOnServer(this.props.server.id);
  }

  handleTurnOffServer = () => {
    this.props.turnOffServer(this.props.server.id);
  }

  handleRebootServer = () => {
    this.props.rebootServer(this.props.server.id);
  }

  render() {
    return (
      <div>
        <div className='dots' onClick={this.showMenu}>
            <div className='dot'></div>
            <div className='dot'></div>
            <div className='dot'></div>
        </div>
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
              {
                this.props.server.status === 'ONLINE' ? 
                <div>
                  <button onClick={this.handleTurnOffServer}>Turn off</button>
                  <button onClick={this.handleRebootServer}>Reboot</button> 
                </div>:
                <button onClick={this.handleTurnOnServer}>Turn on</button>
              }
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

Dropdown.props = {
    server: PropTypes.exact({
            id: PropTypes.number,
            name: PropTypes.string,
            status: PropTypes.oneOf(['ONLINE', 'OFFLINE', 'REBOOTING'])
    }).isRequired
}

const mapDispatchToProps = { turnOnServer, turnOffServer, rebootServer };

export default connect(null, mapDispatchToProps)(Dropdown);