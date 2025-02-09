import PropTypes from 'prop-types'
import styles from './Header.module.css'
function Header(props){
    return(
        <h1 className={styles.headerTitle}>{props.title}</h1>
    );
}

Header.propType = {
    title: PropTypes.string
}
export default Header