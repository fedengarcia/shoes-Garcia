import {fade} from '@material-ui/core/styles';
// fade(theme.palette.common.white, 0.15)
  export const navBarStyle = (theme) => ({
    navBarIcon:{
      borderRadius: '1em',
      '&:hover':{
        backgroundColor: '#D5A17F',
        // color:'#D5A17F'
      }
    },
    grow: {
      flexGrow: 1,
      marginBottom: '2em',
    },
    appBarStyle:{
      background: 'linear-gradient(to right,#5499C7,#2980B9)'
    },
    menuButton: {
      marginLeft: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '20%',
        marginRight: '1em',
      },
    },
  
    sectionMobile: {
      display: 'flex',
      marginLeft: '-2em',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    logo:{
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
      '&:hover':{
        backgroundColor: 'transparent',
      }
    },

  });