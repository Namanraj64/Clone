import React from 'react';
import { Grid } from "@mui/material";

const MapPage = () => {
  return (
    <Grid item xs={12} md={6} style={{ padding: '20px' }}> {/* Add padding to Grid item */}
      <div style={{
        position: "relative",
        width: "100%",
        paddingBottom: "56.25%",
        margin: '20px 0', // Add margin above and below the iframe
        borderRadius: "10px",
        overflow: "hidden", // Ensure the border radius applies correctly
        backgroundColor: "#f0f0f0", // Light gray background for contrast
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Add shadow for depth
      }}>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1h2_T7Z1sRNCewLZvbC32fE2Q9tDWGoo&ehbc=2E312F"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
            borderRadius: "10px"
          }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        />
      </div>
    </Grid>
  );
};

export default MapPage;
