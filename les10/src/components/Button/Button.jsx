import  PropTypes  from 'prop-types'
import styles from './Button.module.css'

export function Button(props) {
    
    return (
        <>
        <button  {...props}  style={{backgroundColor: 'rgb(163, 102, 163)'}} className={styles.button}
      >{props.children}</button>
        </>
    )
}

Button.propTypes = {
    type: PropTypes.string
}