import React, {useState} from "react";
import { connect } from "react-redux";

const SendWord = ({ story, sayHello }) => {
  const [ inputVal, setInputVal] = useState("")
  //console.log({story})
  return(
    <>
    {story && <>
      {story.map(item=>(<nobr color="black">{item._word + " "}</nobr>))}
    </>}
      <input type="text" value={inputVal} onChange={(event)=> setInputVal(event.target.value)}/>
      <button className="btn" onClick={() => sayHello(inputVal)}>
        Send Word
      </button>
      </>
)};

const mapStateToProps = ({ story }) => {
  return { story };
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
