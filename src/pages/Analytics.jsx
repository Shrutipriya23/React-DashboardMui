import React from 'react';
import Sidenav from "./components/Sidenav";
import Navbar from "./components/Navbar";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';

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
          <Container>
            {/* Box for the Visitors Cards */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
              
              {/* Visitors Card 1 */}
              <Card sx={{ flex: '1 1 48%', minWidth: '200px' }}>
                <CardContent>
                  <Typography variant="h5">Visitors</Typography>
                  <Typography variant="h6">22000</Typography>
                  <Typography variant="body2">Since last week</Typography>
                </CardContent>
              </Card>

              {/* Visitors Card 2 */}
              <Card sx={{ flex: '1 1 48%', minWidth: '200px' }}>
                <CardContent>
                  <Typography variant="h5">Visitors</Typography>
                  <Typography variant="h6">32000</Typography>
                  <Typography variant="body2">Since last week</Typography>
                </CardContent>
              </Card>

              {/* Visitors Card 3 */}
              <Card sx={{ flex: '1 1 48%', minWidth: '200px' }}>
                <CardContent>
                  <Typography variant="h5">Visitors</Typography>
                  <Typography variant="h6">32000</Typography>
                  <Typography variant="body2">Since last week</Typography>
                </CardContent>
              </Card>

              {/* Visitors Card 4 */}
              <Card sx={{ flex: '1 1 48%', minWidth: '200px' }}>
                <CardContent>
                  <Typography variant="h5">Visitors</Typography>
                  <Typography variant="h6">32000</Typography>
                  <Typography variant="body2">Since last week</Typography>
                </CardContent>
              </Card>
            </Box>

            {/* Box for Bar Chart */}
            <Box sx={{ mb: 4 }}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Population of Largest U.S. Cities</Typography>
                  <HbarChart />
                </CardContent>
              </Card>
            </Box>

            {/* Box for World Map and Pie Chart */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {/* World Map */}
              <Card sx={{ flex: '2 1 60%', minWidth: '300px' }}>
                <CardContent>
                  <Typography variant="h5">World Map</Typography>
                  <GeoChart />
                </CardContent>
              </Card>

              {/* Pie Chart */}
              <Card sx={{ flex: '1 1 38%', minWidth: '200px' }}>
                <CardContent>
                  <Typography variant="h5">My Daily Activities</Typography>
                  <PieChart />
                </CardContent>
              </Card>
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
