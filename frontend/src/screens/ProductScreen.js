import { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { productDetails } from '../store/actions/productActions'

import sharedStyles from './shared-screens.module.css'

const ProductScreen = ({ history, match }) => {
    const [quantityInput, setQuantityInput] = useState(1)
    const dispacth = useDispatch()
    const { loading, error, product} = useSelector(state => state.productDetails)

    function handlerAddToCart() {
        history.push(`/cart/${match.params.id}?qty=${quantityInput}`)
    }

    useEffect(() => {
        dispacth(productDetails(match.params.id))
    }, [dispacth, match.params.id])
    
    return (
        <> 
            {Boolean(loading) && <h2>Loading...</h2>}
            {Boolean(error) && <h2>Error {error}</h2>}
            {Boolean(product) && (
                <>
                    <div className={sharedStyles.mtb2}>
                        <Link to="/">Go back</Link>
                    </div>
                    <div className={`${sharedStyles.flexContainer} ${sharedStyles.mtb2}`}>
                        <img className={sharedStyles.w50} src={product.image} alt="" />
                        <div className={`${sharedStyles.flexContainer} ${sharedStyles.flexColum} ${sharedStyles.mlr2}`}>
                            <h1 className={sharedStyles.w100}>{product.name}</h1>
                            <div className={`${sharedStyles.borderBottom} ${sharedStyles.borderTop} ${sharedStyles.textCenter} ${sharedStyles.p1}`}>Reviews {product.rating} from {product.numReviews}</div>
                            <div className={`${sharedStyles.p1} ${sharedStyles.description}`}>{product.description}</div>
                            <div className={`${sharedStyles.borderTop} ${sharedStyles.ptb1} `}>
                                <div className={`${sharedStyles.p1} ${sharedStyles.textCenter}`}>Price <strong>${product.price}</strong></div>
                                <div className={`${sharedStyles.p1} ${sharedStyles.textCenter}`}>{product.countInStock > 0 ? 'In Stock' : 'Stock Out'}</div>
                                {product.countInStock > 0 && (
                                    <div className={` ${sharedStyles.flexContainer} ${sharedStyles.justifyCenter} ${sharedStyles.flexColum}`}>
                                        <input
                                            className={`${sharedStyles.p1} ${sharedStyles.m1} ${sharedStyles.textCenter}`}
                                            min={1}
                                            max={product.countInStock}
                                            type="number" 
                                            value={quantityInput} 
                                            onChange={(e) => (
                                                e.target.value > product.countInStock && e.target.value >= 1 
                                                ? setQuantityInput(product.countInStock)
                                                : setQuantityInput(e.target.value)
                                            )}/>
                                        {quantityInput < 1 || quantityInput > product.countInStock ? (
                                            <div className={`${sharedStyles.p1} ${sharedStyles.textCenter} ${sharedStyles.textRed}`}>Quantity must be between 1 and {product.countInStock}</div>
                                        ): null}
                                    </div>
                                )}
                                <button 
                                    className={`${sharedStyles.button} ${product.countInStock === 0 ? sharedStyles.buttonDisable : ''}`} 
                                    disabled={product.countInStock <= 0}
                                    onClick={handlerAddToCart}>Add to Cart</button>
                            </div>
                        </div>    
                    </div>
                </>
            )}
        </>
    )
}

export default ProductScreen