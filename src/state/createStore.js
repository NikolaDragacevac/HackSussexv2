import { createStore, applyMiddleware } from "redux";
import createSocketIoMiddleware from "redux-socket.io";
import io from "socket.io-client";
let socket = io("http://localhost:3000");
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

function reducer(state = {}, action) {
  switch (action.type) {
    case "message":
      return Object.assign({}, { message: action.data });
    case "story":
      return Object.assign({}, {story: action.data});
    case "users":
      return Object.assign({}, {users: action.data});
    case "turn":
      return Object.assign({}, {turn: action.data});
    default:
      return state;
  }
}


let store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);
store.subscribe(() => {
  console.log("new client state", store.getState());
});

export default store;
