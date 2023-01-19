import { Button } from '../components/Button/Button'
import { useContext, useState} from 'react'
import { ThemeContext } from '../utils/ThemeContext'
import styles from '../App.module.css'
import { useSelector, useDispatch } from 'react-redux'

import { selectorName, selectorVisible} from '../store/profile/selectors'
import { toggleProfile, changeName } from '../store/profile/actions'


export function ProfilePage(){
   

    const {theme, toggleTheme } = useContext(ThemeContext)
    const name = useSelector(selectorName)
    const visible = useSelector(selectorVisible)

    const [value, setValue] = useState('')

    const dispatch = useDispatch()
   

    return (
        
        <>
        <div className={styles.box}>
        <h1  >Welcome to PROFILE!</h1>
        <p>{ theme === 'DAY' ? <span style={{color: 'forestGreen', fontSize: '24px',fontWeight: 'Bold'}}> 'DAY'</span>  : <span style={{color: '#6e2441', fontSize: '24px',fontWeight: 'Bold'}}>'NIGHT'</span>}</p>
        <br/>
        <Button onClick={ toggleTheme}>Change Theme</Button>
        </div>
        <br/>
        <hr/>
        <br/>
        <input type='checkbox'
         className={styles.check}
        checked = {visible}
        readOnly
       />
        <Button className={styles.check1}
        onClick= { () => dispatch(toggleProfile()) }>Change Visible</Button>
        <h2 className={styles.check}>{name}</h2>
        <input type='text'
               className={styles.check}
               value={value}
               onChange={(e) => setValue(e.target.value) } />
   
        <Button onClick={() => dispatch(changeName(value))}>Change Name</Button>
        </>
    )
}