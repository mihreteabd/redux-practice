import store from "./store";
import * as actions from './actions'


const unsubscribe = store.subscribe(()=>{
    console.log("store is changing.")
})

store.dispatch(actions.bugAdded('bug1'))

// unsubscribe()

store.dispatch(actions.bugAdded('bug2'))

store.dispatch(actions.bugSolved(1));

console.log(store.getState());
