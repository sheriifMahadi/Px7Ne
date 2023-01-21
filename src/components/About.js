import { Typography, CssBaseline, Container} from "@mui/material"
import useStyles from "../styles/styles"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode = 'black',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'cyan',
  }));

const About = () => {
  const classes = useStyles()
    const skills = ['HTML & CSS', 'JavaScript', 'Python', 'SQL', 'GraphQL']
    const frameworks = ['Nodejs', 'React' 'Django & DRF', 'Flask']

    return (
      <div id="about">
        < CssBaseline/>
        <div className={classes.about}>
          <Container>
            <Typography variant="h4" align='center' color='cyan' >
              About Me
              <hr className={classes.hr}/>
            </Typography>
            <Typography align='center' paddingBottom={5}>
                Hi, I'm Mahadi. I am a detail-oriented and passionate software engineer 
                specialising in web development. I have experience building both the 
                backend and frontend side of applications, delivering high-performance, 
                efficient, and elegant full-stack applications. I spend my free time reading, 
                watching movies and playing games.
            </Typography>
            </Container>
            <Container>
              <Typography variant="h5" align='center' color='grey' >
                Skills & Technologies
                  <hr className={classes.hr}/>
              </Typography>
              <Typography variant="" align='left'>
              </Typography>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                {skills.map(skill => 
                  <Grid key={skill} item xs={4} md={4}>
                      <Item>
                          {skill}
                        </Item>
                  </Grid>
                    )}

                  {frameworks.map(framework => 
                      <Grid key={framework} item xs={4} md={4}>
                          <Item>
                              {framework}
                          </Item>
                      </Grid>
                    )}
                </Grid>
              </Box>
            </Container>
        </div>
      </div>
  )
}

export default About
