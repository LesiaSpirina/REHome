import { useState } from "react"

import styles from './Message.module.css'

export function Message(props) {
    
    const [name, setName]
= useState("Message")
    
    const handleChange = (event) => {
        setName(event.target.value)

    } 
    console.log('props', props)
    return (
        <>
         <h1 style={{color: "forestgreen"}}>{props.titleOther}</h1>
         <h2 className={styles.border_message}>Message: { name}</h2>
            <input type="text" onChange={handleChange}/>
            
            
         </>
       
    )
}