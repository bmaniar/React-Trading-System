import * as actions from '../src/actions/actions.js';
test('loginUser action test', () => {
    let user = {};
    const expectedLoginSuccess = {
        type: 'LOGIN_USER_SUCCESS',
        user
    }
    expect(actions.loginUser(user)).toEqual(expectedLoginSuccess)
})
test('usersFetchDataSuccess action test', () => {
    let users = {};
    const expectedusersFetchDataSuccess = {
        type: 'USERS_FETCH_DATA_SUCCESS',
        users
    }
    expect(actions.usersFetchDataSuccess(users)).toEqual(expectedusersFetchDataSuccess)
})
test('ordersFetchDataSuccess action test', () => {
    let orders = {};
    const expectedordersFetchDataSuccess = {
        type: 'ORDERS_FETCH_DATA_SUCCESS',
        orders
    }
    expect(actions.ordersFetchDataSuccess(orders)).toEqual(expectedordersFetchDataSuccess)
})
test('instrumentsFetchDataSuccess action test', () => {
    let instruments = {};
    const expectedinstrumentsFetchDataSuccess = {
        type: 'INSTRUMENTS_FETCH_DATA_SUCCESS',
        instruments
    }
    expect(actions.instrumentsFetchDataSuccess(instruments)).toEqual(expectedinstrumentsFetchDataSuccess)
})
test('pushNotification action test', () => {
    let data = {};
    let msg = '';
    const expectedpushNotification = {
        type: msg,
        data
    }
    expect(actions.pushNotification(msg, data)).toEqual(expectedpushNotification)
})