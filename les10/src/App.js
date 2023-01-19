import {  useDispatch } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { useEffect, useState } from 'react'
import { Routes, Route} from  'react-router-dom'

import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage/ChatsPage'
import { Articles } from './pages/Articles'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { ChatList } from './components/ChatList/ChatListContainer'
import {Header} from './components/Header/Header'

import { PublicRoute } from './utils/PublicRoute'
import { PrivateRoute } from './utils/PrivateRoute'

import { defaultContext, ThemeContext} from './utils/ThemeContext'
import { firebaseAuth, messagesRef } from './services/firebase'
import {  persistor } from './store'
import { auth } from './store/profile/actions'

import { onValue } from 'firebase/database'



export function App(){
    const dispatch = useDispatch()

    const [messagesDB, setMessagesDB] = useState ({})

    const [chats, setChats] = useState([])

    const [theme, setTheme] = useState(defaultContext.theme)



    const toggleTheme = () => {
       setTheme (theme === 'DAY' ? 'NIGHT' : 'DAY')
    }
    
    useEffect (() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
            if(user) {
                dispatch(auth(true))
            } else {
                dispatch(auth(false))
            }
        })
        return unsubscribe
        
    }, []) 

    useEffect(() => {
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val()
            console.log('snapshot', data)

            const newChats = Object.entries(data).map((item) => ({
                name: item[0],
                messages: item[1].messageList
            }))
        
            setMessagesDB(data)
            setChats(newChats)
            console.log('newChats', newChats)
            console.log('messagesDB', messagesDB)
        })
    }, [])
        
    return (
        <> 
        {/* <Provider store={store}> */}
            <PersistGate persistor={persistor}>

            <ThemeContext.Provider value = {{theme, toggleTheme}}>
            <Routes>
                <Route path='/' element={<Header/>}>
                   <Route index element={<MainPage/>} />
                   <Route path='profile' element={<ProfilePage/>} />
                   {/* <Route path='chats'>
                        <Route index element={<ChatList />} />
                        <Route 
                          path=":chatId" 
                          element={<ChatsPage  
                           />} 
                        /></Route>  */}
                    <Route path="chats" element={<PrivateRoute/>}>
                        <Route index element={<ChatList  chats={chats} messagesDB = {messagesDB}/>} />
                        <Route 
                          path=":chatId" 
                          element={<ChatsPage chats={chats} messagesDB = {messagesDB} 
                           />} 
                        /></Route>
                    <Route path='articles' element={<Articles/>} />
                    <Route path='signin' element={<PublicRoute component = {<SignIn/>} />} />
                    <Route path='signup' element={<SignUp/>} />
                        </Route>
                    <Route path='*' element={<h2>404 Page not FOUND</h2>} />
            </Routes>
        </ThemeContext.Provider>

            </PersistGate>
       
        {/* </Provider>     */}
        </>
       
        
    )
}

   
    