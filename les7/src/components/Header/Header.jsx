import IList from '@mui/material/List';
import IListItem from '@mui/material/ListItem'
import styles from './Header.module.css'
import {  Outlet, NavLink } from 'react-router-dom';


export const navigation = [
    {
        id:1,
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
    }

]
export function Header(){
    return (
        <>
        <header>
            <nav className={styles.header}>
                <IList >
                    {navigation.map((link) => (
                        <IListItem key={link.id}> 
                            <NavLink to={link.to} 
                                     style={({isActive}) => ({
                                        color: isActive ? 'white': 'black'
                                     })}>{link.name}</NavLink>
                        </IListItem>
                    ))}
                </IList>
            </nav>
        </header>
        <main><Outlet/></main>
        </>
    )
}