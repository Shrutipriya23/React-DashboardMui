import React from 'react';
import { Card, CardContent, TextField, Typography, Select, MenuItem, InputLabel, FormControl, Button, Box, Container } from '@mui/material';

const Profile = () => {
  return (
    <Container sx={{ padding: 3 }}>
      
      {/* Personal Information Section */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6">Personal Information</Typography>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
        {/* Card for Personal Info */}
        <Card sx={{ flex: '1 1 48%' }}>
          <CardContent>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              
              {/* Name Field */}
              <TextField
                fullWidth
                label="Name"
                defaultValue="P Kumar"
                variant="outlined"
                sx={{ flex: '1 1 48%' }}
              />

              {/* Location Field */}
              <TextField
                fullWidth
                label="Location"
                defaultValue="India"
                variant="outlined"
                sx={{ flex: '1 1 48%' }}
              />

              {/* Bio Field */}
              <TextField
                fullWidth
                label="Bio"
                multiline
                rows={3}
                variant="outlined"
                sx={{ flex: '1 1 100%' }}
              />

              {/* User Type Field */}
              <FormControl fullWidth variant="outlined" sx={{ flex: '1 1 48%' }}>
                <InputLabel>User Type</InputLabel>
                <Select defaultValue="Super Admin" label="User Type">
                  <MenuItem value="Super Admin">Super Admin</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="User">User</MenuItem>
                </Select>
              </FormControl>

            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Contact Information Section */}
      <Box sx={{ mb: 3 }}>
        <Card sx={{ flex: '1 1 48%' }}>
          <CardContent>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6">Contact Information</Typography>
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              
              {/* Contact Phone Field */}
              <TextField
                fullWidth
                label="Contact Phone"
                defaultValue="919999999999"
                variant="outlined"
                sx={{ flex: '1 1 100%' }}
              />

              {/* Email Field */}
              <TextField
                fullWidth
                label="Email"
                defaultValue="code@codingmstr.com"
                variant="outlined"
                sx={{ flex: '1 1 100%' }}
              />

              {/* Profile URL Field */}
              <TextField
                fullWidth
                label="Profile URL"
                defaultValue="https://codingmstr.com"
                variant="outlined"
                sx={{ flex: '1 1 100%' }}
              />

              {/* Address Field */}
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                sx={{ flex: '1 1 100%' }}
              />

            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Save Button */}
      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="primary">Save Changes</Button>
      </Box>
    </Container>
  );
};

export default Profile;
