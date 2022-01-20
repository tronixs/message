import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function MessageChat(props) {
console.log("props", props);

  return (
    <div class="chat2">
      <h3>Саша:</h3>
      <h4>{props.Messag}</h4>
    </div>
  );
}

const Message = () => {
  const Messag = "Привет";

  return(
    <div class="chat1">
      <h1>MessageChat</h1>

      < MessageChat Messag={Messag} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Message/>
  </React.StrictMode>,
  document.getElementById('root')
);

