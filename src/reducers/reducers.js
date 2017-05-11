// export function itemsHasErrored(state = false, action) {
//     switch (action.type) {
//         case 'ITEMS_HAS_ERRORED':
//             return action.hasErrored;

//         default:
//             return state;
//     }
// }

// export function itemsIsLoading(state = false, action) {
//     switch (action.type) {
//         case 'ITEMS_IS_LOADING':
//             return action.isLoading;

//         default:
//             return state;
//     }
// }

// export function items(state = [], action) {
//     switch (action.type) {
//         case 'ITEMS_FETCH_DATA_SUCCESS':
//             return action.items;

//         default:
//             return state;
//     }
// }

export function users(state = [], action) {
    switch (action.type) {
        case 'USERS_FETCH_DATA_SUCCESS':
            return action.users;

        default:
            return state;
    }
}


export function currentUser(state = [], action) {
    switch (action.type) {
        case 'LOGIN_USER_SUCCESS':
            return action.user;

        default:
            return state;
    }
}


export function orders(state = [], action) {
    // console.log('inside orders reducer');
    // console.log(action);
    switch (action.type) {
        case 'ORDERS_FETCH_DATA_SUCCESS':
            return action.orders;

        case 'orderCreatedEvent':
            //console.log('Inside reducer orderCreatedEvent')
            return [...state,action.data];

        case 'placementCreatedEvent':
            //console.log('Inside reducer placedCreatedEvent')
            var newState =[];
            var id = action.data.orderId;
            //console.log(id);
            for(let o of state){
                //console.log(o);
                if(id ===o.id){
                    //console.log('Found');
                    //console.log(o,action.data,'asdsd');
                    o.quantityPlaced += action.data.quantityPlaced;
                    o.status = action.data.status;
                }
                newState.push(o);
            }
            //console.log(newState,'asdasd');
        return newState;

        case 'executionCreatedEvent':
            //console.log('Inside reducer executionCreatedEvent')
            var newState =[];
            var id = action.data.orderId;
            //console.log(id);
            for(let o of state){
                //console.log(o);
                if(id ===o.id){
                    //console.log('Found');
                    //console.log(o,action.data,'asdsd');
                    o.quantityExecuted += action.data.quantityExecuted;
                    o.status = action.data.status;
                }
                newState.push(o);
            }
            //console.log(newState,'asdasd');
            return newState;

        default:
            return state;
    }
}

export function instruments(state = [], action) {
    switch (action.type) {
        case 'INSTRUMENTS_FETCH_DATA_SUCCESS':
            return action.instruments;

        default:
            return state;
    }
}

