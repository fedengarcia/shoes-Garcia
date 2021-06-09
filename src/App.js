import NavBar from './components/NavBar/NavBar';
import imgBackground from './img/crumpled-white-paperboard.jpg';
import { makeStyles } from '@material-ui/core/styles';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const useStyles = makeStyles((theme) => ({
  container:{
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    backgroundImage: `url(${imgBackground})`,
    backgroundPosition: "center",
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    height: "auto",
    // display:"flex",
    // justifyContent:"center",
    // alignItems: "center",
    // flexDirection: "column",
    // width:"auto",
  },

}));



function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
        <NavBar />
        <ItemListContainer/>
        
      
    </div>
  );
}

export default App;


// El import va con {} cuando usamos export const
// con export default, usamos directamente el nombre
