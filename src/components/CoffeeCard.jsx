const CoffeeCard = (props) => {
  return (
  <div className="oneShop">
    <h2>{props.name}</h2>
    <p>{props.address}</p>
    <p>{props.number}</p>
  </div>
)
}
export default CoffeeCard;