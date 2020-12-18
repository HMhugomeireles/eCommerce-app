import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import sharedStyles from './shared.module.css'

const Header = () => {
    const { cartItems } = useSelector(state => state.cart)

    return (
        <header className={`${sharedStyles.container} ${sharedStyles.dark}`}>
            <h2 className={sharedStyles.logo}><Link to="/">ProShop</Link></h2>
            <div>
                <nav className={sharedStyles.navigation}>
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {cartItems.length > 0 && <span>{cartItems.reduce((a, i) => a + i.quantity, 0)}</span>}
                        <label>Cart</label>
                    </Link>
                    <Link to="/login">
                        <FontAwesomeIcon icon={faUser} />
                        <label>Sign In</label>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
