import { Typography, CssBaseline, Container} from "@mui/material"
import useStyles from "../styles/styles"
import { Toolbar } from "@mui/material"
import Button from '@mui/material/Button';
import { HashLink } from 'react-router-hash-link';

const Home = () => {
  const classes = useStyles()

    return (
      <div id="home">
        <CssBaseline/>
        <Toolbar className={classes.padding}/>
        <div className={classes.home}>
          <Container>
            <Typography variant="h5" align='left' color="cyan">
              Hi,
            </Typography>
            <Typography variant="h2" align='left' color="cyan">
              I'm Mahadi.
            </Typography>
            <Typography variant="h2" align='left' color='grey' gutterBottom>
              I build cool things for the web.
            </Typography>
            <HashLink smooth to = {`/#projects`} className={classes.navStyling}>

              <Button sx={{ color: 'white', backgroundColor: 'cyan'}}>
                  Past projects&rarr;
                </Button>
            </HashLink>



          </Container>
        </div>
      </div>
  )
}

export default Home

