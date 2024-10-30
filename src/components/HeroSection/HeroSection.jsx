import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2 className="hero-subtitle">BEST FITNESS IN THE TOWN</h2>
        <div className="hero-background-O2">O</div>
        <img src="hero.png" alt="Fitness Hero" className="mobile_hero-image" />
        <h1 className="hero-title">
          <span>MAKE</span> YOUR <br /> BODY SHAPE
        </h1>
        <p className="hero-description">
          Unleash your potential and embark on a journey towards a stronger,
          fitter, and more confident you. Sign up for "Make Your Body Shape" now
          and witness the incredible transformation your body is capable of!
        </p>
        <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-background-O">O</div>
      <div className="hero-image-wrapper">
        <div className="hero-background-fitness">FITNESS</div>
        <img src="hero.png" alt="Fitness Hero" className="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
