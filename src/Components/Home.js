import React from 'react';
import MainBanner from './MainBanner';
import image from '../assets/images/perfumes/perfume.jpg';
import image1 from '../assets/images/perfumes/perfume1.jpg';
import image2 from '../assets/images/perfumes/perfume2.jpg';
import image3 from '../assets/images/perfumes/perfume3.jpg';
import image4 from '../assets/images/perfumes/perfume4.jpg';
import image5 from '../assets/images/perfumes/perfume5.jpg';
import image6 from '../assets/images/perfumes/perfume6.jpg';
import image7 from '../assets/images/perfumes/perfume7.jpg';
import image8 from '../assets/images/perfumes/perfume8.jpg';
import Catalog from './Catalog';


const Home = () => {
  return (
    <>
        <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-content">

              {/* <!-- ***** Banner Start ***** --> */}
              <MainBanner />
              {/* <!-- ***** Banner End ***** --> */}

              {/* <!-- ***** Most Popular Start ***** --> */}
              <Catalog />
              {/* <!-- ***** Most Popular End ***** --> */}

              {/* <!-- ***** Gaming Library Start ***** --> */}
              {/* <div className="gaming-library">
                <div className="col-lg-12">
                  <div className="heading-section">
                    <h4><em>Your Gaming</em> Library</h4>
                  </div>
                  <div className="item">
                    <ul>
                      <li><img src="./assets/images/game-01.jpg" alt="" className="templatemo-item" /></li>
                      <li><h4>Dota 2</h4><span>Sandbox</span></li>
                      <li><h4>Date Added</h4><span>24/08/2036</span></li>
                      <li><h4>Hours Played</h4><span>634 H 22 Mins</span></li>
                      <li><h4>Currently</h4><span>Downloaded</span></li>
                      <li><div className="main-border-button border-no-active"><a href="#">Donwloaded</a></div></li>
                    </ul>
                  </div>
                  <div className="item">
                    <ul>
                      <li><img src="./assets/images/game-02.jpg" alt="" className="templatemo-item" /></li>
                      <li><h4>Fortnite</h4><span>Sandbox</span></li>
                      <li><h4>Date Added</h4><span>22/06/2036</span></li>
                      <li><h4>Hours Played</h4><span>740 H 52 Mins</span></li>
                      <li><h4>Currently</h4><span>Downloaded</span></li>
                      <li><div className="main-border-button"><a href="#">Donwload</a></div></li>
                    </ul>
                  </div>
                  <div className="item last-item">
                    <ul>
                      <li><img src="./assets/images/game-03.jpg" alt="" className="templatemo-item" /></li>
                      <li><h4>CS-GO</h4><span>Sandbox</span></li>
                      <li><h4>Date Added</h4><span>21/04/2036</span></li>
                      <li><h4>Hours Played</h4><span>892 H 14 Mins</span></li>
                      <li><h4>Currently</h4><span>Downloaded</span></li>
                      <li><div className="main-border-button border-no-active"><a href="#">Donwloaded</a></div></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="main-button">
                    <a href="profile.html">View Your Library</a>
                  </div>
                </div>
              </div> */}
              {/* <!-- ***** Gaming Library End ***** --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home