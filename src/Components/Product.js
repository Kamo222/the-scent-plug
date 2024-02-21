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
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column align-items-start">
                        <h4 className="">{name}</h4>
                        <button className="mt-3" onClick={(e) => { e.stopPropagation(); addToCart(product)}}>Add to Cart</button>
                        <p>{quantity + " left"}</p>
                    </div>
                    <div className=" d-flex flex-column align-items-end mt-4">
                        <p>{"R" + price}</p>
                        <p>{rating}</p>
                    </div>
                </div>
            </div>
        
        </Link>
    </React.Fragment>
  )
}

export default Product