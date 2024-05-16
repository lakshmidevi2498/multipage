import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faTruck, faWallet, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

const Delivery = () => {
    const data = [
        { h5: "Big Discounts", p: "Get amazing discounts on our products. Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.", icon: faTag },
        { h5: "Free Shipping", p: "Enjoy free shipping on all orders. Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.", icon: faTruck },
        { h5: "Secure Payments", p: "Make secure payments with us. Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.", icon: faWallet },
        { h5: "Order Tracking", p: "Track your order in real-time. Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo.", icon: faMapLocationDot }
    ];

    return (
        <div className="container-fluid" >
            <h1 className="text-center mt-5">Why Choose Us?</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-5 d-flex">
                {data.map((item, index) => (
                    <div className="col" key={index}>
                        <div className="border-start border-warning p-3 mb-2 text-start">
                            <FontAwesomeIcon icon={item.icon} className="fs-2" style={{ color: '#FF7518' }} />
                            <h5>{item.h5}</h5>
                            <p>{item.p}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Delivery;


   
