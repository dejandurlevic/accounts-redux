const initState = {
    accounts: [
        {
            id: "1",
            name: "Dejan",
            phone: "064-65648151",
            email: "dejan.durlevic@gmail.com"
        }
    ],
    display: 1
}

const store = Redux.createStore(reducer);

const start = {
    type: "start"
}

const displayAddAccounts = {
    type: "DISPLAY_ADD_ACCOUNTS"
}

const displayAccountsView = {
    type: "DISPLAY_ACCOUNTS_VIEW"
}

const addNewAccount = (newAccount)=>{
    return {
        type: "DISPLAY_NEW_ACCOUNT",
        payload : {
            newAccount : newAccount
        }
    }
   
}

function reducer(state = initState, action) {
    switch (action.type) {
        case "start":
            return state;

        case "DISPLAY_ADD_ACCOUNTS":
            return Object.assign({}, state, { display: 2 })

        case "DISPLAY_ACCOUNTS_VIEW":
            return Object.assign({}, state, { display: 1 })

        case "DISPLAY_NEW_ACCOUNT":
            return Object.assign({}, state, {
                accounts: [...state.accounts, action.payload.newAccount]
            })

        default: return state;
    }
}