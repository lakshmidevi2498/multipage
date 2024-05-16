

import React from 'react';

const Card = () => {
    const imagedata = [
        { src: "./assets/images/imgc1.jpg", h5: "Custom Floral Design", span: "$239.00", h6: "$199.00" },
        { src: "./assets/images/imgc2.jpg", h5: "Periwinkle Flower", span: "$439.00", h6: "$259.00" },
        { src: "./assets/images/imgc3.jpg", h5: "Tulip Custom Flower", span: "$299.00", h6: "$129.00" },
        { src: "./assets/images/imgcs7.jpg", h5: "Periwinkle Flower Bouquet", span: "$299.00", h6: "$129.00" }
    ];

    return (
        <>
            <h2 className="text-center mt-4 mb-4">Blossom with the Best</h2>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {imagedata.map((item, index) => (
                        <div className="col text-center mb-3" key={index}>
                            <div className="position-relative card-container">
                                <img src={item.src} className="card-img-top p-4" alt="..." style={{ maxWidth: '100%', height: 'auto' }} />
                                <div className="top-right ">
                                    <i className="fa-solid fa-cart-shopping p-2 bg-light rounded-5"></i> 
                               </div>
                               <div className="top-right right"> 
                                    <i class="fa-regular fa-heart p-2 bg-light rounded-5"></i>
                               </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">{item.h5}</h5>
                                <div className="d-flex justify-content-evenly my-2">
                                    <div>
                                        <h6>
                                            <span style={{ textDecoration: "line-through" }}>{item.span}</span>&nbsp;&nbsp;&nbsp;{item.h6}
                                        </h6>
                                    </div>
                                    <div>
                                        <button className="btn btn-outline-success text-info">Shop&nbsp;&rarr;</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Card;
    
