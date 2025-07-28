import Card from "./Card";

function Container() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      <Card img="src/assets/images/fushigidane.jpg" title="Fushigidane" />
      <Card img="src/assets/images/hitokage.png" title="Hitokage" />
      <Card img="src/assets/images/zenigane.jpeg" title="Zenigane" />
      <Card img="src/assets/images/koduck.jpg" title="Koduck" />
    </div>
  );
}
export default Container;
