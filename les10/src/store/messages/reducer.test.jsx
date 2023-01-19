import { deleteChats, addChat } from "./actions";
import { messagesReducer } from "./reducers";


const chat = 
    [
        {id: 1, name: 'chat1', author: 'user', message: 'text'},
        {id: 2, name: 'chat2',author: 'bot', message: `I'm bot`}
    ]


describe('testing message reducer', ()=> {

    it('after add chat length of chat should be increment', ()=> {
        let action = addChat(' some text')
        let newChat = messagesReducer(chat, action)
        expect(newChat.chat).length===3;
       
    })

    it('after deleting length of chats should be decremented',()=>{
        let action = deleteChats(1)

    })
})