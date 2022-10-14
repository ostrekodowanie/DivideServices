import { AccountIcon, ProductsIcon } from "../../assets/profile"
import { pages } from "../../pages/Profile"

export default function MobileMenu ({ page, setPage }) {
    return (
        <ul className="left-0 right-0 gap-2 bg-white fixed lg:static bottom-0 shadow-[0px_-3px_44px_rgba(133,47,242,0.08)] lg:shadow-none px-[8vw] md:px-[12vw] lg:px-2 py-5 flex lg:flex-col lg:items-start justify-between lg:justify-start lg:gap-2 items-center">
            {pages.map(obj => <MobileMenuLink page={page} setPage={setPage} {...obj} key={obj.mobileTitle} />)}
        </ul>
    )
}

const MobileMenuLink = props => {
    return <li className={`text-sm flex lg:flex-row lg:px-6 lg:py-3 lg:rounded-xl lg:w-full transition-colors flex-col items-center gap-2 ${props.page === props.title ? 'text-primary lg:bg-[#E9DDF8]' : 'hover:text-primary'} cursor-pointer font-medium`} key={props.title} onClick={() => props.setPage(props.title)}>
        {props.title === 'My Products' ? <ProductsIcon fill={props.page === props.title ? "#852FF2" : "#17131C"} /> : <AccountIcon fill={props.page === props.title ? "#852FF2" : "#17131C"} /> }
        {props.mobileTitle}
    </li>
}