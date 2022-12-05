import { useState } from "react"

import { MessageFor } from "./components/classes/MessageFor"
import { Message } from "./components/func/Message"

export function App() {
    return (
        <>
        <MessageFor/>
        <hr/>
        <Message titleOther='Message From Home'/>
            </>
    )
}
