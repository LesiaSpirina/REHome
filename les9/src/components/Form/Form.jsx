import  PropTypes  from 'prop-types';
import { useState, useRef, useEffect } from 'react' 
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { push } from 'firebase/database';

import { AUTHOR } from '../../constants'
import {  addMessageWithReply  } from '../../store/messages/actions';
import { getMessageListById } from '../../services/firebase';
import styles from './Form.module.css'

// import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField';
import {Button} from '../Button/Button'


export function Form () {
    
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const { chatId } = useParams()
   
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addMessageWithReply (chatId, {
            author: AUTHOR.user,
            text
        }))
        push(getMessageListById(chatId),{
            author: AUTHOR.user,
            text
        })

        setText('')

    }

    // const Input = (props) => {
    //     const inputRef = useRef(null);
    //     useEffect(() => {
    //         inputRef.current?.focus();
    //         }, []);
    //     return (
    //     <ITextField inputRef={inputRef} />
    //     )
    //     }
       
    return (
        <>
        <h1 className={styles.h1d}>Form</h1>
        <form onSubmit={handleSubmit}>
            
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
            {/* <IButton 
            // onClick={props.click}
            variant="contained"
            type="submit" 
            color="secondary"
            size="medium"
            >Add new message</IButton> */}
             <Button type="submit" >Add message</Button>
        </form>
        </>
    )
}

Form.propTypes = {
    addMessage: PropTypes.func 
}