/* eslint-disable react/prop-types */
import { useState } from "react"
import { SLIDERDATA } from "../../constants"
import { CardWho } from "../atoms/Card"

const WhoSection = ({ whoRef }) => {
    const [slider, setSlider] = useState(0);
    const { id, label, title, desc } = SLIDERDATA[slider]

    const handleNext = () => {
        setSlider((slider + 1) % SLIDERDATA.length)
    }

    const handlePrev = () => {
        const newSlider = slider - 1;
        if (newSlider < 0) {
            setSlider(SLIDERDATA.length - 1)
        } else {
            setSlider(slider - 1)
        }
    }
    return (
        <section className="max-width px-[30px] flex justify-center" ref={whoRef}>
            <CardWho sliderData={SLIDERDATA} id={id} label={label} title={title} desc={desc} handleNext={handleNext} handlePrev={handlePrev} />
        </section>
    )
}

export default WhoSection