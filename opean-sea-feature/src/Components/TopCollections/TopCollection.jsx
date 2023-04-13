import React from 'react'
import "./card.css"
export const TopCollection = () => {
    return (
       
                <div className="col-lg-4 col-md-12">
                    <div className="collection">
                        <span className="inline-block my-2">1</span>
                        <div className="col container-info mx-2">
                            <div className="container-avtar">
                                <img
                                    src="https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=3ef46b07bb19f68322d027cb8f9ac99f"
                                    style={{borderRadius:" 50%", width:" 60px"}}
                                    className="card-img-avtar"
                                    alt="avtar-url"
                                />
                            </div>
                            <div className="mx-2">
                                <h6 className="card-title my-0" style={{fontSize: "15px"}}>
                                    Card title
                                </h6>
                                <p className="text text-muted my-0" style={{fontSize: "14px"}}>
                                    Floor price:
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-bootstrap-fill"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"
                                        />
                                        <path
                                            d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"
                                        />
                                    </svg>
                                    <span className="icon"> 2</span>
                                </p>
                            </div>
                        </div>
                        <div className="market-value" style={{fontSize: "14px"}}>
                            <p className="text m-0">+363.19%</p>
                            <p className="text m-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-bootstrap-fill"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"
                                    />
                                    <path
                                        d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"
                                    />
                                </svg>
                                436.32
                            </p>
                        </div>
                    </div>
                </div>
           
    )
}
