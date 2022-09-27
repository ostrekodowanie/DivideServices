import { useState, useEffect } from "react"
import axios from 'axios'
import Loader from "../components/Loader"
import cart from '../assets/cart.svg'

export default function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('/api/products')
            .then(res => res.data)
            .then(data => setProducts(data))
        return setLoading(false)
    }, [])

    return (
        <section className="padding pt-[1.4in] xl:pt-[1.8in] min-h-screen">
            <h2 className="text-2xl font-bold">Applications</h2>
            {loading ? <Loader /> : <></>}
            <div className="flex flex-col sm:grid grid-cols-autoFit">
                {products.filter(product => product.category === 'apps').map(product => <Product {...product} key={product} />)}
            </div>
        </section>
    )
}

const Product = props => {
    return (
        <div className="flex flex-col gap-4">
            <div className="filter drop-shadow rounded-2xl relative overflow-hidden">
                <img src={props.image} alt='' />
                <button className='w-12 h-12 bg-primary absolute bottom-4 right-4'>
                    <img src={cart} alt='' />
                </button>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-lg">{props.name}</h2>
                <p className="text-[#4A454F]">{props.description}</p>
                <h4 className="text-lg text-primary">{props.price}</h4>
            </div>
        </div>
    )
}