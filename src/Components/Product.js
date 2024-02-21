import React, { useContext } from 'react'
import image from '../assets/images/perfumes/perfume.jpg';
import { Navigate, Link } from 'react-router-dom';
import { StateContext } from './State/context';

const Product = ({product}) => {
    const {id, name, description, image, rating, reviews, quantity, instock, price} = product;

    const { addToCart } = useContext(StateContext)

  return (
    <React.Fragment>
        <Link className="col-lg-3 col-sm-6" to={"/product/" + id}>
        
            <div className="item" id={id}>
                <img className="min-vh-20" src={image} alt=""/>
                <div className="d-flex flex-column  justify-content-between">

                
                    <span className="mt-2 product-name">{name}</span>
                    <h3>{"R" + price}</h3>
                
            
                    <button className="mt-2 button" onClick={(e) => { e.stopPropagation(); addToCart(product)}}>Add to Cart</button>
                    {/* <p>{rating}</p> */}
                    <p className="mt-2">{quantity + " left"}</p>

                    {/* <div className="d-flex flex-column align-items-start">
                        
                        
                        <p className="mt-2">{quantity + " left"}</p>
                    </div>
                    <div className=" d-flex flex-column align-items-end mt-2">
                        
                        
                    </div> */}
                </div>
            </div>
        
        </Link>
    </React.Fragment>
  )
}

export default Product