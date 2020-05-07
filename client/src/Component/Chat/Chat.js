import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InFoBar from "../InFoBar/InFoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import "./Chat.css";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPONIT = "localhost:5000";
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPONIT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
    //console.log(socket, location.search);
  }, [ENDPONIT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  console.log(messages);
  console.log(message);

  return (
    <div className="outerContainer">
      <div className="container">
        <InFoBar room={room} />
        <Messages messages={messages}  name={name}/>
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
