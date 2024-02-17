import React from 'react'

const MainBanner = () => {
  return (
    <React.Fragment>
        <div className="main-banner">
            <div className="row">
                <div className="col-lg-7">
                <div className="header-text">
                    <h6>Welcome To <strong>Scent</strong>Plug</h6>
                    <h4><em>Browse</em> Our Exquisite Catalog Here</h4>
                    <div className="main-button">
                    <a href="browse.html">Browse Now</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default MainBanner