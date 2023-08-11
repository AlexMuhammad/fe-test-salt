import { useState } from "react"
import { MENUS } from "../../constants"
import { Logo } from "../../utils/image"
import { FiMenu } from "react-icons/fi"

const Navbar = () => {
    const [show, setShow] = useState(false);

    const showHandler = () => {
        setShow(!show)
    }
    return (
        <header>
            <nav className="max-width flex items-center justify-between py-3 px-[30px] z-[99999]">
                <img src={Logo} alt="logo" />
                <div className="absolute md:hidden block right-8" onClick={showHandler}>
                    <FiMenu className="text-2xl" />
                </div>
                <ul className={`py-3 z-50 w-full md:static absolute md:w-auto left-0 flex md:flex-row flex-col space-x-0 md:space-x-5 my-5 space-y-3 px-[30px] md:px-0 md:space-y-0 bg-primary-1 md:bg-white transition-all duration-500 ${show ? "top-10" : "-top-[200px]"}`}>
                    {MENUS.map((menu) => (
                        <li className="text-white md:text-black" key={menu.id}>{menu.label}</li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar