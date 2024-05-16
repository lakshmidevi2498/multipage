import React from 'react';

const Himage = () => {
    const imagedata = [
        { src: "./assets/images/himg1.jpg", h5: "Birthday Hampers" },
        { src: "./assets/images/himg2.jpg", h5: "Anniversary Hampers" }
    ];

    return (
        <div className="container-fluid bg-light" style={{ color: 'FAF3F2' }}>
            <h3 className="text-center mt-4" style={{ color: 'orange' }}>BEST SELLER</h3>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                {imagedata.map((item, index) => (
                    <div className="col text-center mb-3" key={index}>
                        <div className="">
                            <img src={item.src} className="card-img-top p-4" alt="..." style={{ maxWidth: '100%', height: 'auto' }} />
                            <div className="card-body d-flex justify-content-around">
                                <h5 className="card-title text-center">{item.h5}</h5>
                                <button className="btn btn-primary">View All&nbsp;&rarr;</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Himage;

                  