//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faStar, faStarHalfAlt, fasStart } from '@fortawesome/free-solid-svg-icons'
import productStyles from './product.module.css'

const Rating = ({ rating, numReviews }) => {
    return (
        <div className={productStyles.rating}>
            {rating} from {numReviews} reviews
            {/* <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
            <FontAwesomeIcon icon={faStarOfLife} /> */}
        </div>
    )
}

export default Rating