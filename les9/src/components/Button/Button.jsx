import  PropTypes  from 'prop-types'
import styles from './Button.module.css'

export function Button(props) {
    return (
        <>
        <button  {...props} className={styles.button}
         onClick={props.click}>{props.children}</button>
        </>
    )
}

Button.propTypes = {
    type: PropTypes.string
}