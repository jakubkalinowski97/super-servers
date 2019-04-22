import React from 'react';
import { connect } from "react-redux";
import { fetchServers } from '../../actions/actions'
import { getFilteredServers } from '../../selectors/getFilteredServers';
import HeaderPage from '../HeaderPage/HeaderPage';
import ServerList from '../ServerList/ServerList';
import ServerFiltersContainer from '../ServerFilters/ServerFilters';


export class App extends React.Component{

    componentDidMount() {
        this.props.fetchServers();
    }

    render() {
        return (
            <div>
                <HeaderPage/>
                <ServerFiltersContainer noServers={this.props.servers.length}/>
                <ServerList servers={this.props.servers}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    servers: getFilteredServers(state.servers, state.serversSearch)
  }
};
const mapDispatchToProps = { fetchServers };

export default connect(mapStateToProps, mapDispatchToProps)(App)