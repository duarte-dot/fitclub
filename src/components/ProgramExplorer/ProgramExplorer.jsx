import "./ProgramExplorer.css";
import { Card } from "./Card/Card";
import { RiBoxingFill } from "react-icons/ri";
import { PiHeartbeatFill } from "react-icons/pi";
import { FaRunning } from "react-icons/fa";
import { BsFillBasket2Fill } from "react-icons/bs";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const ProgramExplorer = () => {
  const programData = [
    {
      title: "Strength",
      description:
        "Embrace the essence of strength as we delve into its various dimensions physical, mental and emotional.",
      icon: <RiBoxingFill />,
    },
    {
      title: "Physical Fitness",
      description:
        "It encompasses a range of activities that improve health, strength, flexibility and overall well-being.",
      icon: <PiHeartbeatFill />,
    },
    {
      title: "Fat Lose",
      description:
        "Through a combination of workout routines and expert guidance, we'll empower you to reach your goals.",
      icon: <FaRunning />,
    },
    {
      title: "Weight Gain",
      description:
        "Designed for individuals, our program offers an effective approach to gaining weight in a sustainable manner.",
      icon: <BsFillBasket2Fill />,
    },
  ];

  return (
    <div className="program-explorer">
      <div className="header-programs">
        <h2 className="title">EXPLORE OUR PROGRAM</h2>
        <div className="arrows">
          <button className="arrow-button">
            <IoArrowBackCircleOutline />
          </button>
          <button className="arrow-button">
            <IoArrowForwardCircleOutline />
          </button>
        </div>
      </div>
      <div className="card-container">
        {programData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgramExplorer;
