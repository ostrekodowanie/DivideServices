import { Link } from "react-router-dom";
import { logo } from "../assets/header";

export default function Footer() {
    return (
        <footer className="bg-[#29015C] padding py-12">
            <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row justify-between">
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-white mb-2">Divide Project</h3>
                    <p className="text-white/[0.62] text-sm">+48 753 983 413</p>
                    <p className="text-white/[0.62] text-sm">divideproject.business@gmail.com</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-white mb-2">Website</h3>
                    <Link to='/' className="text-white/[0.62] text-sm">Home</Link>
                    <Link to='/products' className="text-white/[0.62] text-sm">Products</Link>
                    <Link to='/contact' className="text-white/[0.62] text-sm">Contact</Link>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-white mb-2">Products</h3>
                    <Link to='/products' className="text-white/[0.62] text-sm">Apps</Link>
                    <Link to='/products' className="text-white/[0.62] text-sm">Templates</Link>
                    <Link to='/products' className="text-white/[0.62] text-sm">Courses</Link>
                    <Link to='/products' className="text-white/[0.62] text-sm">Order</Link>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-medium text-white mb-2">Development</h3>
                    <p className="text-white/[0.62] max-w-[2in] text-sm leading-relaxed">Website fully produced by our team.</p>
                    <img className="w-16 mt-2" src={logo} alt="" />
                </div>
            </div>
        </footer>
    )
}