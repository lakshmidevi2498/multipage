import React from 'react';

const Cards2 = () => {
    const imagedata = [
        { src: "./assets/images/imgcs1.jpg", h6: "10 Red Roses Bouquet", h5: "$199.00", i: "4.9" },
        { src: "./assets/images/imgcs2.jpg", h6: "Pink Opulence", h5: "$450.00", i: "4.4" },
        { src: "./assets/images/imgcs3.jpg", h6: "Paradise Mixed Rose Bouquet", h5: "$399.00", i: "4.9" },
        { src: "./assets/images/imgcs4.jpg", h6: "Eternity White Roses Bouquet", h5: "$599.00", i: "4.2" },
        { src: "./assets/images/imgcs5.jpg", h6: "Crimson Floral Embrace", h5: "$359.00", i: "4.9" },
        { src: "./assets/images/imgcs6.jpg", h6: "Enchanting Pink Symphony", h5: "$999.00", i: "4.5" },
        { src: "./assets/images/imgcs7.jpg", h6: "Sunshine Gerbera Celebration", h5: "$799.00", i: "4.9" },
        { src: "./assets/images/imgcs8.jpg", h6: "Crimson Floral Embrace", h5: "$999.00", i: "4.8" }
    ];

    return (
        <>
            <h2 className="text-center mt-4 mb-4">SHOP NOW</h2>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {imagedata.map((item, index) => (
                        <div className="col text-center mb-3 " key={index}>
                            <div className="card ">
                                <div className="hover" >
                                    <figure>
                                        <img src={item.src} className="card-img-top" alt="..." style={{ maxWidth: '100%', height: 'auto' }} />
                                    </figure>
                                </div>
                                <div className="card-body text-start text-secondary">
                                    <h6 className="card-title">{item.h6}</h6>
                                  
                                    <div className="d-flex justify-content-around">
                                        <div>  <h5>{item.h5}</h5></div>
                                        <div>
                                            <span className="badge bg-success text-white p-2">
                                                <i className="fa-solid fa-star"></i> {item.i}
                                            </span>
                                        </div>
                                       
                                    </div>
                                    <div className='text-center'>
                                            <button className="btn btn-outline-success text-info ">Order&nbsp;&rarr;</button>
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

export default Cards2;

{/* <div class="col  text-center mb-3">
                <div class="card rounded-4">
                 <div className="hover">
                   <figure><img src="./assets/images/imgcs2.jpg" class="card-img-top " alt="..." max-width='100%' height='auto'/></figure>
                  </div>
                  <div class="card-body text-start text-secondary">
                    <h6 class="card-title ">Pink opulence </h6>
                    <h6>$450.00</h6>
                    <div  class="d-flex justify-content-around">
                      <div><span class="badge text-bg-success p-2 px-2">	<i class="fa-solid fa-star "></i>4.6</span></div>
                      <div><button class="btn btn-plight border-success text-info ">Order&nbsp;&rarr;</button></div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="col  text-center mb-3">
                <div class="card rounded-4">
                 <div className="hover">
                   <figure><img src="./assets/images/imgcs3.jpg" class="card-img-top " alt="..." max-width='100%' height='auto'/></figure>
                  </div>
                  <div class="card-body text-start text-secondary">
                    <h6 class="card-title ">Paradise mixed rose Bouquet </h6>
                    <h6>$399.00</h6>
                    <div  class="d-flex justify-content-around">
                      <div><span class="badge text-bg-success p-2 px-2">	<i class="fa-solid fa-star "></i>4.9</span></div>
                      <div><button class="btn btn-plight border-success text-info ">Order&nbsp;&rarr;</button></div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="col  text-center mb-3">
                <div class="card rounded-4">
                 <div className="hover">
                   <figure><img src="./assets/images/imgcs4.jpg" class="card-img-top " alt="..." max-width='100%' height='auto'/></figure>
                  </div>
                  <div class="card-body text-start text-secondary">
                    <h6 class="card-title ">Eternity white Roses Bouquet $599.00</h6>
                    <h6></h6>
                    <div  class="d-flex justify-content-around">
                      <div><span class="badge text-bg-success p-2 px-2">	<i class="fa-solid fa-star "></i>4.5</span></div>
                      <div><button class="btn btn-plight border-success text-info ">Order&nbsp;&rarr;</button></div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="col  text-center mb-3">
                <div class="card rounded-4">
                  <div className="hover">
                   <figure><img src="./assets/images/imgcs5.jpg" class="card-img-top " alt="..." max-width='100%' height='auto'/></figure>
                  </div>
                  <div class="card-body text-start text-secondary">
                    <h6 class="card-title ">Crimson floral embrace $359.00</h6>
                    <h6></h6>
                    <div  class="d-flex justify-content-around">
                      <div><span class="badge text-bg-success p-2 px-2">	<i class="fa-solid fa-star "></i>4.2</span></div>
                      <div><button class="btn btn-plight border-success text-info ">Order&nbsp;&rarr;</button></div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="col  text-center mb-3">
                <div class="card rounded-4">
                 <div className="hover">
                   <figure><img src="./assets/images/imgcs6.jpg" class="card-img-top " alt="..." max-width='100%' height='auto'/></figure>
                  </div>
                  <div class="card-body text-start text-secondary">
                    <h6 class="card-title ">Enchanting pinksymphony $999.00</h6>
                    <h6></h6>
                    <div  class="d-flex justify-content-around">
                      <div><span class="badge text-bg-success p-2 px-2">	<i class="fa-solid fa-star "></i>4.9</span></div>
                      <div><button class="btn btn-plight border-success text-info ">Order&nbsp;&rarr;</button></div>
                    </div>
                  </div>
                </div>
            </div>
            <div class="col  text-center mb-3">
                <div class="card rounded-4">
                <div className="hover">
                   <figure><img src="./assets/images/imgcs7.jpg" class="card-img-top " alt="..." max-width='100%' height='auto'/></figure>
                  </div>
                  <div class="card-body  text-secondary">
                    <h6 class="card-title text-start">Capativating red rose symphony $299.00</h6>
                    <h6 className="text-start"></h6>
                    <div  class="d-flex justify-content-around">
                      <div><span class="badge text-bg-success p-2 px-2">	<i class="fa-solid fa-star "></i>4.7</span></div>
                      <div><button class="btn btn-plight border-success text-info ">Order&nbsp;&rarr;</button></div>
                    </div>
                    
                  </div>
                </div>
            </div>
            <div class="col  text-center mb-3">
                <div class="card rounded-4">
                <div className="hover">
                   <figure><img src="./assets/images/imgcs8.jpg" class="card-img-top " alt="..." max-width='100%' height='auto'/></figure>
                  </div>
                  <div class="card-body text-start text-secondary">
                    <h6 class="card-title ">Sunshine gerbers forceledration $799.00</h6>
                    <h6>$799.00</h6>
                    <div  class="d-flex justify-content-around">
                      <div><span class="badge text-bg-success p-2 px-2">	<i class="fa-solid fa-star "></i>4.9</span></div>
                      <div><button class="btn btn-plight border-success text-info ">Order&nbsp;&rarr;</button></div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
     </div> */}