import  PropTypes  from 'prop-types'
import styles from '../MessageList/MessageList.module.css'

export function MessageList({messages}) {
    console.log('messages', messages)
    return (
        <>
        <div className={styles.div1}>
            <h1>MessageList</h1>
        <ul >
            {messages?.map((message,index) => (
                <li key={index}>{message.author} : {message.text}</li>
            ))}
        </ul>
        </div>
        
        
        </>
    )
}
MessageList.propTypes = {
    messages: PropTypes.array
}