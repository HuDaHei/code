// import state from "./state.js";

export default {
    addItem (state, payload) {
        state.items.push(payload);
        return state;
    },
    clearItem (state, payload) {
        state.items.splice(payload.index, 1);
        console.log(state, "我是mutaion里面的state")
        return state
    }
}