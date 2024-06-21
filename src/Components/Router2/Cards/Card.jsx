import React from 'react'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
    
    <div className='container'>
        <div className='row'>
            
            <div className='col-md-4 mb-4'>
                <div className="card">
                    <img src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> Card title </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Add to Cart</Link>
                    </div>
                </div>
            </div>

            <div className='col-md-4 mb-4'>
                <div className="card">
                    <img src="https://images.pexels.com/photos/627677/pexels-photo-627677.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> Card title </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Add to Cart</Link>
                    </div>
                </div>
            </div>

            <div className='col-md-4 mb-4'>
                <div className="card">
                    <img src="https://images.pexels.com/photos/12964219/pexels-photo-12964219.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> Card title </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Add to Cart</Link>
                    </div>
                </div>
            </div>

            <div className='col-md-4 mb-4'>
                <div className="card">
                    <img src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> Card title </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Add to Cart</Link>
                    </div>
                </div>
            </div>

            <div className='col-md-4 mb-4'>
                <div className="card">
                    <img src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> Card title </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Add to Cart</Link>
                    </div>
                </div>
            </div>

            <div className='col-md-4 mb-4'>
                <div className="card">
                    <img src="https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> Card title </h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="#" className="btn btn-primary">Add to Cart</Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Card