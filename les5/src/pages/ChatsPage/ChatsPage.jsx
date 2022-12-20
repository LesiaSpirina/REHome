import {  useEffect } from "react"
import { useParams, Navigate } from 'react-router-dom'

import { MessageList } from "../../components/MessageList/MessageList"
import { Form } from "../../components/Form/Form"
import { AUTHOR } from "../../constants"
import { ChatList } from "../../components/ChatList/ChatList";
import { WithClasses } from '../../HOC/WithClasses'
import styles from '../ChatsPage/ChatsPage.module.css'



export function ChatsPage({AddChat, addNewMessage,messages,chats}) {
   
    const {chatId} = useParams()

    const MessageListWithClasses = WithClasses(MessageList)
    
    useEffect(() => {
        if(chatId && messages[chatId]?.length > 0 && messages[chatId][messages[chatId].length - 1].author === AUTHOR.user) {
            const timeout = setTimeout(() => {
                addNewMessage (chatId,{
                    author:AUTHOR.bot,
                    text: "I'm BOT.Can I help You?"
                })
            }, 1500)

            return () => {
                clearTimeout(timeout)
            }
        }
    }, [chatId, messages])

    const handleAddMessage = (message) => {
        if (chatId) {
          addNewMessage(chatId, message)
        }
    }
    
      if(chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />
    }
    
    return (
        <>
          <h1>Welcome to chat!</h1>
          <div className={styles.box}>
          <Form addMessage={handleAddMessage} />
          <div style={{display: 'flex'}}>
          <ChatList chats={chats} AddChat={AddChat} />
          
          
          <MessageListWithClasses messages={chatId ? messages[chatId] : []}
          classes={styles.bborder}
          />
          </div>
          </div>
          
        </>
    )
}
    
        
    


