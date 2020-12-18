import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCard, removeItemFromCard } from '../store/actions/cartActions'

import sharedStyles from './shared-screens.module.css'

const CartScreen = ({ match, location, history}) => {
    const productId = match.params.id

    const quantity = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const { cartItems } = useSelector(state => state.cart)

    function handlerContinueToCheckout() {
        history.push('/login?redirect=checkout')
    }

    useEffect(() => {
        if (productId) {
            dispatch(addItemToCard(productId, quantity))
        }
    }, [dispatch, productId, quantity])

    return (
        <div className={`${sharedStyles.m2}`}>
            <div className={sharedStyles.mtb2}><Link to="/">Back Home</Link></div>
            <h1>Shopping cart</h1>
            {cartItems.length === 0 
                ? <div className={`${sharedStyles.empty}`}>Shopping cart empty</div> 
                : (
                <>
                    <div className={`${sharedStyles.m2} ${sharedStyles.flexContainer} ${sharedStyles.flexColum}`}>
                        {cartItems.map(item => (
                            <div key={item._id} className={`${sharedStyles.p1} ${sharedStyles.flexContainer} ${sharedStyles.alignCenter} ${sharedStyles.borderTop} ${sharedStyles.borderBottom} ${sharedStyles.justifyBetween}`}>
                                <img className={`${sharedStyles.w25}`} src={item.image} alt="" />
                                <h2><Link to={`/product/${parseInt(item._id)}`}>{item.name}</Link></h2>
                                <div>{item.quantity}</div>
                                <div>${item.price * item.quantity}</div>
                                <button 
                                    className={`${sharedStyles.cursorPointer}`} 
                                    onClick={() => dispatch(removeItemFromCard(item._id))}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <div className={`${sharedStyles.flexContainer} ${sharedStyles.alignCenter} ${sharedStyles.justifyBetween}`}>
                        <div className={`${sharedStyles.w25}`}></div>
                        <div className={`${sharedStyles.w50}`}></div>
                        <div>{cartItems.reduce((a, i) =>  a + i.quantity, 0)} items</div>
                        <div><strong>${(Math.round((cartItems.reduce((a, i) =>  (a + (i.quantity * i.price)), 0)) * 100) / 100).toFixed(2)}</strong></div>
                    </div>
                    <div className={`${sharedStyles.flexContainer} ${sharedStyles.alignCenter} ${sharedStyles.justifyBetween}`}>
                        <div className={`${sharedStyles.w25}`}></div>
                        <div className={`${sharedStyles.w50}`}></div>
                        <div></div>
                        <div>
                            <button 
                                onClick={handlerContinueToCheckout} 
                                className={`${sharedStyles.cursorPointer} ${sharedStyles.w100} ${sharedStyles.p1} ${sharedStyles.m1}`}>Continue to Checkout</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default CartScreen
