import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import LeftTitleBar from "../../components/leftbar";
import { styled } from "@mui/material/styles";
import { PLAY_PARAGRAPH, SHOP_PARAGRAPH } from "../../constants/constants";
import { useState } from "react";
import { Decoration } from "../../components/decoration";
import { useMediaQuery } from "@mui/material";

const CircledImage = styled("div")(({ theme }) => ({
  border: "1px solid #222",
  borderRadius: "5px",
  padding: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "75px",
  width: "200px",
  boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
  background: "linear-gradient(to top, #fff, #fff)",
  [theme.breakpoints.down("md")]: {
    height: "70px",
    width: "200px",
    padding: "10px",
  },
}));

const Paragraph = styled("p")(({ theme }) => ({
  textAlign: "justify",
  backgroundImage: "linear-gradient(90deg, #222 0%, #222 100%)",
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  marginBottom: 40,
  fontFamily: "Roboto",
  fontWeight: 300,
  fontSize: 18,
  letterSpacing: 1,
  lineHeight: 2,
  [theme.breakpoints.down("md")]: {
    marginTop: 40,
    marginBottom: 40,
  },
}));

const ImageContainer = styled("img")(({ theme }) => ({
  height: "600px",
  width: "100%",
  borderRadius: "16px",
  objectFit: "cover",
  marginTop: "16px",
  boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
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
    image: "/assets/white.png",
  },
  {
    heading: "Network",
    paragraph: SHOP_PARAGRAPH,
    image: "/assets/white.png",
  },
];

export default function Features() {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const [selected, setSelected] = useState(0);
  return (
    <div id="company">
      <Grid container>
        <Grid item md={5} xs={10}>
          <LeftTitleBar title={"FEATURES"} content={"WHAT WE OFFER"} />
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
            <Grid container xs={12} md={6}>
              <Grid
                container
                xs={12}
                flexDirection={"row"}
                justifyContent="center"
                alignItems="center"
                style={{ marginBottom: 30 }}
              >
                <style>
                  {`.selected {
                                            background: linear-gradient(90deg, #fff 0%, #fff  100%);
                                            border: 2px solid black;
                                            border-radius: 100%;

                                        }`}
                </style>
                <Grid container xs={4}>
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

                <Grid container xs={4}>
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
    </div>
  );
}
