import Grid from "@mui/material/Grid";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { LinkedIn, Twitter } from "@mui/icons-material";
import Link from "@mui/material/Link";

const FOOTER = styled(Grid)(() => ({
  background: "transparent",
  opacity: 1,
  justifyContent: "center",
  marginTop: "100px",
  borderTop: "1px solid #fbe9d7",
  color: "#fbe9d7",
  paddingTop: "50px",
}));
const VerticalLine = styled(Grid)(({ height, theme }) => ({
  opacity: 1,
  height: height,
  borderWidth: "1.5px",
  borderLeftStyle: "solid",
  color: "#fbe9d7",
  [theme.breakpoints.down("sm")]: {
    borderWidth: "1.5px",
  },
}));

function Footer() {
  return (
    <FOOTER>
      <Grid container id="contact" spacing={1}>
        <Grid item xs={12} md={4} className="align-self-center">
          <Grid container justifyContent="center">
            <Grid item>
              <Grid container>
                <Grid item>
                  <Grid
                    container
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      paddingBottom: "20px",
                    }}
                  >
                    <Grid item>
                      <h6
                        style={{
                          letterSpacing: 1.25,
                          fontWeight: 400,
                          fontSize: 18,
                          paddingBottom: 20,
                          marginLeft: 50,
                          marginRight: 50,
                        }}
                      >
                        MULTIVURSE
                      </h6>
                      <hr
                        style={{
                          color: "#fbe9d7",
                          opacity: 1,
                          height: 1.5,
                          textAlign: "center",
                          marginBottom: "24px",
                        }}
                      ></hr>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={3} justifyContent="center">
                <Grid item>
                  <Link href="">
                    <img src="/assets/newlogo.png" height="60" alt="logo"></img>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} className="align-self-end">
          <address style={{ marginBottom: 40 }}>
            <br />
            <p
              style={{
                fontWeight: 300,
                fontSize: 14,
                letterSpacing: 0.6,
                paddingTop: 30,
              }}
            >
              https://multivurse.com
            </p>
            <p style={{ fontWeight: 300, fontSize: 13, letterSpacing: 0.8 }}>
              multivurse.technologies@gmail.com
            </p>
            <Grid container spacing={3} justifyContent="center">
              <Grid item>
                <Link href="https://www.linkedin.com/company/multivurse/">
                  <LinkedIn style={{ fontSize: "35px", color: "#f6d5f7" }} />
                </Link>
              </Grid>
              <Grid item>
                <Link href="https://twitter.com/multivurse_art">
                  <Twitter style={{ fontSize: "32px", color: "#f6d5f7" }} />
                </Link>
              </Grid>
            </Grid>
          </address>
        </Grid>
        <Grid item xs={12} md={3} className="align-self-end">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item className="align-self-end">
              <VerticalLine height="75px" />
            </Grid>
            <Grid item className="align-self-end">
              <VerticalLine height="125px" />
            </Grid>
            <Grid item className="align-self-end">
              <VerticalLine height="225px" />
            </Grid>
            <Grid item className="align-self-end">
              <VerticalLine height="225px" />
            </Grid>
            <Grid item className="align-self-end">
              <VerticalLine height="125px" />
            </Grid>
            <Grid item className="align-self-end">
              <VerticalLine height="75px" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FOOTER>
  );
}

export default Footer;
