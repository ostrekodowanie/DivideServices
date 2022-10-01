import { PayPalButtons } from "@paypal/react-paypal-js"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useLocation } from "react-router"
import Loader from "../components/Loader"
import { Success } from "../components/Success"
import axios from 'axios'

export default function Payment() {
    const purchaseItem = useSelector(state => state.purchase.value)

    const location = useLocation()
    let url = location.pathname.split('/').pop()

    return (
        <section className="padding pt-[1.4in] xl:pt-[2.2in] flex flex-col items-center min-h-screen">
            <div className="flex flex-col">
                {url === 'success' || url === 'cancel' ? <></> : <h1 className="text-4xl xl:text-[2.5rem] font-semibold mb-8">{url === 'shipping' ? 'Shipping' : 'Payment'}</h1>}
                {url === 'shipping' ? <Form /> : url === 'proceed' ? <PayPalForm item={purchaseItem} /> : url === 'success' ?  <Success msg='Your order has been successfully proceeded, you have now access to the product' title='order complete' /> : <></>}
            </div>
        </section>
    )
}

const Form = () => {
    const navigate = useNavigate()
    const { id } = useSelector(state => state.login.info)
    const [alert, setAlert] = useState('')
    const [shipping, setShipping] = useState({
        name: '',
        surname: '',
        phone_number: ''
    })

    useEffect(() => {
        axios.post(`/api/orders/token`, JSON.stringify({'user_id': id}), {
            headers: {
                "Content-Type": 'application/json'
            }
        }).then(res => res.data)
        .then(data => setShipping(data))
        .catch(err => setAlert(err))
    }, [])

    const handleSubmit = async e => {
        e.preventDefault()
        setAlert('loading')
        const response = await axios.patch(`/api/orders/user/${id}`, JSON.stringify(shipping), {
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch(err => setAlert(err))
        if(response.status === 200) return navigate('/payment/proceed')
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className="flex flex-col gap-2">
                <label className="ml-6" htmlFor="name">Name</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" value={shipping.name} required onChange={e => setShipping({...shipping, name: e.target.value})} type='text' name='name' id='name' placeholder="Josh" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="ml-6" htmlFor="surname">Surname</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" value={shipping.surname} required onChange={e => setShipping({...shipping, surname: e.target.value})} type='text' name='surname' id='surname' placeholder="Davis" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="ml-6" htmlFor="phone">Phone Number</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" value={shipping.phone_number} required onChange={e => setShipping({...shipping, phone_number: e.target.value})} type='text' name='phone' id="phone" placeholder="+48 529 528 298" />
            </div>
            <button className="rounded-3xl py-2 px-6 bg-primary text-white mb-6 mt-3 max-w-max" type='submit'>Next step</button>
            {alert === 'loading' ? <Loader /> : <></>}
        </form>
    )
}

const PayPalForm = ({ item }) => {
    const navigate = useNavigate()

    const handleApprove = () => {
        return navigate('/payment/success')
    }

    return (
        <div className="shadow-outsideShadowPrimary p-4 min-w-[4in] rounded-xl mb-8 relative z-0 flex flex-col gap-12">
            <div className="flex items-center justify-between gap-6">
                <img className='shadow-outsideShadowPrimary max-w-[2in]' src={item.image} alt="" />
                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-[#4A454F]">{item.desc}</p>
                </div>
                <h3 className="text-primary text-2xl font-semibold">${item.price}</h3>
            </div>
            <PayPalButtons createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: item.price
                        }
                    }]
                })
            }} onApprove={handleApprove} />
        </div>
    )
}