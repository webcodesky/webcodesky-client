import React from 'react';
import ServiceCard from './serviceCard/ServiceCard';

const Service = () => {
    return (
        <div className="container">
            <div className="title-contaner items-center">
                <h2>Our <span className="text-[#FF6600]">Popular</span> Services</h2>
                <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            <div className="service-card-container d-md-flex flex-row ">
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
            </div>
        </div>
    );
};

export default Service;