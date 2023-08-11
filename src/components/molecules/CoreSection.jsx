import { COREVALUES } from "../../constants"
import { DeskHuman } from "../../utils/image"
import List from "../atoms/List"

const CoreSection = () => {
    return (
        <section className="max-width px-[25px] flex justify-center">
            <div className="w-full flex flex-col items-center">
                <div className="space-y-5 text-start md:w-1/2">
                    <h1 className="text-36 md:text-6xl text-primary-1 font-medium mb-5 text-center">Our Core Values</h1>
                    <p className="text-16 text-primary-3 text-justify">Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.</p>
                    <p className="text-16 text-primary-3 text-justify">In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.</p>
                    <ul className="relative">
                        {COREVALUES.map((core) => (
                            <List key={core.id} title={core.title} desc={core.desc} />
                        ))}
                        <img src={DeskHuman} alt="desk human" className="absolute -right-16 block mt-8 md:hidden" />
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CoreSection