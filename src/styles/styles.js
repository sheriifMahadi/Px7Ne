import { makeStyles } from '@material-ui/styles'

const PRIMARY = 'black !important'
const SECONDARY = '#0d0d0d !important'
const TEXT_PRIMARY = '#c9c7c7 !important'

const useStyles = makeStyles((theme) => ({
    nav: {
        backgroundColor: `${PRIMARY}`,
        textDecoration: 'none',

    },
    navStyling: {
        color: `grey`,
        textDecoration: 'none !important',
        '&:hover': {
            color: 'cyan',
            fontSize: '30px',

        }
    },
    home: {
        backgroundColor: `${PRIMARY}`,    
        color: `${TEXT_PRIMARY}`,
        paddingTop: '4em',
        minHeight: '100vh',
    },
    about: {
            backgroundColor: `${SECONDARY}`,    
            color: `${TEXT_PRIMARY}`,
            paddingTop: '1em',
            minHeight: '80vh',
    }, 
    listStyling: {
            display: 'inline',
            padding: '0em 1em',
            textDecoration: 'none !important',
            '&:hover': {
                fontSize: '30px',
            }
    },
    linkStyling: {
        color: `#c9c7c7`, 
        textDecoration: 'none !important',
        fontSize: '25px',
        '&:hover': {
            color: 'cyan',
        }
    },
    listDivStyling: {
        textAlign: 'center',
        paddingBottom: '1em',
    },
    cardGrid: {
        padding: "20px 0",
    }, 
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: 'black !important',
        color: `${TEXT_PRIMARY}`,
    },
    cardMedia: {
        paddingTop: '56.25',        
    },
    cardContent: {
        flexGrow: 1
    },
    cardAction: {
        color: 'cyan !important'
    }

  
}))

export default useStyles
