import React from 'react'

const Slider = () => {
  return (

    <div>
      
  {/* Slider  */}

    <div id="carouselExampleCaptions" className=" carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" ></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://wallpapers.com/images/high/the-weeknd-mixtapes-ds4tgr5zqbeyds1c.webp" height={600} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block ">
            <h5>First The Weekend</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://wallpapers.com/images/high/the-weeknd-final-lullaby-7zwuvaqyqcwm7idf.webp" height={600} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block ">
            <h5> Second The Weekend </h5>
            <p> Some representative placeholder content for the second slide. </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://wallpapers.com/images/high/the-weeknd-performing-iphone-w5gcmbgk28qsbefn.webp" height={600} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block ">
            <h5>Third The Weekend</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous </span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  )
}

export default Slider