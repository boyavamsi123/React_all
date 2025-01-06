import React from 'react'
import {gmAction,gnAction} from '../redux/Msg/Message.action'
import {useDispatch, useSelector} from 'react-redux'

const Message = () => {
  const dispatch = useDispatch();
  let gmHandler = () => {
    dispatch(gmAction)
  }
  let gnHandler = () =>{
    dispatch(gnAction)
  }

  return (
    <div><pre>{JSON.stringify(Message)}</pre>
            <h3>Message value:"Hello!"</h3>
            <hr/>
            <h3>Value : "Hello"</h3>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message