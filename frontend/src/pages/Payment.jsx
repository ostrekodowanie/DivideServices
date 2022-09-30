import { PayPalButtons } from "@paypal/react-paypal-js"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useLocation } from "react-router"
import Loader from "../components/Loader"
import { Success } from "../components/Success"

export default function Payment() {
    const purchaseItem = useSelector(state => state.purchase)

    const location = useLocation()
    let url = location.pathname.split('/').pop()

    return (
        <section className="padding pt-[1.4in] xl:pt-[2.2in] flex flex-col items-center min-h-screen">
            <div className="flex flex-col">
                {url === 'success' || url === 'cancel' ? <></> : <h1 className="text-4xl xl:text-[2.5rem] font-semibold mb-8">{url === 'shipping' ? 'Shipping' : 'Payment'}</h1>}
                {url === 'shipping' ? <Form /> : url === 'proceed' ? <PayPalForm price={purchaseItem.price} /> : url === 'success' ?  <Success msg='Your order has been successfully proceeded, you have now access to the product' title='order complete' /> : <></>}
            </div>
        </section>
    )
}

const Form = () => {
    const navigate = useNavigate()
    const [alert, setAlert] = useState('')
    const [shipping, setShipping] = useState({
        name: '',
        surname: '',
        email: '',
        address: '',
        postal: '',
        city: ''
    })

    const handleSubmit = async e => {
        e.preventDefault()
        setAlert('loading')
        return navigate('/payment/proceed')
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className="flex flex-col gap-2">
                <label className="ml-6" htmlFor="name">Name</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" required onChange={e => setShipping({...shipping, name: e.target.value})} type='text' name='name' id='name' placeholder="Josh" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="ml-6" htmlFor="surname">Surname</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" required onChange={e => setShipping({...shipping, surname: e.target.value})} type='text' name='surname' id='surname' placeholder="Davis" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="ml-6" htmlFor="address">Address</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" required onChange={e => setShipping({...shipping, address: e.target.value})} type='text' name='address' id="address" placeholder="Address Line 1" />
            </div>
            <div className="flex flex-col gap-2">
                <label className="ml-6" htmlFor="postal">Postal Code</label>
                <input className="rounded-3xl px-6 py-2 shadow-outsideShadowPrimary" required onChange={e => setShipping({...shipping, postal: e.target.value})} type='password' name='postal' id="postal" placeholder="27-492" />
            </div>
            <button className="rounded-3xl py-2 px-6 bg-primary text-white mb-6 mt-3 max-w-max" type='submit'>Next step</button>
            {alert === 'loading' ? <Loader /> : <></>}
        </form>
    )
}

const PayPalForm = props => {
    const navigate = useNavigate()

    const handleApprove = () => {
        return navigate('/payment/success')
    }

    return (
        <div className="shadow-outsideShadowPrimary p-4 min-w-[4in] rounded-xl mb-8 relative z-0">
            <PayPalButtons createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: props.price
                        }
                    }]
                })
            }} onApprove={handleApprove} />
        </div>
    )
}