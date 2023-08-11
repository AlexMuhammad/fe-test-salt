import { useRef } from "react"
import CoreSection from "./components/molecules/CoreSection"
import HeroSection from "./components/molecules/HeroSection"
import SpecialitySection from "./components/molecules/SpecialitySection"
import WhoSection from "./components/molecules/WhoSection"
import MainLayout from "./components/templates/MainLayout"

function App() {
  const whoRef = useRef(null)

  const handleWhoScroll = () => {
    whoRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <MainLayout>
      <HeroSection handleWhoScroll={handleWhoScroll} />
      <WhoSection whoRef={whoRef} />
      <CoreSection />
      <SpecialitySection />
    </MainLayout>
  )
}

export default App
