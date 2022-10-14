import axios from "axios"
import { useState } from "react"

export default function Account({ title }) {
    return (
        <div className="flex flex-col">
            <Password />
            <Email />
        </div>
    )
}

const inputStyles = "px-6 py-2 rounded-3xl bg-[#F5F5F5] focus:bg-[#E9DDF8] border-primary focus:border-[1px] outline-none"

const Password = () => {
    const [password, setPassword] = useState({
        password: '',
        new_password: '',
        confirm_password: '',
    })

    const handleSubmit = () => {
        if(password.new_password !== confirm_password) return
    }

    return (
        <div className="bg-white flex flex-col">
            <h2 className="font-medium w-full h-full py-4 padding bg-[#F7F5FA]">Password</h2>
            <form onSubmit={handleSubmit} className="flex flex-col padding py-6 gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-[#4A454F] text-sm font-medium ml-6" htmlFor="password">Current Password</label>
                    <input className={inputStyles} required autoComplete="off" type="password" id="password" name='password' />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[#4A454F] text-sm font-medium ml-6" htmlFor="newPassword">New Password</label>
                    <input className={inputStyles} required autoComplete="off" type="password" id="newPassword" name='newPassword' />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[#4A454F] text-sm font-medium ml-6" htmlFor="repeatNewPassword">Confirm Password</label>
                    <input className={inputStyles} required autoComplete="off" type="password" id="repeatNewPassword" name='repeatNewPassword' />
                </div>
            </form>
        </div>
    )
}

const Email = () => {
    return (
        <div className="bg-white flex flex-col">
            <h2 className="font-medium padding py-4 w-full h-full bg-[#F7F5FA]">Email</h2>
            <form className="flex flex-col py-6 gap-4 padding">
                <div className="flex flex-col gap-2">
                    <label className="text-[#4A454F] text-sm font-medium ml-6" htmlFor="newEmail">New Email</label>
                    <input className={inputStyles} required autoComplete="off" type="email" id="newEmail" name='newEmail' />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-[#4A454F] text-sm font-medium ml-6" htmlFor="confirmNewEmail">Confirm New Email</label>
                    <input className={inputStyles} required autoComplete="off" type="email" id="confirmNewEmail" name='confirmNewEmail' />
                </div>
            </form>
        </div>
    )
}