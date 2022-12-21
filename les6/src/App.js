import {Header} from './components/Header/Header'
import { useState } from 'react'
import { Routes, Route} from  'react-router-dom'
import { MainPage } from './pages/MainPage'
// import { nanoid } from 'nanoid'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage/ChatsPage'
import { ChatList } from './components/ChatList/ChatList'
import { defaultContext, ThemeContext} from './utils/ThemeContext'
import { Provider } from 'react-redux'
import { store } from './store'

const defaultMessages = {
    default: [
        {
            author: 'user',
            text: 'first'
        },
        {
            author: 'user',
            text: 'second'
        },

    ]
}


export function App(){
    const [messages, setMessages] = useState (defaultMessages)
    const [theme, setTheme] = useState(defaultContext.theme)

    // const chats = Object.keys(messages).map((chat) => ({
    //     id: nanoid(),
    //     name: chat
    // }))
    
    // const AddChat = (newChat) => {
    //     console.log('newChat', newChat)
    //     setMessages({
    //         ...messages,
    //         [newChat.name]: []

    //     })
        
    //  }
    //  const addNewMessage = (chatId, newMessage) => {
    //     setMessages({
    //       ...messages,
    //       [chatId]: [...messages[chatId], newMessage]
    //     })
    //   }

      const toggleTheme = () => {
       setTheme (theme === 'DAY' ? 'NIGHT' : 'DAY')
      }
    
        
    return (
        <> 
        <Provider store={store}>
        <ThemeContext.Provider value = {{theme, toggleTheme}}>
            <Routes>
                <Route path='/' element={<Header/>}>
                   <Route index element={<MainPage/>} />
                   <Route path='profile' element={<ProfilePage/>} />
                   <Route path='chats'>
                        <Route index element={<ChatList />} />
                        <Route 
                          path=":chatId" 
                          element={<ChatsPage  
                           />} 
                        /></Route> 
                        </Route>
                    <Route path="*" element={<h2>404 Page not FOUND</h2>} />
            </Routes>
        </ThemeContext.Provider>
        </Provider>    
        </>
       
        
    )
}

   
    
