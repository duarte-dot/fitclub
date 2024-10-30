import "./PricingPlan.css";
import PricingCard from "./PricingCard/PricingCard";

const pricingPlans = [
  {
    title: "Basic Plan",
    price: "$16",
    benefits: ["Smart workout plan", "At home workouts"],
  },
  {
    title: "Weekly Plan",
    price: "$25",
    benefits: ["PRO Gyms", "Smart workout plan", "At home workouts"],
  },
  {
    title: "Monthly Plan",
    price: "$45",
    benefits: [
      "ELITE Gyms & Classes",
      "PRO Gyms",
      "Smart workout plan",
      "At home workouts",
      "Personal Training",
    ],
  },
];

const PricingPlan = () => {
  return (
    <div className="pricing-container">
      <h1 className="title">OUR PRICING PLAN</h1>
      <p className="subtitle">
        Our pricing plan comes with various membership tiers, each tailored to
        cater to different preferences and fitness aspirations.
      </p>
      <div className="card-container-pricing">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            benefits={plan.benefits}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
