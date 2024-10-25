import React from 'react';
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CountUp from 'react-countup';
import BarChart from '../charts/BarChart';
import Accordion from "./components/Accordian";





const Home = () => {
  return (
    <div className='bgcolor'>
      <Navbar />
      <Box height={70} />

      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} width="40%">
          <Stack spacing={2} direction="row" alignItems={'center'}>
            <Container>
              <Box display="flex" justifyContent="space-between" alignItems={'center'} >
                {/* Box Container for the first row */}
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {/* First Card */}
                  <Card sx={{ width: '250px', height: 150 }} className='gradient'>
                    <CardContent>
                      <div className="iconstyle"><CreditCardIcon /></div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000000" }}>
                        $<CountUp delay={0.2} end={500.00} duration={0.3} />
                      </Typography>
                      <Typography gutterBottom variant="body" component="div" sx={{ color: "#2C2D2D" }}>
                        Total Earnings
                      </Typography>
                    </CardContent>
                  </Card>

                  {/* Second Card */}
                  <Card sx={{ width: '250px', height: 150 }} className='gradientlight'>
                    <CardContent>
                      <div className="iconstyle"><ShoppingBagIcon /></div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: "#000000" }}>
                        $<CountUp delay={0.2} end={900.00} duration={0.3} />
                      </Typography>
                      <Typography gutterBottom variant="body" component="div" sx={{ color: "#2C2D2D" }}>
                        Total Orders
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>

                {/* Box Container for the second row */}
                <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                  <Stack spacing={2}>
                    <Card sx={{ width: 345 }} className='gradientlight' >
                      <CardContent>
                      <Stack spacing={2} direction="row" alignItems="center"> 
                      <Box className="iconstyleblack" sx={{ display: 'flex', alignItems: 'center' }}> 
                      <StorefrontIcon />
                      </Box>
                      <div className="paddingall">
                      <span className="pricetitle">$203k</span>
                      <br />
                     <span className="pricesubtitle">Total Income</span>
                      </div>
                      </Stack>
                      </CardContent>
                    </Card>

                    <Card sx={{ width: 345 }} className='gradientlight'>
                      <CardContent>
                      <Stack spacing={2} direction="row" alignItems="center"> 
                      <Box className="iconstyleblack" sx={{ display: 'flex', alignItems: 'center' }}> 
                      <StorefrontIcon />
                      </Box>
                      <div className="paddingall">
                      <span className="pricetitle">$203k</span>
                      <br />
                     <span className="pricesubtitle">Total Income</span>
                      </div>
                      </Stack>
                      </CardContent>
                    </Card>
                  </Stack>
                </Box>
              </Box>

              <Box height={20} />

              {/* Box for Chart and Accordion */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Box sx={{ flex: 2 }}>
                  <Card sx={{ height: '60vh' }}>
                    <CardContent>
                      <BarChart />
                    </CardContent>
                  </Card>
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Card sx={{ height: '60vh' }}>
                    <CardContent>
                      <div className="paddingall">
                        <span className="pricetitle">Popular Products</span>
                      </div>
                      <Accordion />
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            </Container>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default Home;