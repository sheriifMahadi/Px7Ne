import { Typography, CssBaseline, Container} from "@mui/material"
import useStyles from "../styles/styles"

const Contact = () => {
  const classes = useStyles()
  const sm = [
    { id: 1,
      social: 'fa-brands fa-linkedin-in',
      link: 'https://www.linkedin.com/in/mahadi-sheriff'
    },
    { 
      id: 2,
      social: 'fa-brands fa-twitter',
      link: 'https://www.twitter.com/TheOltaEgo'
    },
    {
      id: 3,
      social: 'fa-brands fa-github',
      link: 'https://github.com/sheriifMahadi'
    },
    {
      id: 4,
      social: 'fa-brands fa-instagram',
      link: 'https://github.com/sheriifMahadi'
    }
  ]

  
    return (
      <div id="contact">
        <CssBaseline/>
        <div className={classes.about} style={{paddingTop: '100px', minHeight: '40vh'}}>
          <Container>
          <Typography variant="h4" align='center' color='cyan' >
              Contact Me
              <hr style={{marginBottom: '20px', width: '50px', opacity: '0.5'}}/>
            </Typography>
            <Typography align='center' paddingBottom={5}>
                I am currently open to new opportunities. Feel free 
                to reach out via social media or send me a mail. 
            </Typography>

            <div className={classes.listDivStyling}>
            <Container>
              <ul>
              {sm.map(sm_ => 
                  <li  key={sm_.id} className={classes.listStyling}>
                  <a href={sm_.link} className={classes.linkStyling}>
                    <i className={sm_.social}></i>
                  </a>
                  </li>              
              )}
              </ul>
              </Container> 
            </div>  
            </Container>
        </div>
      </div>
  )
}

export default Contact

