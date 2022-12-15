import { useState } from "react"
import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField'
import { nanoid } from 'nanoid'
import IList from '@mui/material/List';
import IListItem from '@mui/material/ListItem';
import styles from './ChatList.module.css'

import { Link } from "react-router-dom";


export function ChatList({AddChat,chats}) {

    const [value, setValue] = useState('')
        
    const handleChange = (e) => {
        setValue(e.target.value)
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        AddChat({
            id: nanoid(),
            name: value,
        })
        setValue('')
    }

    return (
    <>
        
        <div>
            <h1 className={styles.h1d}>ChatList</h1>
        
            <form onSubmit={handleSubmit}>
                 <ITextField 
                    type="text"
                    label="Begin chat"
                    color="success"
                    value={value} 
                    focused
                    onChange={handleChange}
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
                    </IListItem>
                    ))} 
                 </IList> 
            </form>
       </div>   
    </>
    )
}