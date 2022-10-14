import { useState } from "react"
import { ProductsIcon, AccountIcon } from "../assets/profile"
import Account from "../components/profile/Account"
import MobileMenu from "../components/profile/MobileMenu"
import MyProducts from "../components/profile/MyProducts"
import { useSelector } from "react-redux"

export const pages = [
    {
        title: 'My Products',
        mobileTitle: 'Products',
        PageIcon: <ProductsIcon fill="#17131C"/>,
        component: <MyProducts />
    },
    {
        title: 'Account Details',
        mobileTitle: 'Account',
        PageIcon: <AccountIcon fill="#17131C" />,
        component: <Account className='hover:fill-primary' />
    }
]

export default function Profile() {
    const [page, setPage] = useState(pages[0].title)
    const { username } = useSelector(state => state.login.info)

    return (
        <section className="pt-[1in] xl:pt-[1.4in] min-h-screen flex flex-col lg:px-[12vw] 2xl:px-[18vw]">
            <div className="flex rounded-t-3xl overflow-hidden gap-4 items-center px-[8vw] md:px-[12vw] lg:px-6 bg-background lg:bg-white py-6">
                <div className="w-14 h-14 bg-[#9C9C9C] rounded-lg" />
                <div className="flex flex-col">
                    <span className="text-[#9C9C9C] font-medium text-sm">Welcome</span>
                    <h2 className="font-semibold text-lg">{username}</h2>
                </div>
            </div>
            <div className="bg-[#F7F5FA] flex-1 w-full lg:grid grid-cols-profile">
                <MobileMenu page={page} setPage={setPage} />
                {pages.map(obj => page === obj.title && obj.component)}
            </div>
        </section>
    )
}
