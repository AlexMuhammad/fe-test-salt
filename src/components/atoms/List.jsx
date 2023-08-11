/* eslint-disable react/prop-types */
import { FiMinus } from "react-icons/fi"

const List = ({ title, desc }) => {
    return (
        <li className="flex space-y-6 relative">
            <FiMinus className="text-[36px] absolute top-6" />
            <div className="ml-10 space-y-[6px]">
                <h3 className="text-24">{title}</h3>
                <p className="text-16 text-primary-3">{desc}</p>
            </div>
        </li>
    )
}

export default List