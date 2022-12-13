import styles from '../MessageList/MessageList.module.css'

export function MessageList({messages}) {
    return (
        <>
        <div className={styles.div1}>
            <h1>MessageList</h1>
        <ul >
            {messages.map((message,index) => (
                <li key={index}>{message.author}:{message.text}</li>
            ))}
        </ul>
        </div>
        
        
        </>
    )
}