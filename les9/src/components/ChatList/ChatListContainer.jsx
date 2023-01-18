import { useState } from "react"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField'
import IList from '@mui/material/List';
import IListItem from '@mui/material/ListItem';
import styles from './ChatList.module.css'

import { addChat, deleteChats } from '../../store/messages/actions'
import { selectorChat } from "../../store/messages/selectors";

import {Button} from "../Button/Button";
import { messagesRef, getChatById, getMessageListById } from '../../services/firebase'
import { push, remove, set } from "firebase/database";



export function ChatList({messagesDB, chats}) {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    console.log('updated chats', chats)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addChat(value))  // из {addChat } from '../../store/messages/actions'
        set(messagesRef, {
            ... messagesDB,
            [value] : {
                name: value
            }
        })

        push(getMessageListById(value), {
            text: 'Chat successfully created',
            author: 'Admin',
        });

        setValue('');
    }
    console.log( 'chats', chats)
    const handleDeleteChat = (chatId) => {
        remove(getChatById(chatId));
    };

    return (
    <>
        
        <div className={styles.box}>
            <h1 className={styles.h1d}>ChatList</h1>
        
            <form onSubmit={handleSubmit}>
                 <ITextField 
                    type="text"
                    label="Begin chat"
                    color="success"
                    value={value} 
                    focused
                    onChange={(e) => setValue(e.target.value)}
                />
                <br/>
                <br/>
                <IButton 
                    type="submit"
                    variant="contained"
                    color="success"
                    size="medium"
                >Create Chat</IButton>
                <br/>
                <IList>
                    {chats.map((chat) => 
                    (<IListItem disablePadding
                       key={chat.name}>
                        <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
                        <Button onClick={() => dispatch(handleDeleteChat(chat.name))}>&times;</Button>
                    </IListItem>
                    ))} 
                 </IList> 
            </form>
       </div>   
    </>
    )
}