/* eslint-disable react/prop-types */
import Footer from "../molecules/Footer"
import Navbar from "../molecules/Navbar"

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="overflow-x-hidden">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default MainLayout