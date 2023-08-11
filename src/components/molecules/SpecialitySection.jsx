import { useState } from "react";
import { SPECIALITY } from "../../constants";
import { CardSpeciality } from "../atoms/Card";

const SpecialitySection = () => {
    const [slider, setSlider] = useState(0);
    const { id, label, image, desc } = SPECIALITY[slider]

    const handleNext = () => {
        setSlider((slider + 1) % SPECIALITY.length)
    }

    const handlePrev = () => {
        const newSlider = slider - 1;
        if (newSlider < 0) {
            setSlider(SPECIALITY.length - 1)
        } else {
            setSlider(slider - 1)
        }
    }
    return (
        <section className="md:w-1/3 max-width px-[25px] py-[35px] flex justify-center bg-primary-1 mt-56 md:mt-20">
            <div className="w-full flex flex-col bg-white py-[40px] px-[30px]">
                <div className="space-y-5 text-start w-full">
                    <h1 className="text-24 md:text-3xl text-primary-1 font-medium mb-5">OUR SPECIALITY</h1>
                    <p className="text-sm/6 font-light text-[#303030]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
                    <CardSpeciality data={SPECIALITY} id={id} key={id} label={label} image={image} desc={desc} handleNext={handleNext} handlePrev={handlePrev} />
                </div>
            </div>
        </section>
    )
}

export default SpecialitySection