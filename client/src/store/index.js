import {applyMiddleware, createStore, /*compose*/ } from "redux";
import {composeWithDevTools} from "redux-devtools-extension"
//import thunk from "redux-thunk";
import reducer from '../reducer/index';                                                      
//import reducer from '../reducer/index'
import  thunkMiddleware  from "redux-thunk";

// const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));


// const store = createStore(
//   reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//     applyMiddleware(thunkMiddleware),
//   );

export default store;


// import {createStore, applyMiddleware, compose} from "redux";
// import {composeWithDevTools} from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import reducer from "../reducer/index";


// //const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;


// export  const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
 

                                                    


