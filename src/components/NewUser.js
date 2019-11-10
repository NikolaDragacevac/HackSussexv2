import React, {useState} from "react";
import { connect } from "react-redux";

const NewUser = ({ message, sayHello }) => {
  const [ inputVal, setInputVal] = useState("")
  return(
    <>
      <input type="text" value={inputVal} onChange={(event)=> setInputVal(event.target.value)}/>
      <button className="btn" onClick={() => setUserName(inputVal)}>
        Set Username
      </button>
      </>
)};

const mapStateToProps = ({ message }) => {
  return { message };
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
