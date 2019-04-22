import {
    GET_SERVERS, GET_SERVER, SEARCH_SERVERS, TURN_ON_SERVER, TURN_OFF_SERVER, REBOOT_SERVER
} from './actionTypes';
import {fetchServersApi, fetchServerApi, turnOnServerApi, turnOffServerApi, rebootServerApi} from '../serversApi';


const getServersAction = (servers) => ({
	type: GET_SERVERS,
	payload: servers
})

export const fetchServers = () => (dispatch) => {
	fetchServersApi()
	.then(res => {
		if(res.status === 200)
			dispatch(getServersAction(res.data))
		})
	.catch(error => {
		console.error(error.message)
	})
}

const getServerAction = (server) => ({
	type: GET_SERVER,
	payload: server
})

export const fetchServer = (id) => (dispatch) => {
	fetchServerApi(id)
	.then(res => {
		if(res.status === 200)
			dispatch(getServerAction(res.data))})
	.catch(error => {
		console.error(error.message)
	})
}

const turnOnServerAction = (server) => ({
	type: TURN_ON_SERVER,
	payload: server
})

export const turnOnServer = (id) => (dispatch) => {
	turnOnServerApi(id)
	.then(res => {
		if(res.status === 200)
			dispatch(turnOnServerAction(res.data))
	})
	.catch(error => {
		console.error(error.message)
	})
}

const turnOffServerAction = (server) => ({
	type: TURN_OFF_SERVER,
	payload: server
})

export const turnOffServer = (id) => (dispatch) => {
	turnOffServerApi(id)
	.then(res => {
		if(res.status === 200)
			dispatch(turnOffServerAction(res.data))
	})
	.catch(error => {
		console.error(error.message)
	})
}

const rebootServerAction = (server) => ({
	type: REBOOT_SERVER,
	payload: server
})

export const rebootServer = (id) => (dispatch) => {
	rebootServerApi(id)
	.then(res => {
		if(res.status === 200)
			dispatch(rebootServerAction(res.data))
	})
	.then(_ => {
		const intervalReboot = setInterval(function () {
			fetchServerApi(id)
			.then(server => {
				if(server.data.status === "ONLINE"){
					clearInterval(intervalReboot);
				}
				dispatch(fetchServer(id));
			})
		}, 1000);
	})
	.catch(error => {
		console.error(error.message)
	})
}

export const searchServers = (text) => ({
	type: SEARCH_SERVERS,
	payload: text
})
