import React, { useContext } from 'react'
import Product from './Product'
import { StateContext } from './State/context'

const Catalog = () => {

    const {products, scrollToTop} = useContext(StateContext);



  return (
    <React.Fragment>
        <div className="most-popular">
                
                <div className="row">
                  
                  <div className="col-lg-12">
                    <div className="heading-section">
                      <h4><em>Most Popular</em> Right Now</h4>
                    </div>

                    <div className="row">
                    
                    {
                        products.map((product) => {
                           return <Product product={product} onclick={scrollToTop}/>
                        })
                    }
                      

                      
                      <div className="col-lg-12">
                        <div className="main-button">
                          <a href="browse.html">Discover Popular</a>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
    </React.Fragment>
  )
}

export default Catalog