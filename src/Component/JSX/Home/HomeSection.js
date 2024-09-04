import React from 'react';
import './HomeSection.css';

const HomeSection = () => {
  const requests = [
    {
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      price: "$260/m",
      date: "Aug 22, 2024 10:30 AM",
      name: "Kurt Russell"
    },
    // Add more requests as needed
  ];

  return (
    <div className="requests-container">
      <div className="column">
        <h2>Latest Offer and Property</h2>
        {requests.map((request, index) => (
          <div key={index} className="request-card">
            <h3>{request.title}</h3>
            <p>{request.price}</p>
            <p>{request.date}</p>
            <p>{request.name}</p>
            <button className="request-button">Request</button>
            <button className="filter-button">Filter Property</button>
          </div>
        ))}
      </div>
      <div className="column">
        <h2>View All</h2>
        {requests.map((request, index) => (
          <div key={index} className="request-card">
            <h3>{request.title}</h3>
            <p>{request.price}</p>
            <p>{request.date}</p>
            <p>{request.name}</p>
            <button className="request-button">Request</button>
            <button className="filter-button">Filter Property</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
