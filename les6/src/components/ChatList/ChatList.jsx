import { useState } from "react"
import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField'
import IList from '@mui/material/List';
import IListItem from '@mui/material/ListItem';
import styles from './ChatList.module.css'
import { addChat, deleteChats } from '../../store/chats&messages/actions'
import { useDispatch, useSelector } from "react-redux";
import { selectorChat } from "../../store/chats&messages/selectors";
import { Link } from "react-router-dom";
import {Button} from "../Button/Button";


export function ChatList() {
    const chats = useSelector(selectorChat, (prev,next) => prev.length === next.length)

    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    console.log('updated chats', chats)

    const handleSubmit = (e) => {
        e.preventDefault()
        // AddChat({
        //     id: nanoid(),
        //     name: value,
        // })
        dispatch(addChat(value))  // из {addChat } from '../../store/chats&messages/actions'
        setValue('')
    }

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
                <IList>{chats.map((chat) => 
                    (<IListItem disablePadding
                       key={chat.id}>
                        <Link to={`/chats/${chat.name}`}>{chat.name}</Link>
                        <Button onClick={() => dispatch(deleteChats(chat.name))}>&times;</Button>
                    </IListItem>
                    ))} 
                 </IList> 
            </form>
       </div>   
    </>
    )
}