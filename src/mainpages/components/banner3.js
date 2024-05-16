const Banner3 = () => {
    const images = [
        { src: "./assets/images/imgcss1.jpg", h6: "Flower Balloon Bouquet" },
        { src: "./assets/images/imgcs6.jpg", h6: "Luxury Flower" },
        { src: "./assets/images/imgg3.jpg", h6: "Flower to USA" }
    ];

    return (
        <>
            <div className="container p-5 mt-4" style={{ background: "#f5f1d3" }}>
                <h2 className="text-center">Floweraura's Special Flowers</h2>
                <p className="text-center">Explore Special Flowers</p>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {images.map((item, index) => (
                            <div className="col text-center mb-3" key={index}>
                                <div className="hover">
                                    <figure className="rounded-top-circle">
                                        <img src={item.src} className="img-top" alt="..." style={{ maxWidth: '100%', height: 'auto' }} />
                                    </figure>
                                </div>
                                <div className="text-center text-secondary">
                                    <h6>{item.h6}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner3;
