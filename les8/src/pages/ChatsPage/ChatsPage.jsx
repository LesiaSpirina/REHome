// import {  useEffect } from "react"
import { useParams, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import { MessageList } from "../../components/MessageList/MessageList"
import { Form } from "../../components/Form/Form"
import { ChatList } from "../../components/ChatList/ChatListContainer";
import { WithClasses } from '../../HOC/WithClasses'
import styles from '../ChatsPage/ChatsPage.module.css'
import { selectorMessage} from '../../store/chats&messages/selectors'


export function ChatsPage() {
   
    const {chatId} = useParams()

    const messages = useSelector(selectorMessage)
    const MessageListWithClasses = WithClasses(MessageList)
    
    // useEffect(() => {
    //     if(chatId && messages[chatId]?.length > 0 && messages[chatId][messages[chatId].length - 1].author === AUTHOR.user) {
    //         const timeout = setTimeout(() => {
    //             addNewMessage (chatId,{
    //                 author:AUTHOR.bot,
    //                 text: "I'm BOT.Can I help You?"
    //             })
    //         }, 1500)

    //         return () => {
    //             clearTimeout(timeout)
    //         }
    //     }
    // }, [chatId, messages])

    // // const handleAddMessage = (message) => {
    // //     if (chatId) {
    // //       addNewMessage(chatId, message)
    // //     }
    // // }
    
      if(chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />
    }
    
    return (
        <>
          <h1>Welcome to chat!</h1>
          <div className={styles.box}>
          <Form  />
          <div style={{display: 'flex'}}>
          <ChatList />
          
          
          <MessageListWithClasses messages={chatId ? messages[chatId] : []}
          classes={styles.bborder}
          />
          </div>
          </div>
          
        </>
    )
}
    
        
    


