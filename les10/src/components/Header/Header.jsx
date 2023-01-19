import IList from '@mui/material/List';
import IListItem from '@mui/material/ListItem'
import IButton from '@mui/material/Button';
import styles from './Header.module.css'

import {  Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logOut } from '../../services/firebase';


export const navigates = [
    {
        id: 1,
        name: 'Main',
        to: '/'

    },
    {
        id: 2,
        name: 'Profile',
        to: '/profile'
    },
    {
        id: 3,
        name: 'Chat',
        to: '/chats'
    },
    {
        id: 4,
        name: 'Articles',
        to: '/articles'
    },
    
]
export function Header() {
    const navigate = useNavigate()
    const name = useSelector((store) => store.profile.name)
    const isAuth = useSelector((store) => store.profile.isAuth)

    const handleLogin = () => {
        navigate('/signin')
    }
    const handleLogout = async () => {
        await logOut()
    }
    const handleSignUp = () => {
        navigate('/signup')
    }

    return (
    <>
        <header>
            <nav className={styles.header}>
                <IList >
                    {navigates.map((link) => (
                        <IListItem key={link.id}>
                            <NavLink to={link.to}
                                style={({ isActive }) => ({
                                    color: isActive ? 'white' : 'black'
                                })}>{link.name}</NavLink>
                        </IListItem>
                    ))} 
                </IList>
                {!isAuth && (
                        <>
                        <IButton 
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={handleLogin}>Login</IButton>
                    <br/>
                    <br/>
                        <IButton 
                        
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={handleSignUp}>Sign Up</IButton>
                        </>
                    )}
                    {isAuth && (
                        <>
                         <IButton 
                          
                          variant="contained"
                          color="success"
                          size="small"
                          onClick={handleLogout}>Logout</IButton>
                        </>
                    )}
                    <p>{name}</p>
                
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </>
    )
}