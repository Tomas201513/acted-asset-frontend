import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, Divider } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import Box from '@mui/material/Box';
import InventoryIcon from '@mui/icons-material/Inventory';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import RouterIcon from '@mui/icons-material/Router';
import { useNavigate } from 'react-router-dom';

const LogDashboard = () => {
  const navigate = useNavigate();


  return (
  <>
<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: '15%', mr: '1%', mb: '5%',ml:'4%' }}>


<Card>
      <Button onClick={() => { navigate('/app/general') }}   sx={{
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }} >
            <CardActionArea>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}> 

          <FlightIcon />
          </Box>
          <Divider />

          <Typography variant="body2" color="text.secondary" sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
          Transport Management
          </Typography>
        </CardContent>
      </CardActionArea>
      </Button>
    </Card>

    <Card>
      <Button onClick={() => { navigate('/app/general') }}   sx={{
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }} >
            <CardActionArea>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}> 

          <InventoryIcon />
          </Box>
          <Divider />

          <Typography variant="body2" color="text.secondary" sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
          Stock Management
          </Typography>
        </CardContent>
      </CardActionArea>
      </Button>
    </Card>

    <Card>
      <Button onClick={() => { navigate('/app/general') }}   sx={{
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }} >
              
      <CardActionArea>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}> 

          <ShoppingCartIcon />
          </Box>
          <Divider />

          <Typography variant="body2" color="text.secondary" sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
          Procurement Management
          </Typography>
        </CardContent>
      </CardActionArea>
      </Button>
    </Card>
    <Card>
      <Button onClick={() => { navigate('/app/general') }}   sx={{
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }} >
            <CardActionArea>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}> 

          <LaptopChromebookIcon />
          </Box>
          <Divider />

          <Typography variant="body2" color="text.secondary" sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
          ITC Management
          </Typography>
        </CardContent>
      </CardActionArea>
      </Button>
    </Card>
    
    <Card>
      <Button onClick={() => { navigate('/app/general') }}   sx={{
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }} >
      
      <CardActionArea>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}> 

          <RouterIcon />
          </Box>
          <Divider />

          <Typography variant="body2" color="text.secondary" sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
          Asset Management
          </Typography>
        </CardContent>
      </CardActionArea>
      </Button>
    </Card>
    <Card>
      <Button onClick={() => { navigate('/app/general') }}   sx={{
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  }} >
      
      <CardActionArea>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}> 

          <DeliveryDiningIcon />
          </Box>
          <Divider />

          <Typography variant="body2" color="text.secondary" sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
          Delivery Management
          </Typography>
        </CardContent>
      </CardActionArea>
      </Button>
    </Card>
    </Box>
    
  </>
  )
}

export default LogDashboard



