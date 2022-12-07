import { useState, useEffect } from "react"


import { MessageList } from "./components/MessageList/MessageList"
import { Form } from "./components/Form/Form"
import { AUTHOR } from "./constants"


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
    
    
return (
    <>
    <h1>Chat</h1>
    <Form addNewMessage={addNewMessage}/>
    <MessageList messages={messages}/>
    </>
)
}
