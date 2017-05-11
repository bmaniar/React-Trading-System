import axios from 'axios'

export function usersFetchDataSuccess(users) {
    return {
        type: 'USERS_FETCH_DATA_SUCCESS',
        users
    };
}

export function usersFetchData(url) {
    return (dispatch) => {

        return axios({
            url: url,
            timeout: 20000,
            method: 'GET',
            responseType: 'json'
        }).then((response) => {
            return response.data;
        }).then((users) => {
            dispatch(usersFetchDataSuccess(users))

        })
    };
}


export function ordersFetchData(url, method, data = undefined) {
    
    return (dispatch) => {
        if (method == 'del') {
            ('inside del action');
            return axios({
                url: url,
                timeout: 20000,
                method: 'DELETE',
                responseType: 'json'
            })
            .catch(() => console.log('Delete request error'))
            .then(() => dispatch(ordersFetchData(url,'get')))
        }
        else if (method == 'get') {
            return axios({
                url: url,
                timeout: 20000,
                method: 'GET',
                responseType: 'json'
            }).then((response) => {
                return response.data;
            }).then((orders) => {
                setTimeout( () => dispatch(ordersFetchDataSuccess(orders)) , 100)

            }).catch(() => ('empty get'));
        }
        else {
            return axios({
                url: url,
                timeout: 20000,
                method: 'POST',
                responseType: 'json',
                data
            }).then((response) => {
            
                return response.data;
            }).then((orders) => {
                // dispatch(ordersFetchDataSuccess(orders))
            })
            .catch(() => ('Error post'))
            .then(() =>  dispatch(ordersFetchData(url,'get')))
        }

    };
}

export function ordersFetchDataSuccess(orders) {
    ('Inside action', orders)
    return {
        type: 'ORDERS_FETCH_DATA_SUCCESS',
        orders
    };
}

export function loginUser(user) {

    return {
        type: 'LOGIN_USER_SUCCESS',
        user
    };
}

export function instrumentsFetchDataSuccess(instruments) {
    return {
        type: 'INSTRUMENTS_FETCH_DATA_SUCCESS',
        instruments
    };
}
export function instrumentsFetchData(url) {
    return (dispatch) => {

        return axios({
            url: url,
            timeout: 20000,
            method: 'GET',
            responseType: 'json'
        }).then((response) => {
            return response.data;
        }).then((instruments) => {
            dispatch(instrumentsFetchDataSuccess(instruments))

        }).catch(()=> ('empty instruments'));

        
    };
}

export function pushNotification(msg,data){
    return{
        type:msg,
        data
    }
}

// export function openDialog(name) {
//   return {
//     type: 'OPEN_DIALOG',
//     name: name
//   }
// }

// export function closeDialog(name) {
//   return {
//     type: 'CLOSE_DIALOG',
//     name: name
//   }
// }
