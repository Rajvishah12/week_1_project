const CoffeeCard = (props) => {
  return (
  <div className="oneShop">
    <img src={props.image}/>
    <div className = "writtenInfo">
    <h2>{props.name}</h2>
    <p>{props.address}</p>
    <p>{props.number}</p>
    </div>
  </div>
)
}
export default CoffeeCard;