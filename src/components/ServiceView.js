import ServiceButton from "./ServiceButton";

export default function DiningHallView({ routeService }) {
  return (
    <div>
      <hr />
      <h3>Other</h3>
      <ServiceButton id="grille" routeService={routeService} />
      <ServiceButton id="middxpress" routeService={routeService} />
    </div>
  );
}
