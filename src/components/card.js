import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { RemoveRedEye } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank");
  if (newWindow) newWindow.opener = null;
};

const ImageContainer = styled("img")(({ theme }) => ({
  height: 125,
  width: 125,
  background: "transparent",
  position: "absolute",
  left: "35%",
  top: -50,
  zIndex: 1,
  borderRadius: 16,
  padding: 10,
  objectFit: "cover",
  [theme.breakpoints.down("md")]: {
    left: "38%",
  },
  [theme.breakpoints.down("sm")]: {
    left: "34%",
  },
}));

export default function InvestorsCard({ cardContent, link }) {
  return (
    <Grid
      container
      md={12}
      xs={12}
      style={{
        position: "relative",
        width: "100%",
        height: 600,
      }}
    >
      <ImageContainer src={cardContent.imgSource} />
      <Card
        style={{
          alignContent: "center",
          justifyContent: "center",
          paddingLeft: "20px",
          paddingTop: "100px",
          width: "100%",
          height: "100%",
          borderRadius: "20px",
          textAlign: "start",
          color: "#223366",
          boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
          background: "linear-gradient(to top, #2c5364, #2c5364 100%)",
        }}
      >
        <CardContent style={{ width: "100%", paddingRight: 40 }}>
          <Typography
            style={{
              marginBottom: 15,
              textAlign: "left",
              color: "#fbe9d7",
              fontFamily: "Roboto",
              fontSize: 20,
              fontWeight: 400,
              letterSpacing: 2,
            }}
          >
            {cardContent.title}
          </Typography>
          <Typography
            style={{
              textAlign: "justify",
              color: "#fbe9d7",
              fontFamily: "Roboto",
              fontWeight: 300,
              letterSpacing: 1,
              lineHeight: 2,
            }}
          >
            {cardContent.subtitle}
          </Typography>
          <Typography
            style={{
              textAlign: "justify",
              color: "#fbe9d7",
              fontFamily: "Roboto",
              fontWeight: 300,
              marginTop: 50,
              fontSize: 16,
              marginBottom: 125,
              letterSpacing: 1,
              lineHeight: 2,
            }}
          >
            {cardContent.content}
          </Typography>
          <CardActions>
            <Button
              variant="outlined"
              disableRipple
              style={{
                borderRadius: "20px",
                border: "1px solid #fbe9d7",
                height: 50,
                width: 200,
                justifyContent: "left",
              }}
              onClick={() => openInNewTab("https://explorers.multivurse.com/")}
            >
              <RemoveRedEye fontSize="medium" style={{ color: "#fbe9d7" }} />
              <Typography
                style={{
                  textAlign: "justify",
                  color: "#fbe9d7",
                  fontFamily: "Roboto",
                  textTransform: "capitalize",
                  fontWeight: 300,
                  letterSpacing: 1,
                  lineHeight: 1.5,
                  fontSize: 18,
                  marginLeft: 10,
                }}
              >
                Go
              </Typography>
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
}
