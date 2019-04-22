import React from 'react';
import './ServerListHeader.scss';

export class ServerListHeader extends React.Component{
    render(){
        return (
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>STATUS</th>
                    <th></th>
                </tr>
            </thead>
        )
    }
}


export default ServerListHeader;