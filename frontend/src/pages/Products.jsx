import { useState, useEffect } from "react"
import axios from 'axios'
import Loader from "../components/Loader"
import cart from '../assets/cart.svg'
import { useSelector } from "react-redux"
import { Route, Routes, useNavigate } from "react-router"
import { Link } from "react-router-dom"
import Product from "../components/Product"

export default function Products() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('/api/products')
            .then(res => res.data)
            .then(data => setProducts(data))
            .then(() => setLoading(false))
    }, [])

    return (
        <Routes>
            {products.map(product => <Route path={`/${product.slug}`} key={product.id} element={<Product {...product} />} />)}
            <Route path="/" element={<ProductsBoard products={products} loading={loading} />} />
        </Routes>
    )
    
}

const ProductsBoard = ({ products, loading }) => {
    useEffect(() => {
        console.log(products)
    }, [products])
    return (
        <section className="padding py-[1.4in] xl:pt-[1.8in] min-h-screen flex flex-col gap-16">
            {loading && <Loader />}
            <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-semibold">Templates</h2>
                <div className="flex flex-col sm:grid grid-cols-autoFit">
                    {products.filter(product => product.category === 'templates').map(product => <ProductRef {...product} key={product} />)}
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-semibold">Applications</h2>
                <div className="flex flex-col sm:grid grid-cols-autoFit">
                    {products.filter(product => product.category === 'apps').map(product => <ProductRef {...product} key={product} />)}
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-semibold">Courses</h2>
                <div className="flex flex-col sm:grid grid-cols-autoFit">
                    <p className="text-primary font-medium">Coming soon!</p>
                </div>
            </div>
        </section>
    )
}

const ProductRef = props => {
    const { logged } = useSelector(state => state.login)
    const navigate = useNavigate()

    const handlePayment = () => {
        if(!logged) return navigate('/login')
    }

    return (
        <Link className="flex flex-col gap-4 sm:max-w-[4.2in]" to={`/products/${props.name.split(" ").map(w => w.toLowerCase()).join("-")}-${props.id}`}>
            <div className="rounded-2xl relative overflow-hidden shadow-outsideShadowPrimary">
                <img src={`/images/${props.image.split("/").pop()}`} alt='' />
                {/* <div className="bg-productShadow absolute inset-0 z-10" /> */}
                <button onClick={handlePayment} className='w-12 h-12 bg-primary hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms] absolute z-20 bottom-4 right-4 rounded-full flex items-center justify-center'>
                    <img className="max-h-[38%]" src={cart} alt='' />
                </button>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-lg font-medium">{props.name}</h2>
                <p className="text-[#4A454F]">{props.desc}</p>
                <h4 className="text-xl text-primary font-semibold">${props.price}</h4>
            </div>
        </Link>
    )
}
