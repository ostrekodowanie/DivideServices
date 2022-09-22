import { useState, useEffect } from "react"
import axios from 'axios'

export default function Services() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('/api/products')
            .then(res => res.data)
            .then(data => setProducts(data))
    }, [])
    return (
        <section className="padding pt-[1.4in] xl:pt-[2.2in]">
            <h2 className="text-2xl font-bold">Applications</h2>
            {products.filter(product => product.category === 'apps').map(product => <Product {...product} key={product} />)}
        </section>
    )
}

const Product = props => {
    return (
        <div className="flex flex-col">
            <img src={props.image} alt='' />
            <h2>{props.name}</h2>
        </div>
    )
}