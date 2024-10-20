import React from 'react';
import Sidenav from "./components/Sidenav";
import Navbar from "./components/Navbar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import "../App.css";
import GeoChart from "../charts/GeoChart";
import PieChart from "../charts/PieChart";
import HbarChart from "../charts/HbarChart";

export default function Analytics() {
  return (
    <div className='bgcolor'>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
          
            {/* Grid for the 4 Visitors Cards */}
            <Grid  xs={12} md={5}>
              
              
              <Grid container spacing={1} >
                {/* Visitors Card 1 */}
                <Grid  xs={12} md={5}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5">Visitors</Typography>
                      <Typography variant="h6">22000</Typography>
                      <Typography variant="body2">Since last week</Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Visitors Card 2 */}
                <Grid xs={12} md={5}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5">Visitors</Typography>
                      <Typography variant="h6">32000</Typography>
                      <Typography variant="body2">Since last week</Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Visitors Card 3 */}
                <Grid  xs={12} md={5}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5">Visitors</Typography>
                      <Typography variant="h6">32000</Typography>
                      <Typography variant="body2">Since last week</Typography>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Visitors Card 4 */}
                <Grid  xs={12} md={5}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5">Visitors</Typography>
                      <Typography variant="h6">32000</Typography>
                      <Typography variant="body2">Since last week</Typography>
                    </CardContent>
                  </Card>
                 </Grid>
                 </Grid>
                 
            

            {/* Bar Chart */}
            
            <Grid xs={12} md={8} >
            <Grid container spacing={6} >
              <Card>
                <CardContent>
                  <Typography variant="h5">Population of Largest U.S. Cities</Typography>
                  <HbarChart />
                </CardContent>
              </Card>
            </Grid>
            </Grid>
            
            
            

            
            <Grid  xs={12}>
              <Grid container spacing={2}>
                {/* World Map */}
                <Grid Item xs={12} md={8}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5">World Map</Typography>
                      <GeoChart />
                    </CardContent>
                  </Card>
                </Grid>

                {/* Pie Chart */}
                <Grid 
                 xs={12} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5">My Daily Activities</Typography>
                      <PieChart />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};
