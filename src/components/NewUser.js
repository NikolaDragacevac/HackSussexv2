import React, {useState} from "react";
import { connect } from "react-redux";

const NewUser = ({ users, sayHello }) => {
  const [ inputVal, setInputVal] = useState("")
  if (users){
    document.location.reload(true);
  }
  return(
    <>
      <input type="text" value={inputVal} onChange={(event)=> setInputVal(event.target.value)}/>
      <button className="btn" onClick={() => {sayHello(inputVal); sessionStorage.setItem('username',inputVal)}}>
        Set Username
      </button>
      </>
)};

const mapStateToProps = ({ users }) => {
  return { users };
};

const mapDispatchToProps = dispatch => {
  return {
    sayHello: (username) => dispatch({ type: "server/newUser", data: username })
  };
};

const ConnectedNewUser =
  typeof window !== `undefined`
    ? connect(
        mapStateToProps,
        mapDispatchToProps
      )(NewUser)
    : NewUser;

export default ConnectedNewUser;
