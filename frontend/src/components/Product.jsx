import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Product(props) {
    const [details, setDetails] = useState({})

    useEffect(() => {
        axios.get(`/api/products/${props.details_id}`)
            .then(res => res.data)
            .then(data => setDetails(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <section className="padding py-[1.4in] gap-8">
                <Link className="font-medium" to='/products'>Back</Link>
                <div className="flex flex-col gap-8 mt-8">
                    <div className="flex flex-col">
                        <img className="shadow-outsideShadowPrimary rounded-xl" src={props.image} alt="" />
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h2 className="font-medium text-2xl">{props.name}</h2>
                            <p className="text-primary font-semibold text-2xl">${props.price}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-medium">Short description:</h3>
                            <p className="text-[#A199AA]">{details.short_desc}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <button className="rounded-3xl font-medium py-2 px-6 bg-primary max-w-max text-white hover:bg-[#6C25C3] hover:scale-105 transition duration-[250ms]">Add to cart</button>
                            <p className="flex items-center font-medium text-sm">Share product</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="padding py-8 bg-[#FAF8FC]">
                <div className="flex flex-col lg:flex-row gap-8 justify-between">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium text-xl">Description</h3>
                        <p className="text-[#A199AA]">{details.desc}</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-medium text-xl">Tools used</h3>
                        <p className="text-[#A199AA]">{details.id}</p>
                    </div>
                </div>
            </section>
            <section className="py-12" />
        </>
    )
}