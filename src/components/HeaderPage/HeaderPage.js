import React from 'react';
import './HeaderPage.scss';

export class HeaderPage extends React.Component{
    render(){
        return (
            <div className = 'container'>
                <div className = 'logo'></div>
                <div className = 'title'>Recruitment task</div>
            </div>
        )
    }
}


export default HeaderPage;