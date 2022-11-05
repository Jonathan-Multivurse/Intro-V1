import Grid from "@mui/material/Grid";
import RightTitleBar from "../../components/rightbar";
import Button from "@mui/material/Button";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import {
  PLAY_PARAGRAPH,
  SHOP_PARAGRAPH,
  LEARN_PARAGRAPH,
} from "../../constants/constants";

const Paragraph = styled("div")(({ theme }) => ({
  textAlign: "justify",
  backgroundImage: "linear-gradient(90deg, #fff 0%, #fff 100%)",
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontFamily: "Roboto",
  fontSize: 16,
  fontWeight: 300,
  letterSpacing: 1,
  lineHeight: 2,
}));

const Mission = styled(Grid)(({ theme }) => ({
  paddingLeft: "50px",
  paddingRight: "50px",
  marginTop: "100px",
  [theme.breakpoints.down("md")]: {
    marginTop: "50px",
  },
}));

const Title = styled("div")(({ theme }) => ({
  backgroundImage: "linear-gradient(90deg, #fff 0%, #fff 100%)",
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "left",
  fontWeight: "300",
  letterSpacing: 1,
  paddingBottom: 10,
  fontSize: 20,
}));

const ImageContainer = styled("img")(({ theme }) => ({
  height: "600px",
  width: "100%",
  background: "linear-gradient(90deg, #213644 0%, #2c5364 100%)",
  borderRadius: "16px",
  objectFit: "cover",
  marginTop: "16px",
  boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
}));

const CircledImage = styled("div")(({ theme }) => ({
  border: "1px solid #fff",
  borderRadius: "100%",
  padding: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "75px",
  width: "75px",
  [theme.breakpoints.down("md")]: {
    height: "70px",
    width: "70px",
    padding: "10px",
  },
}));


const Heading = styled("div")(({ theme }) => ({
  fontFamily: "Helvetica",
  textAlign: "left",
  fontWeight: 500,
  letterSpacing: 2,
  lineHeight: "100%",
  textTransform: "capitalize",
  fontSize: 30,
  marginBottom: "10px",
  backgroundImage: "linear-gradient(90deg, #222 0%, #222 100%)",
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  [theme.breakpoints.down("md")]: {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: 25,
  },
}));

const Line = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: 60,
    borderTop: "1px solid #222",
  },
  [theme.breakpoints.up("md")]: {
    width: 120,
    borderTop: "1px solid #222",
  },
}));

const CONTENT = [
  {
    heading: "Marketplace",
    paragraph: PLAY_PARAGRAPH,
    image: "/assets/lineart1.png",
  },
  {
    heading: "Network",
    paragraph: SHOP_PARAGRAPH,
    image: "/assets/lineart2.png",
  },
  {
    heading: "Immersive Galleries",
    paragraph: LEARN_PARAGRAPH,
    image: "/assets/lineart1.png",
  },
];

export default function Community() {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const [selected, setSelected] = useState(0);
  return (
    <Grid style={{ color: "#222" }} id="mission">
      <Grid container justifyContent={"flex-end"}>
        <Grid item xs={10} md={5}>
          <RightTitleBar title="INVESTORS" content="THE COMMUNITY" />
        </Grid>
      </Grid>
      <Grid
        container
        style={{ marginTop: "70px", paddingLeft: 25, paddingRight: 25 }}
      >
        {/* <Decoration item xs={2} className="align-self-end">
          <Grid container>
            <img src="/assets/abs1.png" width="120%" height="120%" alt="" />
          </Grid>
        </Decoration> */}
        <Grid item xs={12} md={12}>
          <Grid
            container
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "",
            }}
          >
            <Grid
              container
              xs={12}
              md={6}
              className="align-self-center"
              style={{}}
            >
              <Grid
                container
                flexDirection={"row"}
                justifyContent="center"
                alignItems="center"
              >
                <style>
                  {`.selected {
                                            background: linear-gradient(90deg, #fff 0%, #fff  100%);
                                            border: 2px solid black;
                                            border-radius: 100%;

                                        }`}
                </style>
                <Grid item sm={2} xs={4} style={{ marginBottom: "30px" }}>
                  <Button
                    onClick={() => setSelected(0)}
                    style={{ background: "transparent" }}
                    disableRipple
                  >
                    <Grid
                      container
                      className={selected === 0 ? "selected" : ""}
                    >
                      <CircledImage>
                        <img
                          src="/assets/market.png"
                          width="50px"
                          height="50px"
                          alt=""
                        />
                      </CircledImage>
                    </Grid>
                  </Button>
                </Grid>
                <Line
                  item
                  sm={1}
                  xs={0}
                  style={{
                    alignSelf: "center",
                    marginLeft: "50px",
                    marginRight: "50px",
                  }}
                >
                  <Grid container>
                    <hr></hr>
                  </Grid>
                </Line>
                <Grid item sm={2} xs={4} style={{ marginBottom: "30px" }}>
                  <Button
                    onClick={() => setSelected(1)}
                    style={{ background: "transparent" }}
                    disableRipple
                  >
                    <Grid
                      container
                      className={selected === 1 ? "selected" : ""}
                    >
                      <CircledImage>
                        <img
                          src="/assets/connect.png"
                          width="50px"
                          height="50px"
                          alt=""
                        />
                      </CircledImage>
                    </Grid>
                  </Button>
                </Grid>
                <Line
                  item
                  sm={1}
                  xs={0}
                  style={{
                    alignSelf: "center",
                    marginLeft: "60px",
                    marginRight: "60px",
                  }}
                >
                  <Grid container>
                    <hr></hr>
                  </Grid>
                </Line>

                <Grid item sm={2} xs={4} style={{ marginBottom: "30px" }}>
                  <Button
                    onClick={() => setSelected(2)}
                    style={{ background: "transparent" }}
                    disableRipple
                  >
                    <Grid
                      container
                      className={selected === 2 ? "selected" : ""}
                    >
                      <CircledImage>
                        <img
                          src="/assets/galleries.png"
                          width="55px"
                          height="55px"
                          alt=""
                        />
                      </CircledImage>
                    </Grid>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid>
                <Grid>
                  <Paragraph>{CONTENT[selected].paragraph}</Paragraph>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      style={{ display: "flex", justifyContent: "left" }}
                    >
                      <Heading>{CONTENT[selected].heading}</Heading>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={12}>
                    <ImageContainer src={CONTENT[selected].image} alt="image" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
