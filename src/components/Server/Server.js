import React from 'react';
import './Server.scss';
import Dropdown from '../Dropdown/Dropdown'
import PropTypes from 'prop-types';

export class Server extends React.Component{

    getStatusClass(status){
        switch(status) {
            case 'ONLINE': {
                return ' online'
            }
            case 'OFFLINE': {
                return ' offline'
            }
            case 'REBOOTING': {
                return ' rebooting'
            }
            default: {
                return ''
            }
        }
    }

    render(){
        return (
            <tr>
                <td className='name'>{this.props.server.name}</td>
                <td className={'status' + this.getStatusClass(this.props.server.status)}>{this.props.server.status}</td>
                <td className='options'>
                    <div className='dropdown'>
                        <Dropdown 
                        server={this.props.server}
                        />
                    </div>
                </td>
            </tr>
        )
    }
}

Server.props = {
    server: PropTypes.exact({
            id: PropTypes.number,
            name: PropTypes.string,
            status: PropTypes.oneOf(['ONLINE', 'OFFLINE', 'REBOOTING'])
        }).isRequired
}

export default Server;