import React, { useContext, useEffect, useState } from 'react'
import perfume from "../assets/images/perfumes/perfume.jpg"
import { useParams } from 'react-router-dom'
import { StateContext } from './State/context'
import Catalog from './Catalog'

const ProductPage = () => {
    const { products, addToCart } = useContext(StateContext);
    
    const params = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {

    })
    const addToCartHandler = (product) => {
        addToCart(product);
    }
        // setProduct(state.products.filter((product) => product.productId === params.id))
    

  return (
    <React.Fragment>
        <div class="row">
            <div class="col-lg-12">
                <div class="page-content">

                {/* <!-- ***** Featured Start ***** --> */}
                {
                    products
                    .filter((product) => product.id === params.id)
                    .map((product) => {
                        
                        return (
                            <div class="row bg-dark" style={{borderRadius: 23}}>
                    <div class="col-lg-12">
                    <div class="feature-banner header-text " >
                        <div class="row ">
                            <div class="col-lg-3 ">
                                <img src={product.image} alt=""  />
                            </div>
                            <div class="col-lg-6 p-4 bg-dark d-flex align-items-start flex-column " style={{borderRadius: 23}}>
                                <h1 className="text-light ">{product.name}</h1>
                                <h5>By: who ever</h5>
                                <p className="text-light text-start ">{product.description}</p>
                                <p>{product.rating}</p>
                                <p>reveiws</p>
                                <p>{product.quantity}</p>
                            </div>
                            <div class="col-lg-3 pt-4 blue-background product-radius">
                                <h1>Add to cart</h1>
                                <h3 className="text-light">{"Price:" + product.price}</h3>
                                <button onClick={ () => addToCartHandler(product)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                        )
                    })
                }
                
                {/* <!-- ***** Featured End ***** --> */}

                {/* <!-- ***** Details Start ***** --> */}
                <div class="game-details">
                    <div class="row">
                    <div class="col-lg-12">
                        <h2>You might also like</h2>
                    </div>
                    <div class="col-lg-12">
                        
                    </div>
                    </div>
                </div>
                {/* <!-- ***** Details End ***** --> */}

                {/* <!-- ***** Other Start ***** --> */}
                {/* <div class="other-games">
                    <div class="row">
                    <div class="col-lg-12">
                        <div class="heading-section">
                        <h4><em>Other Related</em> Games</h4>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="item">
                        <img src="assets/images/game-01.jpg" alt="" class="templatemo-item">
                        <h4>Dota 2</h4><span>Sandbox</span>
                        <ul>
                            <li><i class="fa fa-star"></i> 4.8</li>
                            <li><i class="fa fa-download"></i> 2.3M</li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="item">
                        <img src="assets/images/game-02.jpg" alt="" class="templatemo-item">
                        <h4>Dota 2</h4><span>Sandbox</span>
                        <ul>
                            <li><i class="fa fa-star"></i> 4.8</li>
                            <li><i class="fa fa-download"></i> 2.3M</li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="item">
                        <img src="assets/images/game-03.jpg" alt="" class="templatemo-item">
                        <h4>Dota 2</h4><span>Sandbox</span>
                        <ul>
                            <li><i class="fa fa-star"></i> 4.8</li>
                            <li><i class="fa fa-download"></i> 2.3M</li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="item">
                        <img src="assets/images/game-02.jpg" alt="" class="templatemo-item">
                        <h4>Dota 2</h4><span>Sandbox</span>
                        <ul>
                            <li><i class="fa fa-star"></i> 4.8</li>
                            <li><i class="fa fa-download"></i> 2.3M</li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="item">
                        <img src="assets/images/game-03.jpg" alt="" class="templatemo-item">
                        <h4>Dota 2</h4><span>Sandbox</span>
                        <ul>
                            <li><i class="fa fa-star"></i> 4.8</li>
                            <li><i class="fa fa-download"></i> 2.3M</li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="item">
                        <img src="assets/images/game-01.jpg" alt="" class="templatemo-item">
                        <h4>Dota 2</h4><span>Sandbox</span>
                        <ul>
                            <li><i class="fa fa-star"></i> 4.8</li>
                            <li><i class="fa fa-download"></i> 2.3M</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div> */}
                

                </div>
            </div>
            </div>
    </React.Fragment>
  )
}

export default ProductPage