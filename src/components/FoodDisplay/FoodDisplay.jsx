import React, { useContext ,useState} from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets'

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext);
  const [search,setSearch] = useState('')

  const updateFood = food_list.filter((item)=>{
    return item.name.toLowerCase().includes(search.toLowerCase())
  })
  // console.log(updateFood)

  return (
    <div className='food-display' id='food-display'>
        <div className="search-container">
        <h2>Top dishes near you</h2>
        
            <input
                type="text"
                
                onChange={(event)=>setSearch(event.target.value)}
                placeholder="Enter your search..."
                className="search-input"
            />
                  <img src={assets.search_icon} className="icon" alt="" />
          
        </div>


      <div className='food-display-list'>
        {updateFood.map((item)=>{
          if (category==="All" || category===item.category) {
            return <FoodItem key={item._id} image={item.image} name={item.name} imageUrl ={item.imageUrl} desc={item.description} price={item.price} id={item._id}/>
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
