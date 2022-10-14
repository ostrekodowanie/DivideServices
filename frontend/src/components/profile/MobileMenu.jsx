import { useEffect } from "react"
import { pages } from "../../pages/Profile"

export default function MobileMenu ({ page, setPage }) {
    return (
        <ul className="left-0 right-0 gap-2 bg-white fixed bottom-0 shadow-[0px_-3px_44px_rgba(133,47,242,0.08)] px-[8vw] md:px-[12vw] py-5 flex justify-between items-center">
            {pages.map(obj => <MobileMenuLink page={page} setPage={setPage} {...obj} key={obj.mobileTitle} />)}
        </ul>
    )
}

const MobileMenuLink = props => {
    
    return <li className={`text-sm flex transition-colors flex-col items-center gap-2 ${props.page === props.title ? 'text-primary' : 'hover:text-primary'} cursor-pointer font-medium`} key={props.title} onClick={() => props.setPage(props.title)}>
        {props.PageIcon}
        {props.mobileTitle}
    </li>
}