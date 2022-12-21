import { useState, useRef, useEffect } from 'react' 
import { AUTHOR } from '../../constants'
import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../store/chats&messages/actions';
import styles from './Form.module.css'
import { useParams } from 'react-router-dom';

export function Form () {
    const dispatch = useDispatch()
    const [text, setText] = useState("")
    const {chatId} = useParams()
   
    
    
    const handleSubmit = (event) => {
        event.preventDefault ()
        // addMessage( {
        //     author: AUTHOR.user,
        //     text: text
        // } )

        dispatch(addMessage(chatId, text))
        setText("")

    }
    // console.log('input', text)

    const Input = (props) => {
        const inputRef = useRef(null);
        useEffect(() => {
            inputRef.current?.focus();
            }, []);
        return (
        <ITextField inputRef={inputRef} />
        )
        }
       
    return (
        <>
        <h1 className={styles.h1d}>Form</h1>
        <form onSubmit={handleSubmit}>
            {/* <input 
            className={styles.border}
            type="text"
            value={text}
            onChange={(event) => 
                setText(event.target.value)
            }/> */}
            <ITextField 
            
            type="text"
            label="Add the text"
            color="secondary"
            value={text} 
            focused
            onChange={(event) => 
                setText(event.target.value)
            }/>
            
            <br/>
            <br/>
            {/* <Button   type="submit">Add new message</Button> */}
            <IButton 
            variant="contained"
            type="submit" 
            color="secondary"
            size="medium"
            >Add new message</IButton>
        </form>
        </>
    )
}