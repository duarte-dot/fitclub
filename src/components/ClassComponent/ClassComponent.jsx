import "./ClassComponent.css";

const ClassComponent = () => {
  return (
    <div className="class-container">
      <div className="image-container">
        <img src="class-1.jpg" alt="Class Background" className="image-back" />
        <img src="class-2.jpg" alt="Class Front" className="image-front" />
      </div>
      <div className="text-container">
        <h2>THE CLASS YOU WILL GET HERE</h2>
        <p>
          Led by our team of expert and motivational instructors, "The Class You
          Will Get Here" is a high-energy, results-driven session that combines
          a perfect blend of cardio, strength training, and functional
          exercises. Each class is carefully curated to keep you engaged and
          challenged, ensuring you never hit a plateau in your fitness
          endeavors.
        </p>
        <button className="book-button">Book A Class</button>
      </div>
    </div>
  );
};

export default ClassComponent;
