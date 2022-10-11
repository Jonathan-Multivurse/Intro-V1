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
  color: "#333",
};
const NavTitle = styled("div")(({ theme }) => ({
  backgroundImage: "linear-gradient(90deg, #f6d5f7 0%, #fbe9d7 100%)",
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
  background: "linear-gradient(90deg, #5271FF 0%, #696eff 100%)",
  color: "#fbe9d7",
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
              <img
                src="/assets/newlogo.png"
                width="25%"
                height="100%"
                alt="logo"
              />
              &nbsp; Multivurse
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
          <Menu style={{ fontSize: "32px", color: "#f6d5f7" }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Grid container style={{ marginTop: 25 }} />
          <Nav>
            <NavLink style={navLinkStyles} href="#company">
              <NavTitle>Features</NavTitle>
            </NavLink>
            <NavLink style={navLinkStyles} href="#mission">
              <NavTitle>Community</NavTitle>
            </NavLink>
            <NavLink style={navLinkStyles} href="#leadership">
              <NavTitle>Creators</NavTitle>
            </NavLink>
            <NavLink style={navLinkStyles} href="#investors">
              <NavTitle>Pricing</NavTitle>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Wrap>
  );
}

export default Header;
