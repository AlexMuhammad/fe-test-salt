/* eslint-disable react/prop-types */
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

export const CardWho = ({ sliderData, id, label, title, desc, handleNext, handlePrev }) => {
    return (
        <div className="flex flex-col md:flex-row justify-center h-full py-[48px] md:pt-0 px-5 md:px-20 gap-20">
            <div className="space-y-5 md:text-center text-start md:w-1/2" id={id}>
                <h1 className="text-4xl md:text-6xl text-primary-1 font-semibold mb-5">{label}</h1>
                <h3 className="text-lg text-black">{title}</h3>
                <span className="leading-relaxed text-[#777] text-sm font-light w-5">{desc}</span>
                <div className="w-full flex justify-between items-center pt-10">
                    <div>
                        <h4 className="text-2xl transition-all duration-500 ease-in">0{id}<span className="text-[#777] text-sm">/0{sliderData.length}</span></h4>
                    </div>
                    <div className="inline-flex">
                        <FiArrowLeft className="text-[#777] text-4xl bg-gray-200 p-2 cursor-pointer" onClick={handlePrev} />
                        <FiArrowRight className="text-white text-4xl bg-primary-1 p-2 cursor-pointer" onClick={handleNext} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const CardSpeciality = ({ id, label, image, desc, handleNext, handlePrev }) => {
    return (
        <>
            <div className="flex justify-center items-center  flex-col">
                <img src={image} alt={label} className="w-1/3 pt-[28px]" />
                <span className="text-primary-4 text-14 font-light py-[38px] text-center leading-relaxed">{desc}</span>
            </div>
            <div className="w-full flex justify-between items-center pt-10">
                <button disabled={id == 1 ? true : false} className={`text-2xl cursor-pointer ${id === 1 ? "text-primary-4 " : "text-primary-2"}`} onClick={handlePrev}>
                    <FiArrowLeft />
                </button>
                <div className="flex gap-2">
                    <div className={`w-3 h-3 bg ${id === 1 ? "border-2 border-[#3D46A2]" : ""} rounded-full bg-[#DAF3FC]`}></div>
                    <div className={`w-3 h-3 bg ${id === 2 ? "border-2 border-[#3D46A2]" : ""} rounded-full bg-[#DAF3FC]`}></div>
                    <div className={`w-3 h-3 bg ${id === 3 ? "border-2 border-[#3D46A2]" : ""} rounded-full bg-[#DAF3FC]`}></div>
                </div>
                <button disabled={id == 3 ? true : false} className={`text-2xl cursor-pointer ${id === 3 ? "text-primary-4 " : "text-primary-2"}`} onClick={handleNext}>
                    <FiArrowRight />
                </button>
            </div>
        </>
    )
}