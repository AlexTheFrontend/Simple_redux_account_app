export const depositMoney = (amount) => {
    // we have to return a F with dispatch parameter inside it
    return (dispatch) => {
        dispatch({
            type: "DEPOSIT",
            payload: amount
        })
    }
}


export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "WITHDRAW",
            payload: amount
        })
    }
}
