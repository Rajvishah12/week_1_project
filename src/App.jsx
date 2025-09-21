import './App.css';
import CardBox from './components/CardBox'

const App = () => {

  return (
    <div className="App">
      <img className="flowerGarland" src="src/assets/flower_garland.png"/>
      <h1 className="mainTitle"><em>Coffee Shops</em></h1>
      <h2>Some of the Best Coffee Shops in Chicago!</h2>
      <CardBox/>
    </div>
  )
}

export default App