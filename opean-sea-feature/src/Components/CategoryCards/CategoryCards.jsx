import React from 'react'
import categoryCardData from "./CategoryCardData"
export const CategoryCards = () => {
    return (
        <div className='container category'> 
            <h3 className='title my-5'>Browse by category</h3>
            <div className='row'>
                {categoryCardData.map(data => {
                    return (
                        <div className='col-lg-4 col-md-6 col-sm-6'>
                            <div className="category-card ">

                                <img src={data.image} className="card-img" alt="..." />
                                <a href="/" className="card-link">
                                    <p className="card-title">{data.title}</p>
                                </a>
                            </div>
                        </div>
                     )})}
            </div>
        </div>


    )
}
