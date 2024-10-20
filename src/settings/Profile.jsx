
import React from 'react';
import { Grid, Card, CardContent, TextField, Typography, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';





const Profile = () => {
    return (
      <Grid container spacing={3} sx={{ padding: 3 }}>
        
        {/* Personal Information Section */}
        <Grid item xs={12}>
          <Typography variant="h6">Personal Information</Typography>
        </Grid>
  
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    defaultValue="P Kumar"
                    variant="outlined"
                  />
                </Grid>
  
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Location"
                    defaultValue="India"
                    variant="outlined"
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Bio"
                    multiline
                    rows={3}
                    variant="outlined"
                  />
                </Grid>
  
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel>User Type</InputLabel>
                    <Select defaultValue="Super Admin" label="User Type">
                      <MenuItem value="Super Admin">Super Admin</MenuItem>
                      <MenuItem value="Admin">Admin</MenuItem>
                      <MenuItem value="User">User</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
  
        {/* Contact Information Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6">Contact Information</Typography>
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Contact Phone"
                    defaultValue="919999999999"
                    variant="outlined"
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    defaultValue="code@codingmstr.com"
                    variant="outlined"
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Profile URL"
                    defaultValue="https://codingmstr.com"
                    variant="outlined"
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Save Button */}
        <Grid item xs={12}>
          <Button variant="contained" color="primary">Save Changes</Button>
        </Grid>
      </Grid>
    );
  };
  
  export default Profile;
  