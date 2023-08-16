import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import LeftTitleBar from "../../components/leftbar";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { RemoveRedEye } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const List = styled("div")(({ theme }) => ({
  border: "1px solid #fff",
  borderRadius: 18,
  padding: "15px",
  fontSize: 25,
  fontWeight: "bolder",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "75px",
  width: "200px",
  color: "#fff",
  boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
  background: "linear-gradient(to top, #222, #222)",
  [theme.breakpoints.down("md")]: {
    height: "60px",
    width: "200px",
    padding: "10px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "60px",
    width: "200px",
    padding: "10px",
  },
}));

const Heading = styled("div")(({ theme }) => ({
  fontFamily: "Helvetica",
  textAlign: "left",
  fontWeight: 500,
  letterSpacing: 2,
  lineHeight: "120%",
  textTransform: "capitalize",
  fontSize: 28,
  marginBottom: "15px",
  backgroundImage: "linear-gradient(90deg, #fff 0%, #fff 100%)",
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  [theme.breakpoints.down("md")]: {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: 25,
  },
}));

const Wrap = styled("div")(({ theme }) => ({
  marginTop: 50,
  [theme.breakpoints.down("md")]: {
    marginTop: 50,
    marginLeft: 25,
    marginRight: 25,
  },
  [theme.breakpoints.up("md")]: {
    marginTop: 50,
    marginLeft: 25,
    marginRight: 25,
  },
}));

const PortfolioItem = styled("div")(({ theme }) => ({
  height: 500,
  width: "65%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  borderRadius: "15px",
  marginTop: "20px",
  border: "1px solid #fff",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    width: "500px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    width: "100%",
  },
}));

const BannerLeft = styled("div")(({ theme }) => ({
  height: 500,
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRight: "1px solid #fff",
  [theme.breakpoints.down("lg")]: {
    borderRight: "none",
    borderBottom: "1px solid #fff",
    height: "50%",
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    borderRight: "none",
    borderBottom: "1px solid #fff",
    height: 300,
    width: "100%",
  },
}));

const BannerRight = styled("div")(({ theme }) => ({
  height: 500,
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("md")]: {
    width: "75%",
  },
}));

const IMG = styled("img")(({ theme }) => ({
  height: "100%",
  width: "100%",
  borderTopLeftRadius: 15,
  borderBottomLeftRadius: 15,
  objectFit: "cover",
  [theme.breakpoints.down("lg")]: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 15,
    objectFit: "cover",
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 15,
    width: "100%",
  },
}));

const CONTENT = [
  {
    heading: "Prometheus",
    image: "/assets/Port1.png",
    link: "https://prometheusalts.com/",
  },
  {
    heading: "GooseFX",
    image: "/assets/Port2.png",
    link: "https://www.goosefx.io/",
  },
  {
    heading: "Rubix",
    image: "/assets/Port3.png",
    link: "https://rubix.io/",
  },
  {
    heading: "Lean",
    image: "/assets/Port4.png",
    link: "https://www.withlean.com/",
  },
  {
    heading: "Founderpath",
    image: "/assets/Port5.png",
    link: "https://founderpath.com/",
  },
];

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank");
  if (newWindow) newWindow.opener = null;
};

export default function Features() {
  const [selected, setSelected] = useState(0);

  return (
    <div id="company">
      <Grid container>
        <Grid item md={5} xs={10}>
          <LeftTitleBar title={"PORTFOLIO"} content={"SOME OF MY WORK"} />
        </Grid>
      </Grid>
      <Wrap>
        <Grid item xs={12} md={12}>
          <Grid
            container
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container xs={12} md={8} display={"flex"} justifyContent={"center"}>
              <Grid
                container
                xs={12}
                md={12}
                sm={9}
                flexDirection={"row"}
                justifyContent="space-around"
                alignItems="center"
                style={{ marginBottom: 30,}}
              >
                <style>
                  {`.selected {
                                            background: linear-gradient(90deg, #fff 0%, #fff  100%);
                                            border: 2px solid black;
                                            border-radius: 20px;

                                        }`}
                </style>
                <Grid container xs={2}>
                  <Button
                    onClick={() => setSelected(0)}
                    style={{ background: "transparent" }}
                    disableRipple
                  >
                    <Grid
                      container
                      className={selected === 0 ? "selected" : ""}
                    >
                      <List>1</List>
                    </Grid>
                  </Button>
                </Grid>
                <Grid container xs={2}>
                  <Button
                    onClick={() => setSelected(1)}
                    style={{ background: "transparent" }}
                    disableRipple
                  >
                    <Grid
                      container
                      className={selected === 1 ? "selected" : ""}
                    >
                      <List>2</List>
                    </Grid>
                  </Button>
                </Grid>
                <Grid container xs={2}>
                  <Button
                    onClick={() => setSelected(2)}
                    style={{ background: "transparent" }}
                    disableRipple
                  >
                    <Grid
                      container
                      className={selected === 2 ? "selected" : ""}
                    >
                      <List>3</List>
                    </Grid>
                  </Button>
                </Grid>
                <Grid container xs={2}>
                  <Button
                    onClick={() => setSelected(3)}
                    style={{ background: "transparent" }}
                    disableRipple
                  >
                    <Grid
                      container
                      className={selected === 3 ? "selected" : ""}
                    >
                      <List>4</List>
                    </Grid>
                  </Button>
                </Grid>

                <Grid container xs={2}>
                  <Button
                    onClick={() => setSelected(4)}
                    style={{ background: "transparent" }}
                    disableRipple
                  >
                    <Grid
                      container
                      className={selected === 4 ? "selected" : ""}
                    >
                      <List>5</List>
                    </Grid>
                  </Button>
                </Grid>

                <Grid container xs={2}>
                  <Button
                    onClick={() => setSelected(4)}
                    style={{ background: "transparent" }}
                    disableRipple
                  >
                    <Grid
                      container
                      className={selected === 4 ? "selected" : ""}
                    >
                      <List>6</List>
                    </Grid>
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Heading>{CONTENT[selected].heading}</Heading>
            <PortfolioItem>
              <BannerLeft>
                <IMG src={CONTENT[selected].image} alt="One" />
              </BannerLeft>
              <BannerRight>
                <Button
                  variant="outlined"
                  disableRipple
                  style={{
                    borderRadius: "15px",
                    border: "1px solid #fff",
                    height: 60,
                    width: 225,
                    justifyContent: "left",
                  }}
                  onClick={() => openInNewTab(CONTENT[selected].link)}
                >
                  <RemoveRedEye fontSize="medium" style={{ color: "#fff" }} />
                  <Typography
                    style={{
                      textAlign: "justify",
                      color: "#fff",
                      fontFamily: "Roboto",
                      textTransform: "capitalize",
                      fontWeight: 300,
                      letterSpacing: 1,
                      lineHeight: 1.5,
                      fontSize: 18,
                      marginLeft: 20,
                    }}
                  >
                    View Project
                  </Typography>
                </Button>
              </BannerRight>
            </PortfolioItem>
          </Grid>
        </Grid>
      </Wrap>
    </div>
  );
}
