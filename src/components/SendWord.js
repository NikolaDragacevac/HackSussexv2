import React, {useState} from "react";
import { connect } from "react-redux";

const SendWord = ({ message, sayHello }) => {
  const [ inputVal, setInputVal] = useState("")
  return(
    <>
      <input type="text" value={inputVal} onChange={(event)=> setInputVal(event.target.value)}/>
      <button className="btn" onClick={() => sayHello(inputVal)}>
        Dispatch the action
      </button>
      </>
)};

const mapStateToProps = ({ message }) => {
  return { message };
};

const mapDispatchToProps = dispatch => {
  return {
    sayHello: (word) => dispatch({ type: "server/addWord", data: {word,'token':sessionStorage.getItem('username')} })
  };
};

const ConnectedSendWord =
  typeof window !== `undefined`
    ? connect(
        mapStateToProps,
        mapDispatchToProps
      )(SendWord)
    : SendWord;

export default ConnectedSendWord;
