import React from 'react';
import { Grid, TextField, Typography, Box, Button, Paper } from "@mui/material";

const Form = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div
      className="contact-page-container"
      style={{
        padding: "50px",
        background: "linear-gradient(135deg, #1a2a6c, #1f15e0, #1a2a6c)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Grid container spacing={4}>
        {/* Info Box on the Left Side */}
        <Grid item xs={12} md={6}>
  <Paper
    elevation={5}
    sx={{
      padding: "20px", // Add padding to space out the content from the edges
      backgroundColor: "#f9f9f9",
      borderRadius: "15px",
      boxShadow: "0px 20px 30px -10px rgba(0,0,0,0.15)",
      height: "95%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", // Vertically center the content
      alignItems: "center", // Horizontally center the content
    }}
  >
    <Typography variant="h6" sx={{ color: "#f05a22", textAlign: "center", mb: 3 }}>
      Contact Information
    </Typography>
    <Grid container spacing={3}>
      {/* Info Card for Address */}
      <Grid item xs={12}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6" fontWeight="bold" textAlign="center">📍Address</Typography>
          <Typography textAlign="center">Jaipur, Rajasthan 302020</Typography>
        </Box>
      </Grid>
      {/* Info Card for Email */}
      <Grid item xs={12}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6" fontWeight="bold" textAlign="center">✉️Email</Typography>
          <Typography textAlign="center">deevapayon@gmail.com</Typography>
          <Typography textAlign="center">deevapayon.com</Typography>
        </Box>
      </Grid>
      {/* Info Card for Phone */}
      <Grid item xs={12}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography variant="h6" fontWeight="bold" textAlign="center">📞Phone</Typography>
          <Typography textAlign="center">+91 9649095457</Typography>
          <Typography textAlign="center">+91 9649095457</Typography>
        </Box>
      </Grid>
    </Grid>
  </Paper>
</Grid>


        {/* Contact Form on the Right Side */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={5}
            sx={{
              padding: "40px",
              backgroundColor: "#ffffff",
              borderRadius: "15px",
              boxShadow: "0px 20px 30px -10px rgba(0,0,0,0.15)",
            }}
          >
            <form onSubmit={handleSubmit}>
              <Box textAlign="center" mb={3}>
                <Typography variant="h6" sx={{ color: "#f05a22" }}>
                  Get In Touch
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  Send Your Message
                </Typography>
              </Box>
              <Grid container spacing={3}>
                {/* Name Field */}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    name="name"
                    label="Your Name *"
                    variant="outlined"
                    sx={{
                      borderRadius: "5px",
                      backgroundColor: "#f4f4f4",
                      boxShadow: "0px 3px 6px rgba(0,0,0,0.1)"
                    }}
                  />
                </Grid>
                {/* Email Field */}
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="Email *"
                    variant="outlined"
                    sx={{
                      borderRadius: "5px",
                      backgroundColor: "#f4f4f4",
                      boxShadow: "0px 3px 6px rgba(0,0,0,0.1)"
                    }}
                  />
                </Grid>
                {/* Phone Field */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    id="phone"
                    name="phone"
                    label="Phone"
                    variant="outlined"
                    sx={{
                      borderRadius: "5px",
                      backgroundColor: "#f4f4f4",
                      boxShadow: "0px 3px 6px rgba(0,0,0,0.1)"
                    }}
                  />
                </Grid>
                {/* Subject Field */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="subject"
                    name="subject"
                    label="Subject"
                    variant="outlined"
                    sx={{
                      borderRadius: "5px",
                      backgroundColor: "#f4f4f4",
                      boxShadow: "0px 3px 6px rgba(0,0,0,0.1)"
                    }}
                  />
                </Grid>
                {/* Message Field */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    id="message"
                    name="message"
                    label="Write Message ..."
                    variant="outlined"
                    sx={{
                      borderRadius: "5px",
                      backgroundColor: "#f4f4f4",
                      boxShadow: "0px 3px 6px rgba(0,0,0,0.1)"
                    }}
                  />
                </Grid>
                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      background: "linear-gradient(to right, #f05a22, #e14d1f)",
                      color: "#fff",
                      padding: "12px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      borderRadius: "50px",
                      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        background: "linear-gradient(to right, #e14d1f, #f05a22)"
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Form;
