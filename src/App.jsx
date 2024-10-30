import "./App.css";
import ClassComponent from "./components/ClassComponent/ClassComponent";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import HeroSection from "./components/HeroSection/HeroSection";
import JoinUs from "./components/JoinUs/JoinUs";
import PricingPlan from "./components/PricingPlan/PricingPlan";
import ProgramExplorer from "./components/ProgramExplorer/ProgramExplorer";

function App() {
  return (
    <>
      <HeaderNav />
      <HeroSection />
      <ProgramExplorer />
      <ClassComponent />
      <JoinUs />
      <PricingPlan />
    </>
  );
}

export default App;
