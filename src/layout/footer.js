import Grid from "@mui/material/Grid";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { LinkedIn, GitHub } from "@mui/icons-material";
import Link from "@mui/material/Link";

const FOOTER = styled(Grid)(() => ({
  background: "#111",
  opacity: 1,
  justifyContent: "center",
  marginTop: "100px",
  borderTop: "1px solid #fbe9d7",
  color: "#fff",
  paddingTop: "50px",
}));
const VerticalLine = styled(Grid)(({ height, theme }) => ({
  opacity: 1,
  height: height,
  borderWidth: "1.5px",
  borderLeftStyle: "solid",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    borderWidth: "1.5px",
  },
}));

function Footer() {
  return (
    <FOOTER>
      <Grid container id="contact" spacing={1}>
        <Grid item xs={12} md={12} className="align-self-center">
          <Grid container justifyContent="center">
            <Grid item>
              <Grid item xs={12} md={12} className="align-self-center">
                <address style={{ marginBottom: 40 }}>
                  <br />
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
                      JONATHAN
                    </h6>
                    <hr
                      style={{
                        color: "#fff",
                        opacity: 1,
                        height: 1.5,
                        textAlign: "center",
                        marginBottom: "24px",
                      }}
                    ></hr>
                  </Grid>
                  <p
                    style={{
                      fontWeight: 300,
                      fontSize: 15,
                      letterSpacing: 0.8,
                    }}
                  >
                    jonathan2daniels@gmail.com
                  </p>
                  <p
                    style={{
                      fontWeight: 300,
                      fontSize: 15,
                      letterSpacing: 0.8,
                    }}
                  >
                    Vancouver, Canada &#127464;&#127462;
                  </p>
                  <Grid container spacing={3} justifyContent="center">
                    <Grid item>
                      <Link href="https://www.linkedin.com/in/j2daniels/">
                        <LinkedIn style={{ fontSize: "35px", color: "#fff" }} />
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="https://github.com/Jonathan-Multivurse">
                        <GitHub style={{ fontSize: "35px", color: "#fff" }} />
                      </Link>
                    </Grid>
                  </Grid>
                </address>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FOOTER>
  );
}

export default Footer;
