import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext';



const FoodItem = ({ image, name, price, desc , id,imageUrl }) => {

    const [itemCount, setItemCount] = useState(0);
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);
    

    const image_list =[
        {name:"Strawberry cake",
        image:assets.food_17},
        {name:"veg-mix bowl",
        image:assets.food_2},
        {name:"Tomato bath",
        image:assets.food_4},
        {name:"chicken rolls",
        image:assets.food_6},
        {name:"creamy butter",
        image:assets.food_9},
        {name:"egg barfi",
        image:assets.food_8},
        {name:"oreo-cream dessert",
        image:assets.food_12},
        {name:"roman noodles",
        image:assets.food_30},
        {name:"veggy sandwich",
        image:assets.food_14},
        {name:"tomato pasta",
        image:assets.food_26},

    ]

    const foodItem = image_list.find(item => item.name === name);

    
    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
            
                <img className='food-item-image' src={foodItem.image} alt="" />
                {!cartItems[id]
                ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                :
                    <div className="food-item-counter">
                        <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
                    </div>
                    
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price">${price}</p>
                <div className="food-item-name-rating">
                    <p></p> <Link to="/cart"><button className="button">Go to Cart</button>  </Link>
                </div>
            </div>
        </div>
    )
}

export default FoodItem
