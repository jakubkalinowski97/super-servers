import {
    GET_SERVERS, GET_SERVER, SEARCH_SERVERS, TURN_ON_SERVER, TURN_OFF_SERVER, REBOOT_SERVER
} from '../actions/actionTypes'

export const servers = (state = [], action) => {
    const {type, payload} = action;
    switch(type) {
        case GET_SERVERS: {
            return [
                ...payload
            ];
        }
        case GET_SERVER: {
            const servers = state;
            servers[payload.id-1] = payload;
            return [
                ...servers
            ]
        }
        case TURN_ON_SERVER: {
            const servers = state;
            servers[payload.id-1] = payload;
            return [
                ...servers
            ]
        }
        case TURN_OFF_SERVER: {
            const servers = state;
            servers[payload.id-1] = payload;
            return [
                ...servers
            ]
        }
        case REBOOT_SERVER: {
            const servers = state;
            servers[payload.id-1] = payload;
            return [
                ...servers
            ]
        }
        default:
            return state;
    }
}

export const serversSearch = (state = '', action) => {
    const {type, payload } = action;
    switch (type) {
        case SEARCH_SERVERS:
            return payload
        default:
            return state
    }
}