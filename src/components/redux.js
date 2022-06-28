// defining constant
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD_USER = "ADD_USER"
// state 
const initialCounterState = {
    count : 0,
};
const initialUsersState = {
    user: [{name: "Arif islam"}]
};

// action - object - type  , payload

const incrementCounter = () => {
    return{
        type : INCREMENT,
    };
};
const decrementCounter = () => {
    return{
        type : DECREMENT,
    };
};
// const addUser=() => {
//     return {
//         type : ADD_USER,
//     }
// }

// 1. state 
// 2. dispatch
// 3. reducer
// 4. store
