import { DeskHuman, Scroll } from "../../utils/image"

const HeroSection = () => {
    return (
        <section className="max-width px-[30px] flex justify-between md:h-screen items-center gap-28">
            <div className="w-full flex-col flex justify-center space-y-6 mt-10 md:mt-0">
                <h1 className="text-36 font-medium text-primary-1 text-center md:text-start">Discover Your Wonder</h1>
                <p className="leading-loose text-center md:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam.</p>
                <div className="w-full flex justify-center pt-10 animate-bounce">
                    <img src={Scroll} alt="scroll" width={50} height={50} className="object-contain" />
                </div>
            </div>
            <div className="hidden md:block">
                <img src={DeskHuman} alt="deskhuman" className="object-contain" />
            </div>
        </section>
    )
}

export default HeroSection