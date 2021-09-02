import "./App.css";
import Appbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Workshops from "./components/Workshops";
import Speakers from "./components/Speakers";
import Agenda from "./components/Agenda";
import Partners from "./components/Partners";
import Tickets from "./components/Tickets";
import Contacts from "./components/Contacts";
import { withStyles } from "@material-ui/styles";
import styles from "./style/index.js";
function App({ classes }) {
  return (
    <>
      <div className={classes.body}>
        <Appbar />
        <Jumbotron />
      </div>
      <div className="container">
        <About />
        <Workshops />
      </div>
      <Speakers />
      <Agenda />
      <Partners />
      <Tickets />
      <Contacts />
    </>
  );
}

export default withStyles(styles)(App);
