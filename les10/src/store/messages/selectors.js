import { nanoid } from "nanoid";

export const selectorChat = (state) => Object.keys(state.messages).map((chat)=> ({
    id: nanoid(),
    name: chat
}))

export const selectorMessage = (state) => state.messages