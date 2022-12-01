import Grid from "@mui/material/Grid";
import RightTitleBar from "../../components/rightbar";
import Button from "@mui/material/Button";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { RemoveRedEye } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

const List2 = styled("div")(({ theme }) => ({
  border: "1px solid #222",
  borderRadius: 18,
  padding: "15px",
  fontSize: 25,
  fontWeight: "bolder",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "75px",
  width: "250px",
  boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
  background: "linear-gradient(to top, #fff, #fff)",
  [theme.breakpoints.down("md")]: {
    height: "75px",
    width: "200px",
    padding: "10px",
  },
  [theme.breakpoints.down("sm")]: {
    height: "75px",
    width: "150px",
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
  backgroundImage: "linear-gradient(90deg, #222 0%, #222 100%)",
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: 25,
  },
}));

const Sub = styled("div")(({ theme }) => ({
  fontFamily: "Helvetica",
  textAlign: "left",
  fontWeight: 700,
  letterSpacing: 1,
  lineHeight: "120%",
  textTransform: "capitalize",
  fontSize: 20,
  marginBottom: "15px",
  backgroundImage: "linear-gradient(90deg, #222 0%, #222 100%)",
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: 23,
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
  boxShadow: "0px 10px 15px 3px rgba(0,0,0,0.1)",
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
  borderRight: "1px solid #222",
  [theme.breakpoints.down("lg")]: {
    borderRight: "none",
    borderBottom: "1px solid #222",
    height: "50%",
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    borderRight: "none",
    borderBottom: "1px solid #222",
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
    heading: "Cross Platform Modern Stack Applications",
    sub: "Web, Mobile, & Beyond",
    image: "/assets/code.png",
    link: "https://www.linkedin.com/in/j2daniels/",
  },
  {
    heading: "Software Intelligence & Automation",
    sub: "Data & Machine Learning",
    image: "/assets/automation.png",
    link: "https://www.linkedin.com/in/j2daniels/",
  },
];

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank");
  if (newWindow) newWindow.opener = null;
};

export default function Community() {
  const [selected, setSelected] = useState(0);
  return (
    <Grid style={{ color: "#222" }} id="mission">
      <Grid container justifyContent={"flex-end"}>
        <Grid item xs={10} md={5}>
          <RightTitleBar title="EXPERTISE" content="MY SPECIALIZATION" />
        </Grid>
      </Grid>
      <Wrap>
        <Grid item xs={12} md={12} lg={12}>
          <Grid
            container
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid xs={12} md={8} display={"flex"} justifyContent={"center"}>
              <Grid
                container
                xs={12}
                md={12}
                sm={9}
                style={{
                  width: "800px",
                  marginBottom: 30,
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <style>
                  {`.selected {
                                            background: linear-gradient(90deg, #fff 0%, #fff  100%);
                                            border: 2px solid black;
                                            border-radius: 20px;

                                        }`}
                </style>
                <Grid xs={6}>
                  <Button
                    onClick={() => setSelected(0)}
                    style={{ background: "transparent" }}
                    disableRipple
                  >
                    <Grid className={selected === 0 ? "selected" : ""}>
                      <List2>A</List2>
                    </Grid>
                  </Button>
                </Grid>

                <Grid xs={6}>
                  <Button
                    onClick={() => setSelected(1)}
                    style={{ background: "transparent" }}
                    disableRipple
                  >
                    <Grid className={selected === 1 ? "selected" : ""}>
                      <List2>B</List2>
                    </Grid>
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Heading>{CONTENT[selected].heading}</Heading>
            <Sub>{CONTENT[selected].sub}</Sub>
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
                    border: "1px solid #222",
                    height: 60,
                    width: 225,
                    justifyContent: "left",
                  }}
                  onClick={() => openInNewTab(CONTENT[selected].link)}
                >
                  <RemoveRedEye fontSize="medium" style={{ color: "#222" }} />
                  <Typography
                    style={{
                      textAlign: "justify",
                      color: "#222",
                      fontFamily: "Roboto",
                      textTransform: "capitalize",
                      fontWeight: 300,
                      letterSpacing: 1,
                      lineHeight: 1.5,
                      fontSize: 18,
                      marginLeft: 20,
                    }}
                  >
                    Learn more
                  </Typography>
                </Button>
              </BannerRight>
            </PortfolioItem>
          </Grid>
        </Grid>
      </Wrap>
    </Grid>
  );
}
