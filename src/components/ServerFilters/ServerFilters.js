import React from 'react';
import './ServerFilters.scss';
import searchIcon from '../../assets/search-icon.svg';
import { connect } from 'react-redux';
import { searchServers } from '../../actions/actions';
import PropTypes from 'prop-types';

export class ServerFilters extends React.Component{


    handleSearchChange = e => {
        this.props.searchServers(e.currentTarget.value);
    };

    render(){
        return (
            <div className='row container-filters'>
                <div className='container-text'>
                    <span className='title'>Servers</span>
                    <span className='no-servers'>Number of elements: {this.props.noServers}</span>
                </div>
                <div className='search-filter'>
                    <img alt='Search icon' className='search-icon' src={searchIcon}/>
                    <input 
                        type='text' 
                        placeholder='Search' 
                        value={this.props.serversSearch}
                        onChange={this.handleSearchChange}/>
                </div>
            </div>
        )
    }
}

ServerFilters.props = {
    status: PropTypes.oneOf(['ONLINE', 'OFFLINE', 'REBOOTING'])
}

const mapStateToProps = state => {
    return {
        serversSearch: state.serversSearch
    };
};
  
 const mapDispatchToProps = { searchServers };
  

export default connect(mapStateToProps, mapDispatchToProps)(ServerFilters);