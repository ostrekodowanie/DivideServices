import axios from "axios"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { profileDate, profileValue } from "../../assets/profile"
import Loader from "../Loader"

export default function MyProducts() {
    const [products, setProducts] = useState([])
    const { id } = useSelector(state => state.login.info) 

    useEffect(() => {
        if(id) {
            axios.post('/api/user/products', id, {
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
        <div className="-mx-[8vw] md:-mx-[12vw] lg:mx-0 lg:px-3 lg:rounded bg-white px-[8vw] md:px-[12vw] py-3 flex gap-6 items-center">
            <img className="shadow-outsideShadowPrimary max-w-[min(40vw,2in)] lg:max-w-[3in] rounded" src={`https://services.divideproject.works/images/${props.product__image}`} alt="" />
            <div className="flex flex-col gap-1 lg:gap-2">
                <h3 className="font-medium lg:text-lg">{props.product__name}</h3>
                <h3 className="flex items-center text-sm lg:text-base font-medium text-[#9C9C9C]"><img className="mr-3 max-h-[1.2em]" src={profileDate} alt="" />{props.created_at.split("T")[0]}</h3>
                <h3 className="flex items-center text-sm lg:text-base font-medium text-[#9C9C9C]"><img className="mr-3 max-h-[1.2em]" src={profileValue} alt="" />{props.value}</h3>
            </div>
        </div>
    )
}