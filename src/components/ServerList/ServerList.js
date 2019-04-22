import React from 'react';
import Server from '../Server/Server'
import ServerListHeader from '../ServerListHeader/ServerListHeader'
import './ServerList.scss';
import PropTypes from 'prop-types';

export class ServerList extends React.Component{

    generateRowsOfTable() { 
        return this.props.servers
        .map(item => 
            <Server 
                server={item} 
                key={item.id.toString()}
            />
        )
    }
    
    render(){
        return (
            <table className='row'>
                <ServerListHeader/>
                <tbody>
                    {
                        this.props.servers ?
                        this.generateRowsOfTable() :
                        <tr>
                            <td>Brak danych</td>
                        </tr>
                    }
                </tbody>
            </table>
        )
    }
}

ServerList.props = {
    servers: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number,
            name: PropTypes.string,
            status: PropTypes.oneOf(['ONLINE', 'OFFLINE', 'REBOOTING'])
        })
    ).isRequired
}


export default ServerList;