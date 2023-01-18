import { Typography, CssBaseline, Container} from "@mui/material"
import useStyles from "../styles/styles"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import db from '../data/db'

const Projects = ({ windowsize }) => {
  const classes = useStyles()

  const currMargin = windowsize.innerWidth > 900  ? '': 'auto'
  const currXs = windowsize.innerWidth < 420 ? 10 : 8

    return (
      <div id="projects">
        <CssBaseline/>
        <div className={classes.about}>
          <Container>
          <Typography variant="h4" align='center' color='cyan' >
              Projects
              <hr style={{marginBottom: '20px', width: '50px', opacity: '0.5'}}/>
            </Typography>   
          </Container>
          <div>
            <Container className="classes.cardGrid" maxwidth="md">
                <Grid container spacing={4}>
                  {db.data.map(data =>
                       <Grid key={data.id} item xs={currXs} md={4} style={{margin: currMargin}}>
                       <Card className={classes.card}>
                           <CardMedia
                                height="200"
                                component="img"
                               className={classes.cardMedia}
                               image={data.image}
                               title={data.alt}
                           />
                           <CardContent className={classes.cardContent}>
                               <Typography gutterBottom variant="h5" component="div">
                                   {data.title}
                               </Typography>
                               <Typography variant="body2">
                                {data.description}
                               </Typography>
                           </CardContent>
                            <CardActions>
                            <a href={data.github} className={classes.linkStyling}>
                              <Button size="small" className={classes.cardAction}>Github</Button>
                            </a>
                            <a href={data.github} className={classes.linkStyling}>
                              <Button size="small" className={classes.cardAction}>Visit website</Button>
                            </a>
                           </CardActions>
                       </Card>
                   </Grid>
                    )}
                </Grid>
            </Container>
          </div>

        </div>
      </div>
  )
}

export default Projects