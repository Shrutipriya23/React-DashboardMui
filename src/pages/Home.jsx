import React from 'react';
import Sidenav from "./components/Sidenav";
import Navbar from"./components/Navbar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
//import "../App.css";
import "../Dash.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import BarChart from '../charts/BarChart';
import Accordion from './components/Accordian';
import CountUp from 'react-countup';





const Home = () => {
  return (
    
    <div className='bgcolor'>
    <Navbar/>
    <Box height={70}/>

    <Box sx={{ display: 'flex'}}>
      <Sidenav/>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Stack spacing={2} direction="row" alignItems={'center'}>
      <Grid container spacing={2}>
      

      <Grid size={8}>
        {/* <item>xs={8}</item>  */}
        <Stack spacing={2} direction="row" >
        <Card sx={{ maxWidth: 100 + "%" , height: 150 + "%"}} className='gradient' >
        <CardContent>
        <div  className="iconstyle"><CreditCardIcon/></div>
        <Typography gutterBottom variant="h5" component="div" sx={{color: "#000000"}}>
        $<CountUp delay={0.2} end={500.00} duration={0.3} />
        </Typography>
        <Typography gutterBottom variant="body" component="div" sx={{color: "#ccd1d1"}}>
          Total Earnings
        </Typography>
        </CardContent>
        </Card>
        
    
      <Card sx={{ maxWidth: 100 + "%" , height: 150 +"%"}} className='gradientlight'>
      <CardContent>
      <div  className="iconstyle"><ShoppingBagIcon/></div>
        <Typography gutterBottom variant="h5" component="div" sx={{color: "#000000"}}>   {/*color: "#ffffff"*/}
        $<CountUp delay={0.2} end={900.00} duration={0.3} />
        </Typography>
        <Typography gutterBottom variant="body" component="div" sx={{color: "#ccd1d1"}}>
          Total Orders
        </Typography>
      </CardContent>
      </Card>
    </Stack>
      </Grid>
      </Grid>
      
{/*...........................................*/}
        {/*<Grid item xs={4}>*/}
        <Grid size={4}>
        {/* <item>xs={4}</item> */}
        <Stack spacing={2} >

        <Card sx={{ maxWidth: 345 }}className='gradientlight'>
          <CardContent>
          <Stack spacing={2} direction="row">
       <div className="iconstyleblack"> <StorefrontIcon/></div>
        <div className="paddingall">
        <span className="pricetitle">$203k</span>
        <br/>
        <span className="pricesubtitle">Total Income</span>
        </div>
        </Stack>
          </CardContent>
        </Card>
       
        <Card sx={{ maxWidth: 345 }}className='gradientlight'>
          <CardContent>
          <Stack spacing={2} direction="row">
       <div className="iconstyleblack"> <StorefrontIcon/></div>
        <div className="paddingall">
        <span className="pricetitle">$203k</span>
        <br/>
        <span className="pricesubtitle">Total Income</span>
        </div>
        </Stack>
          </CardContent>
        </Card>
       </Stack>
        </Grid>
        </Stack>
        {/* </Grid> */}
{/*.............................*/}
      <Box height={20}/>
      <Grid container spacing={2} direction="row">

        <Grid item xs={8}>
        <Card sx={{ height: 60 + "vh"}}>
        <CardContent><BarChart/></CardContent>
        </Card>
        </Grid>

        <Grid item xs={4}>
          <Card sx={{ height: 60 + "vh" }}>
            <CardContent>
            {/* <div className="iconstyleblack"> <StorefrontIcon/></div> */}
            <div className="paddingall">
            <span className="pricetitle">Popular Products</span>
            </div>
            <Accordion/>
            </CardContent>
          </Card>
        </Grid>

        </Grid>
        
        </Box>
        
        </Box>
      </div>
    
    
  )
}

export default Home;

    
    
