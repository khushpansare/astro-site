import React from "react";

function Map() {
  return (
    <>
      <div className="map-content">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.1063377674104!2d73.8929543734015!3d20.08784121943321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddc398f2c9f8d5%3A0xaa5f643fdea7c224!2sNutrihub%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1712830570308!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
}

export default Map;
