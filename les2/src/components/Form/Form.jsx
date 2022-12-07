import { useState } from 'react'
import { Button } from '../Button/Button' 
import { AUTHOR } from '../../constants'

import styles from './Form.module.css'

export function Form ({addNewMessage}) {
    const [text, setText] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault ()
        addNewMessage( {
            author: AUTHOR.user,
            text: text
        } )

        setText("")

    }
    console.log('input', text)

    return (
        <>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <input 
            className={styles.border}
            type="text"
            value={text}
            onChange={(event) => 
                setText(event.target.value)
            }/>
            <br/>
            <br/>
            <Button   type="submit">Add new message</Button>
        </form>
        </>
    )
}