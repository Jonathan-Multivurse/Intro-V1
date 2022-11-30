import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import LeftTitleBar from "../../components/leftbar";
import ServiceImage from "../../components/serviceimage";
import { useState } from "react";
import { LEADERSHIP } from "../../constants/constants";
import { Decoration } from "../../components/decoration";
import { RemoveRedEye } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank");
  if (newWindow) newWindow.opener = null;
};

const LinkedInTop = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  marginTop: 10,
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const LinkedInBottom = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  marginTop: 100,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Title = styled("div")(({ theme }) => ({
  backgroundImage: "linear-gradient(90deg, #222 0%, #222 100%)",
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "left",
  fontWeight: "300",
  letterSpacing: 1,
  paddingBottom: 10,
  fontSize: 20,
}));

const ContentWeb = styled("div")(({ theme }) => ({
  backgroundImage: "linear-gradient(90deg, #222 0%, #222 100%)",
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const ContentMobile = styled("p")(({ theme }) => ({
  backgroundImage: "linear-gradient(90deg, #222 0%, #222 100%)",
  backgroundSize: "100%",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export default function Creators() {
  const [selectedLeader, setSelectedLeader] = useState(0);
  return (
    <Grid container id="leadership">
      <Grid container>
        <Grid item md={5} xs={10}>
          <LeftTitleBar title={"SKILLS"} content={"TECHNICAL KNOWHOW"} />
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: "75px" }}>
        <Grid item xs={5}>
          <Grid container justifyContent="center">
            <Grid item xs={8} className="align-self-center">
              <style>
                {`
                                        .selected-service {
                                          background: linear-gradient(90deg, #222 0%, #222  100%);
                                          border-radius: 16px;
                                    }
                                `}
              </style>
              <Grid spacing={1} container justifyContent="center">
                <Grid item>
                  <Button
                    onClick={() => setSelectedLeader(0)}
                    style={{ background: "transparent" }}
                    disableRipple
                  >
                    <Grid
                      container
                      style={{
                        margin: 8,
                        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                        borderRadius: "16px",
                      }}
                      className={selectedLeader === 0 ? "selected-service" : ""}
                    >
                      <ServiceImage
                        source="/assets/white.png"
                        borderoutline={
                          selectedLeader === 0
                            ? "1px solid #222"
                            : "0.5px solid #222"
                        }
                      />
                    </Grid>
                  </Button>
                </Grid>
              </Grid>

              <Grid container spacing={1} justifyContent="center">
                <Grid item>
                  <Button
                    onClick={() => setSelectedLeader(1)}
                    style={{ background: "transparent" }}
                    disableRipple
                  >
                    <Grid
                      container
                      style={{
                        margin: 8,
                        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                        borderRadius: "16px",
                      }}
                      className={selectedLeader === 1 ? "selected-service" : ""}
                    >
                      <ServiceImage
                        source="/assets/white.png"
                        borderoutline={
                          selectedLeader === 1
                            ? "1px solid #222"
                            : "0.5px solid #222"
                        }
                      />
                    </Grid>
                  </Button>
                </Grid>
              </Grid>

              <Grid container spacing={1} justifyContent="center">
                <Grid item>
                  <Button
                    onClick={() => setSelectedLeader(2)}
                    style={{ background: "transparent" }}
                    disableRipple
                  >
                    <Grid
                      container
                      style={{
                        margin: 8,
                        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                        borderRadius: "16px",
                      }}
                      className={selectedLeader === 2 ? "selected-service" : ""}
                    >
                      <ServiceImage
                        source="/assets/white.png"
                        borderoutline={
                          selectedLeader === 2
                            ? "1px solid #222"
                            : "0.5px solid #222"
                        }
                      />
                    </Grid>
                  </Button>
                </Grid>
              </Grid>

              <Grid container spacing={1} justifyContent="center">
                <Grid item>
                  <Button
                    onClick={() => setSelectedLeader(3)}
                    style={{ background: "transparent" }}
                    disableRipple
                  >
                    <Grid
                      contaier
                      style={{
                        margin: 8,
                        boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
                        borderRadius: "16px",
                      }}
                      className={selectedLeader === 3 ? "selected-service" : ""}
                    >
                      <ServiceImage
                        source="/assets/white.png"
                        borderoutline={
                          selectedLeader === 3
                            ? "1px solid #222"
                            : "0.5px solid #222"
                        }
                      />
                    </Grid>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={7} style={{ marginTop: "20px" }}>
          <Grid container style={{ paddingRight: "30px" }}>
            <Grid item xs={12}>
              <Title>{LEADERSHIP[selectedLeader].heading}</Title>

              <hr
                style={{
                  height: 1.5,
                  width: "80%",
                  border: "none",
                  background:
                    "linear-gradient(90deg, #f6d5f7 0%, #fbe9d7 100%)",
                  opacity: 0.8,
                }}
              ></hr>
            </Grid>
          </Grid>
          <Grid container md={9} sm={9} xs={10}>
            {/* <LinkedInTop>
              <Button
                variant="outlined"
                disableRipple
                style={{
                  borderRadius: "20px",
                  height: 50,
                  width: 200,
                  border: "1px solid #fbe9d7",
                  justifyContent: "left",
                }}
                onClick={() => openInNewTab()}
              >
                <RemoveRedEye fontSize="small" style={{ color: "#fbe9d7" }} />
                <Typography
                  style={{
                    textAlign: "justify",
                    color: "#fbe9d7",
                    fontFamily: "Roboto",
                    textTransform: "capitalize",
                    fontWeight: 300,
                    letterSpacing: 1,
                    lineHeight: 1.5,
                    fontSize: 14,
                    marginLeft: 10,
                  }}
                >
                  Go
                </Typography>
              </Button>
            </LinkedInTop> */}
            <Grid
              item
              style={{
                textAlign: "justify",
                color: "#222",
                fontFamily: "Roboto",
                fontWeight: 300,
                letterSpacing: 1,
                lineHeight: 2,
                marginTop: 25,
              }}
            >
              <ContentWeb>{LEADERSHIP[selectedLeader].contentweb}</ContentWeb>
              <ContentMobile>
                {LEADERSHIP[selectedLeader].contentmobile}
              </ContentMobile>
            </Grid>
          </Grid>
          {/* <LinkedInBottom>
            <Button
              variant="outlined"
              disableRipple
              style={{
                borderRadius: "20px",
                height: 50,
                width: 200,
                border: "1px solid #fbe9d7",
                justifyContent: "left",
              }}
              onClick={() => openInNewTab()}
            >
              <RemoveRedEye fontSize="small" style={{ color: "#fbe9d7" }} />
              <Typography
                style={{
                  textAlign: "justify",
                  color: "#fbe9d7",
                  fontFamily: "Roboto",
                  textTransform: "capitalize",
                  fontWeight: 300,
                  letterSpacing: 1,
                  lineHeight: 1.5,
                  fontSize: 14,
                  marginLeft: 10,
                }}
              >
                Go
              </Typography>
            </Button>
          </LinkedInBottom> */}
        </Grid>
      </Grid>
    </Grid>
  );
}
