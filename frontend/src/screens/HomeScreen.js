import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import Product from '../components/Product'
import { listProducts } from '../store/actions/productActions'


import sharedStyles from './shared-screens.module.css'

const HomeScreen = () => {
    const dispacth = useDispatch()
    const { loading, error, products} = useSelector(state => state.productList)

    useEffect(() => {
        dispacth(listProducts())
    }, [dispacth])

    return (
        <>
            <h1>Latest Products</h1>
            {loading && <h2>Loading...</h2>}
            {error && <h2>Error {error}</h2>}
            {Boolean(products) && (
                <div className={sharedStyles.wrapper}>
                    {products.map(item => (
                        <Product
                            key={item._id} 
                            product={item}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default HomeScreen
