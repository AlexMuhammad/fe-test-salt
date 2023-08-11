import CoreSection from "./components/molecules/CoreSection"
import HeroSection from "./components/molecules/HeroSection"
import SpecialitySection from "./components/molecules/SpecialitySection"
import WhoSection from "./components/molecules/WhoSection"
import MainLayout from "./components/templates/MainLayout"

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <WhoSection />
      <CoreSection />
      <SpecialitySection />
    </MainLayout>
  )
}

export default App
