import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItemToCard } from '../store/actions/cartActions'
import Rating from './Rating'
import productStyles from './product.module.css'

const Product = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className={productStyles.productContainer}>
            <Link className={productStyles.link} to={`/product/${product._id}`}>
                <img 
                    className={productStyles.productImage}
                    src={product.image} 
                    alt={product.name} />
            </Link>
            <div className={productStyles.productBody}>
                <Link className={`${productStyles.link} ${productStyles.mtb1}`} to={`/product/${product._id}`}>
                    <strong 
                        className={productStyles.cardTitle}
                    >{product.name}</strong>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <div className={productStyles.flex}>
                    <strong>${product.price}</strong>
                    <button 
                        onClick={() => dispatch(addItemToCard(product._id))}
                        className={productStyles.button}>Add Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product
