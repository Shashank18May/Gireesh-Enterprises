import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p>
        We offer a range of services to cater to your needs. Browse our skilled
        and unskilled worker services below.
      </p>

      <div className="services-grid">
        <div className="service-group">
          <h2>Skilled Workers</h2>
          <ul>
            <li>
              <i className="fas fa-hammer"></i>
              <h3>Carpenters</h3>
              <p>Expert carpenters for all your woodworking needs.</p>
            </li>
            <li>
              <i className="fas fa-trowel"></i>
              <h3>Masons</h3>
              <p>Experienced and efficient masons for all your construction needs.</p>
            </li>
            <li>
            <i class="fa-solid fa-screwdriver-wrench"></i>
              <h3>Shutters and Barbenders</h3>
              <p>Professional workers for shuttering and barbending works.</p>
            </li>
            <li>
            <i class="fa-solid fa-hammer"></i>
                <h3>Tile Fixing</h3>
                <p>Exquiste tile fixers and workers for you needs.</p>
            </li>
            <li>
            <i class="fa-solid fa-hammer"></i>
                <h3>
                    Granite Workers
                </h3>
                <p>Professional workers for your granite works</p>
            </li>
            <li>
              <i className="fas fa-paint-brush"></i>
              <h3>Painters</h3>
              <p>Professional painters for all your painting needs.</p>
            </li>
            {/* Add more skilled worker services here */}
          </ul>
        </div>

        <div className="service-group">
          <h2>Unskilled Workers</h2>
          <ul>
          <li>
            <i className="fa-solid fa-helmet-safety"></i>
            <h3>Labourers</h3>
            <p>Trustworthy labourers for all your hardships.</p>
            </li>
            <li>
              <i className="fas fa-broom"></i>
              <h3>Janitorial Services</h3>
              <p>Reliable janitorial services for all your cleaning needs.</p>
            </li>
            <li>
              <i className="fas fa-box"></i>
              <h3>Movers</h3>
              <p>Trustworthy movers for all your relocation needs.</p>
            </li>
            <li>
              <i className="fas fa-seedling"></i>
              <h3>Lawn Care</h3>
              <p>Professional lawn care services for all your outdoor needs.</p>
            </li>
            {/* Add more unskilled worker services here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;
