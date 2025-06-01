import React from 'react'
import bird from '../images/bird.jpg';
import peacock from '../images/peacock.jpg';
import landscape from '../images/img_5terre.jpg';
import sky from '../images/sky.jpg';
import flower from '../images/flower.jpg';
import sunflower from '../images/sunflower.webp';
import deer from '../images/deer.jpg';
import pineapple from '../images/pineapple.jpg';
export default function Main() {
  return (
    <>
    <div className="d-flex ps-3 pe-3 cardcontainer flex-wrap justify-content-around">
        <div className="card">
            <a href={peacock}><img src={peacock} className="card-img-top" alt="Peacock" /></a>
            <div className="card-body">
              <h5 className="card-title text-center">Peacock</h5>
            </div>
          </div>
          <div className="card">
            <a href={sky}><img src={sky} className="card-img-top" alt="Sky" /></a>
            <div className="card-body">
              <h5 className="card-title text-center">Sky</h5>
            </div>
          </div>
          <div className="card">
            <a href={sunflower}><img src={sunflower} className="card-img-top" alt="Sunflower" /></a>
            <div className="card-body">
              <h5 className="card-title text-center">Sunflower</h5>
            </div>
          </div>
          <div className="card">
            <a href={landscape}><img src={landscape} className="card-img-top" alt="LandScape" /></a>
            <div className="card-body">
              <h5 className="card-title text-center">LandScape</h5>
            </div>
          </div>
          <div className="card mg">
            <a href={pineapple}><img src={pineapple} className="card-img-top" alt="Sunflower" /></a>
            <div className="card-body">
              <h5 className="card-title text-center">Pineapple</h5>
            </div>
          </div>
          <div className="card mg">
            <a href={flower}><img src={flower} className="card-img-top" alt="Flower" /></a>
            <div className="card-body">
              <h5 className="card-title text-center">Flower</h5>
            </div>
          </div>
          <div className="card mg">
            <a href={bird}><img src={bird} className="card-img-top" alt="bird" /></a>
            <div className="card-body">
              <h5 className="card-title text-center">Bird</h5>
            </div>
          </div>
          <div className="card mg">
            <a href={deer}><img src={deer} className="card-img-top" alt="Deer" /></a>
            <div className="card-body">
              <h5 className="card-title text-center">Deer</h5>
            </div>
          </div>
    </div>
  </>
  )
}
