import axios from "axios"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import Loader from "../Loader"

export default function MyProducts() {
    const [products, setProducts] = useState([])
    const { id } = useSelector(state => state.login.info) 

    useEffect(() => {
        if(id) {
            axios.post('/api/user/products', JSON.stringify({
                user_id: id
            }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.data)
            .then(data => setProducts(data))
        }
    }, [id])

    useEffect(() => {
        console.log(products)
    }, [products])

    return (
        <div className='px-[8vw] md:px-[12vw] lg:px-0'>
            <h2 className='font-medium my-4 lg:hidden'>My products</h2>
            <div className="flex flex-col gap-4 lg:p-8">
                {products.length > 0 ? products.map(product => <Product {...product} key={product.id} />) : <Loader />}
            </div>
        </div>
    )
}

const Product = props => {
    return (
        <div className="-mx-[8vw] md:-mx-[12vw] lg:mx-0 px-2 bg-white padding py-2 flex items-center">
            <img src={props.image} alt="" />
            <div className="flex flex-col">
                <h3 className="font-medium">{props.name}</h3>
            </div>
        </div>
    )
}