import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import LeftTitleBar from "../../components/leftbar";
import { useState } from "react";
import { styled } from "@mui/material/styles";

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
    padding: "0px",
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
  height: 150,
  width: "65%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  borderRadius: "15px",
  marginTop: "20px",
  border: "1px solid #fff",
  [theme.breakpoints.down("lg")]: {
    height: "100%",
    width: "75%",
  },
  [theme.breakpoints.down("sm")]: {
    height: "100%",
    width: "100%",
  },
}));

const BannerLeft = styled("div")(({ theme }) => ({
  height: 150,
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRight: "1px solid #222",
  [theme.breakpoints.down("lg")]: {
    height: 150,
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    height: 150,
    width: "50%",
  },
}));

const BannerRight = styled("div")(({ theme }) => ({
  height: 150,
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  fontSize: 22,
  fontWeight: 700,
  color: "#fff",
  [theme.breakpoints.up("md")]: {},
  [theme.breakpoints.down("md")]: {},
}));

const IMG = styled("img")(({ theme }) => ({
  height: "100%",
  width: "100%",
  borderTopLeftRadius: 15,
  borderBottomLeftRadius: 15,
  objectFit: "cover",
  [theme.breakpoints.down("lg")]: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 0,
    objectFit: "cover",
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 0,
    width: "100%",
  },
}));

const CONTENT = [
  {
    heading: "Frontend",
    image: "/assets/1.png",
    link: "https://www.linkedin.com/in/j2daniels/",
    options: ["React", "Flutter", "JS : TS", "Dart", "React Native"],
  },
  {
    heading: "Backend",
    image: "/assets/2.png",
    link: "https://www.linkedin.com/in/j2daniels/",
    options: ["Node.js", "Python", "DBs", "GraphQL", "Containers"],
  },
  {
    heading: "Platform",
    image: "/assets/3.png",
    link: "https://www.linkedin.com/in/j2daniels/",
    options: ["AWS", "GCP", "Azure", "Firebase", "Amplify"],
  },
  {
    heading: "Data Analytics",
    image: "/assets/4.png",
    link: "https://www.linkedin.com/in/j2daniels/",
    options: ["SQL", "Pandas", "Tableau", "Spark", "Databricks"],
  },
  {
    heading: "Machine Learning",
    image: "/assets/5.png",
    link: "https://www.linkedin.com/in/j2daniels/",
    options: ["Scikit", "Keras", "PyTorch", "TenserFlow", "Sagemaker"],
  },
];

export default function Creators() {
  const [selected, setSelected] = useState(0);
  return (
    <div id="leadership">
      <Grid container>
        <Grid item md={5} xs={10}>
          <LeftTitleBar title={"SKILLS"} content={"TECHNICAL KNOWHOW"} />
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
            <Grid
              container
              xs={12}
              md={8}
              display={"flex"}
              justifyContent={"center"}
            >
              <Grid
                container
                xs={12}
                md={12}
                sm={9}
                flexDirection={"row"}
                justifyContent="space-around"
                alignItems="center"
                style={{ marginBottom: 30 }}
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
                      <List>I</List>
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
                      <List>II</List>
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
                      <List>III</List>
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
                      <List>IV</List>
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
                      <List>V</List>
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
                      <List>VI</List>
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
              <BannerRight>{CONTENT[selected].options[0]}</BannerRight>
            </PortfolioItem>
            <PortfolioItem>
              <BannerLeft>
                <IMG src={CONTENT[selected].image} alt="One" />
              </BannerLeft>
              <BannerRight>{CONTENT[selected].options[1]}</BannerRight>
            </PortfolioItem>
            <PortfolioItem>
              <BannerLeft>
                <IMG src={CONTENT[selected].image} alt="One" />
              </BannerLeft>
              <BannerRight>{CONTENT[selected].options[2]}</BannerRight>
            </PortfolioItem>
            <PortfolioItem>
              <BannerLeft>
                <IMG src={CONTENT[selected].image} alt="One" />
              </BannerLeft>
              <BannerRight>{CONTENT[selected].options[3]}</BannerRight>
            </PortfolioItem>
            <PortfolioItem>
              <BannerLeft>
                <IMG src={CONTENT[selected].image} alt="One" />
              </BannerLeft>
              <BannerRight>{CONTENT[selected].options[4]}</BannerRight>
            </PortfolioItem>
          </Grid>
        </Grid>
      </Wrap>
    </div>
  );
}
