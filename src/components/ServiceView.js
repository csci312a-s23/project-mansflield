import ServiceButton from "./ServiceButton";

export default function DiningHallView({ routeDiningHall }) {
  return (
    <div>
      <hr />
      <ServiceButton id="grille" routeDiningHall={routeDiningHall} />
      <ServiceButton id="middxpress" routeDiningHall={routeDiningHall} />
    </div>
  );
}
