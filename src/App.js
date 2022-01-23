import './App.css';
import { Grid, Paper, Box, Chip } from '@mui/material';
import { IoIosArrowForward } from 'react-icons/io';
import { optionsData } from './data';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';

const Options = ({ name, icon }) => {
  return (
    <Box className="options">
      <Box className="optionsIcon">{icon}{name}</Box>
      <Box className="optionsArrow"><IoIosArrowForward /></Box>
    </Box>
  );
}

function App() {
  return (
    <Box className="App">
      <Grid container id="container" spacing={4}>
        <Grid item md={3} sm={5} xs={12}>
          <Paper id="image"><img src={img2} alt="create" /></Paper>
          <Paper className="leftCards">
            {optionsData.map((option, index) => {
              if (index >= 0 && index <= 2) {
                return <Options name={option.name} icon={option.icon} />
              }
              return <></>;
            })}
          </Paper>
          <Paper className="leftCards">{optionsData.map((option, index) => {
            if (index >= 3 && index <= 5) {
              return <Options name={option.name} icon={option.icon} />
            }
            return <></>;
          })}</Paper>
          <Paper className="leftCards">{optionsData.map((option, index) => {
            if (index >= 6 && index <= 9) {
              return <Options name={option.name} icon={option.icon} />
            }
            return <></>;
          })}</Paper>
        </Grid>
        <Grid item md={9} sm={7} xs={12}>
          <Paper className="welcome">Welcome<br /> <b>Pablo Nicolus</b><br /><Chip label="NY, USA" /></Paper>
          <Grid className="charts" container spacing={4}>
            <Grid item md={6} xs={12}>
              <Paper className="iVariations">Income Variations<br /><img src={img3} alt="Income Variations" /></Paper>
            </Grid>
            <Grid item md={6} xs={12}>
              <Paper className="nIncome">Net Income<br /><img src={img4} alt="Net Income" /></Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
