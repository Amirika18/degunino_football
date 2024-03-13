import axios from 'axios';

const hostUrl = '';

export const loginRequest = async ({login, password}) => {
    const url = hostUrl + '/login';

    return await axios.post(url, {})
        .then(res => res.status)
        .catch(e => e.status);
}

export const logoutRequest = async () => {
    const url = hostUrl + '/logout';

    return await axios.post(url, {})
        .then(res => res.status)
        .catch(e => e.status);
}

export const tableDataRequest = async () => {
    const url = hostUrl + '/table';

    return await axios.get(url, {})
        .then(res => res.data)
        .catch(e => e.status);
}

export const tableDataChangeRequest = async ({data}) => {
    const url = hostUrl + '/table';

    return await axios.post(url, {})
        .then(res => res.status)
        .catch(e => e.status);
}