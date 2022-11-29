import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import "animate.css";

const HeroWrapp = styled(Grid)(({ theme }) => ({
  height: 700,
  marginTop: 50,
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  [theme.breakpoints.down("md")]: {
    height: 600,
    width: "100%",
    marginTop: 150,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  [theme.breakpoints.down("sm")]: {
    height: 600,
    width: "100%",
    marginTop: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
}));

const Description = styled(Grid)(({ theme }) => ({
  height: "100%",
  width: "40%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingLeft: 30,
  paddingRight: 30,
  [theme.breakpoints.down("md")]: {
    width: "75%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 0,
    paddingRight: 0,
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const Buttons = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "left",
  alignItems: "center",
  paddingLeft: 40,
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: 0,
  },
}));

const ArtWrap = styled(Grid)(({ theme }) => ({
  height: "100%",
  width: "40%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "70%",
    paddingTop: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
}));

const Art = styled(Grid)(({ theme }) => ({
  width: "75%",
  [theme.breakpoints.down("md")]: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    width: "50%",
    display: "flex",
    justifyContent: "start",
  },
}));

const MainButton = styled("button")(({ theme }) => ({
  borderRadius: theme.spacing(4),
  width: 200,
  padding: "14px",
  marginBottom: "20px",
  textTransform: "capitalize",
  fontWeight: "normal",
  background: "transparent",
  border: "1px solid #222",
  backgroundImage: "linear-gradient(90deg, #222 0%, #222 100%)",
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  "&:hover": {
    border: "1px solid #bbb",
  },
  [theme.breakpoints.up("xl")]: {
    width: "300px",
    marginRight: 250,
  },
  [theme.breakpoints.down("xl")]: {
    width: "200px",
    marginRight: 250,
  },
  [theme.breakpoints.down("lg")]: {
    width: "200px",
    marginRight: 250,
  },
  [theme.breakpoints.down("md")]: {
    width: "200px",
    marginRight: 0,
  },
  [theme.breakpoints.down("sm")]: {
    width: "200px",
    marginRight: 0,
  },
}));

const MainHeading = styled("div")(({ theme }) => ({
  fontFamily: "Roboto",
  backgroundImage: "linear-gradient(90deg, #222 0%, #222 100%)",
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  width: "100%",
  textAlign: "left",
  paddingLeft: 40,
  fontWeight: 700,
  lineHeight: 1.5,
  fontSize: 30,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingLeft: 0,
    fontSize: 30,
    fontWeight: 500,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingLeft: 0,
    fontSize: 28,
    fontWeight: 500,
  },
}));

const SubHeading = styled("div")(({ theme }) => ({
  fontFamily: "Roboto",
  backgroundColor: "transparent",
  color: "#222",
  width: 450,
  textAlign: "center",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  fontWeight: 500,
  paddingLeft: 40,
  lineHeight: 1.5,
  fontSize: 20,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    fontSize: 22,
    display: "flex",
    justifyContent: "center",
    paddingLeft: 0,
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: 22,
    display: "flex",
    justifyContent: "center",
    paddingLeft: 0,
    alignItems: "center",
  },
}));

const Paragraph = styled("div")(({ theme }) => ({
  backgroundImage: "linear-gradient(90deg, #222 0%, #222 100%)",
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontFamily: "Helvetica",
  fontWeight: 100,
  lineHeight: 1.6,
  fontSize: 20,
  marginTop: 30,
  width: 550,
  marginBottom: 30,
  paddingLeft: 40,
  textAlign: "left",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
    width: "100%",
    paddingLeft: 25,
    paddingRight: 25,
  },
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    fontWeight: 400,
  },
}));

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank");
  if (newWindow) newWindow.opener = null;
};

function Hero() {
  return (
    <div>
      <HeroWrapp order={{ lg: 1, md: 3 }}>
        <ArtWrap>
          <Art>
            <img
              src="/assets/headshot.png"
              width="100%"
              height="100%"
              alt="One"
            />
          </Art>
        </ArtWrap>
        <Description>
          <Grid>
            <MainHeading>Senior Full Stack Engineer</MainHeading>
            <SubHeading>Frontend : Backend : Platform</SubHeading>
            <Paragraph>
              Check out my latest project and resume below
              <br />
            </Paragraph>
          </Grid>
          <Buttons>
            <MainButton
              disableRipple
              variant="outlined"
              onClick={() =>
                openInNewTab(
                  "https://firebasestorage.googleapis.com/v0/b/site-360ad.appspot.com/o/Resume.pdf?alt=media&token=b6ba2bea-f789-48b6-9d2a-d971608cd4a8"
                )
              }
            >
              Resume
            </MainButton>

            <MainButton
              disableRipple
              variant="outlined"
              onClick={() => openInNewTab("https://multivurse.com/")}
            >
              Latest project
            </MainButton>

            <MainButton
              disableRipple
              variant="outlined"
              onClick={() =>
                openInNewTab(
                  "https://www.upwork.com/freelancers/~0144e39f7980edb847"
                )
              }
            >
              Freelance work
            </MainButton>
          </Buttons>
        </Description>
      </HeroWrapp>
    </div>
  );
}

export default Hero;
