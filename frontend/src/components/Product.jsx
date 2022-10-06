import axios from "axios"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import arrow from "../assets/arrow_left.svg"
import { add } from "../reducers/purchase"
import Loader from "./Loader"

export default function Product(props) {
    const [details, setDetails] = useState({
        tools: []
    })
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`/api/products/${props.details_id}`)
            .then(res => res.data)
            .then(data => setDetails(data))
            .then(() => setLoading(false))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <section className='padding py-[1.4in] xl:pt-[1.8in] gap-8 relative'>
                <Link className="font-medium flex items-center" to='/products'><img className="max-h-[1em] mr-3" src={arrow} alt='' />Back</Link>
                <div className="flex flex-col gap-8 lg:gap-12 mt-8 lg:mt-12 lg:flex-row">
                    <div className="flex flex-col">
                        <img className="shadow-outsideShadowPrimary rounded-xl lg:max-w-[40vw]" src={`/images/${props.image.split("/").pop()}`} alt="" />
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-3">
                            <h2 className="font-medium text-2xl">{props.name}</h2>
                            <p className="text-primary font-semibold text-2xl">${props.price}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-lg font-medium">Short description:</h3>
                            <p className="text-[#A199AA] inter">{details.short_desc}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <PaymentButton {...props} />
                            <p className="flex items-center font-medium text-sm">Share product</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="padding py-8 lg:py-12 bg-[#FAF8FC]">
                {loading && <Loader />}
                <div className="flex flex-col lg:flex-row gap-8 justify-between">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium text-xl">Description</h3>
                        <p className="text-[#A199AA] max-w-[6in] inter">{details.desc}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium text-xl">Tools used</h3>
                        <p className="text-[#A199AA] font-medium">{details.tools.map((tool, i) => <span>{i === details.tools.length - 1 ? tool.split(" | ")[0] : tool.split(" | ")[0] + ', '}</span>)}</p>
                        <div className="flex items-center gap-4">
                            {details.tools.map(tool => <img src={`/images/${tool.split(" | ").pop()}`} alt={tool.split(" | ")[0]} />)}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12" />
        </>
    )
}

const PaymentButton = props => {
    const dispatch = useDispatch()
    const { logged } = useSelector(state => state.login)
    const navigate = useNavigate()

    const handlePayment = () => {
        if(!logged) return navigate('/login')
        dispatch(add({
            id: props.id,
            name: props.name,
            desc: props.desc,
            image: props.image,
            price: props.price
        }))
        return navigate('/payment/shipping')
    }

    return <button onClick={handlePayment} className="rounded-3xl inter font-medium py-2 px-6 bg-primary max-w-max text-white hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms]">Add to cart</button>
}