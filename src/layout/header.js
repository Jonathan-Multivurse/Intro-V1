import { Grid } from "@mui/material";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Menu } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import "animate.css";

const Wrap = styled(Grid)(({ theme }) => ({
  alignSelf: "center",
  paddingLeft: 50,
  paddingRight: 75,
  [theme.breakpoints.down("md")]: {
    paddingLeft: 0,
    paddingRight: 20,
  },
}));

const navLinkStyles = {
  fontFamily: "helvetica",
  fontSize: 16,
  fontWeight: 300,
  paddingLeft: 20,
  paddingRight: 20,
  color: "#222",
};
const NavTitle = styled("div")(({ theme }) => ({
  backgroundImage: "linear-gradient(90deg, #fff 0%, #fff 100%)",
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontFamily: "Helvetica",
  fontSize: 16,
  fontWeight: 300,
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const namecontainer = {
  height: 50,
  width: 200,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(to right, #fff, #fff)",
  color: "#222",
  fontFamily: "helvetica",
  boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
  fontSize: 18,
  marginLeft: 30,
  fontWeight: 500,
  borderRadius: 50,
};

function Header() {
  return (
    <Wrap>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <Grid container fluid>
            <div style={namecontainer} variant="rounded">
              Jonathan
            </div>
          </Grid>
        </Navbar.Brand>
        <Navbar.Toggle
          style={{
            boxShadow: "none",
            backgroundColor: "transparent",
            border: "none",
          }}
          aria-controls="basic-navbar-nav"
        >
          <Menu style={{ fontSize: "32px", color: "#fff" }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Grid container style={{ marginTop: 25 }} />
          <Nav>
            <NavLink style={navLinkStyles} href="#company">
              <NavTitle>Portfolio</NavTitle>
            </NavLink>
            <NavLink style={navLinkStyles} href="#mission">
              <NavTitle>Expertise</NavTitle>
            </NavLink>
            <NavLink style={navLinkStyles} href="#leadership">
              <NavTitle>Skills</NavTitle>
            </NavLink>
            <NavLink style={navLinkStyles} href="#contact">
              <NavTitle>Contact</NavTitle>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Wrap>
  );
}

export default Header;
