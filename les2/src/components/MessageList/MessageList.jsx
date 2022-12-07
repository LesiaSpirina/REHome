

export function MessageList({messages}) {
    return (
        <>
        <h1>MessageList</h1>
        <ul>
            {messages.map((message,index) => (
                <li key={index}>{message.text}</li>
            ))}
        </ul>
        
        </>
    )
}