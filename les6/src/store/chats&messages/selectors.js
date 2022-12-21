import { nanoid } from "nanoid";

export const selectorChat = (state) => Object.keys(state.chatsmessages).map((chat)=> ({
    id: nanoid(),
    name: chat
}))

export const selectorMessage = (state) => state.chatsmessages