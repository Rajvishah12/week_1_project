const CoffeeCard = (props) => {
  return (
  <div className="oneShop">
    <img src="src/assets/coffee_cup.jpg"/>
    <h2>{props.name}</h2>
    <p>{props.address}</p>
  </div>
)
}
export default CoffeeCard;