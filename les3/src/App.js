import { useState, useEffect, useRef } from "react"

import styles from './App.module.css'
import { MessageList } from "./components/MessageList/MessageList"
import { Form } from "./components/Form/Form"
import { AUTHOR } from "./constants"
import { ChatList } from "./components/ChatList/ChatList";
import { nanoid } from 'nanoid'
import { style } from "@mui/system";


const defaultMessage = {
    default: [
        {
            author: 'user',
            text: 'first'
        },
        {
            author: 'user',
            text: 'second'
        },

    ]
}

export function App() {
    const[messages, setMessage] = useState([])

    const addNewMessage = (newMessage) => {
        console.log('newMessage', newMessage);
        setMessage([...messages, newMessage])
    }

    useEffect(() => {
        if(messages.length > 0 && messages[messages.length - 1].author === AUTHOR.user) {
            const timeout = setTimeout(() => {
                addNewMessage ({
                    author:AUTHOR.bot,
                    text: "I'm BOT.Can I help You?"
                })
            }, 1500)

            return () => {
                clearTimeout(timeout)
            }
        }
    }, [messages])

    const [myMessages, setMyMessages] = useState (defaultMessage)

    const chats = Object.keys(myMessages).map((chat) => ({
        id: nanoid(),
        name: chat
    }))
    
    const AddChat = (newMyMessage) => {
        console.log('newMyMessages', newMyMessage)
        setMyMessages({
            ...myMessages,
            [newMyMessage.name]: []

        })
        
     }
    
        
    
return (
    <>
    <div className={styles.box}>
    <Form addNewMessage={addNewMessage}/>
   
   <div style={{display: 'flex'}}>
       <ChatList AddChat={AddChat}
       chats={chats}
       />
       
       <MessageList messages={messages}/>
   </div>
     
    </div>
    
    
    </>
)
}
