// src/components/ContactUs.js
import React, { useState } from "react";
import { Container, Grid, TextField, Typography, Box, Button, Paper } from "@mui/material";
import { useFormik } from "formik";
import * as XLSX from "xlsx";

// Contact Form Component
const ContactUs = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (values) => {
    // Add the submitted data to the state
    setSubmittedData([...submittedData, values]);

    // Create an Excel sheet using SheetJS
    const worksheet = XLSX.utils.json_to_sheet([...submittedData, values]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contact Us");
    
    // Create the Excel file and trigger the download
    XLSX.writeFile(workbook, "contact_form_data.xlsx");
  };

  // Using Formik to handle form state and submission
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    },
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm();
    }
  });

  return (
    <section>
      <Container maxWidth="lg">
        {/* Title Section */}
        <Box textAlign="center" my={5}>
          <Typography variant="h6" component="p" sx={{ color: "#f05a22" }}>
            <span>Contact</span>
          </Typography>
          <Typography variant="h4" fontWeight="bold">
            Contact Us
          </Typography>
        </Box>

        {/* Contact Form & Google Map Section */}
        <Grid container spacing={4} alignItems="center">
          {/* Google Map */}
          <Grid item xs={12} md={6}>
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1h2_T7Z1sRNCewLZvbC32fE2Q9tDWGoo&ehbc=2E312F"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            />
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={5}
              sx={{
                padding: "30px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0px 10px 25px -10px rgba(0,0,0,0.45)",
                borderRadius: "10px",
              }}
            >
              <form onSubmit={formik.handleSubmit}>
                <Box textAlign="center" mb={3}>
                  <Typography variant="h6" sx={{ color: "#f05a22" }}>
                    Get In Touch
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    Send Your Message
                  </Typography>
                </Box>

                <Grid container spacing={2}>
                  {/* Name Field */}
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="name"
                      name="name"
                      label="Your Name *"
                      variant="outlined"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      sx={{ transition: "0.3s ease", "&:hover": { boxShadow: "0px 4px 8px rgba(0,0,0,0.1)" } }}
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
                      value={formik.values.email}
                      onChange={formik.handleChange}
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
                      value={formik.values.phone}
                      onChange={formik.handleChange}
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
                      value={formik.values.subject}
                      onChange={formik.handleChange}
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
                      value={formik.values.message}
                      onChange={formik.handleChange}
                    />
                  </Grid>

                  {/* Submit Button */}
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{
                        backgroundColor: "#f05a22",
                        color: "#fff",
                        padding: "10px 20px",
                        "&:hover": {
                          backgroundColor: "#e14d1f",
                        },
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
      </Container>
    </section>
  );
};

export default ContactUs;
