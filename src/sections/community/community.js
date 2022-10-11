import Grid from "@mui/material/Grid";
import RightTitleBar from "../../components/rightbar";
import { styled } from "@mui/material/styles";
import {
  EXPLORERS_PARAGRAPH,
  CREATORS_PARAGRAPH,
} from "../../constants/constants";
import { Decoration } from "../../components/decoration";

const Paragraph = styled("div")(({ theme }) => ({
  textAlign: "justify",
  backgroundImage: "linear-gradient(90deg, #f6d5f7 0%, #fbe9d7 100%)",
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
  backgroundImage: "linear-gradient(90deg, #f6d5f7 0%, #fbe9d7 100%)",
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
  borderRadius: "16px",
  objectFit: "cover",
  marginTop: "16px",
  boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
}));

export default function Community() {
  return (
    <Grid style={{ color: "#222" }} id="mission">
      <Grid container justifyContent={"flex-end"}>
        <Grid item xs={10} md={5}>
          <RightTitleBar title="COMMUNITY" content="WHO WE ARE" />
        </Grid>
      </Grid>
      <Grid container>
        <Mission item md={5}>
          <Grid container>
            <Title>Explorers</Title>
            <Paragraph>{EXPLORERS_PARAGRAPH}</Paragraph>
            <hr
              style={{
                height: 1.5,
                width: "100%",
                background: "linear-gradient(90deg, #f6d5f7 0%, #fbe9d7 100%)",
                opacity: 0.8,
              }}
            ></hr>
          </Grid>
          <Grid
            container
            className="justify-content-center"
            style={{ marginTop: 20 }}
          >
            <ImageContainer src="/assets/explorerspic.png" alt="image" />
          </Grid>
        </Mission>
        <Mission item md={5}>
          <Grid container>
            <Title>Creators</Title>
            <Paragraph>{CREATORS_PARAGRAPH}</Paragraph>
            <hr
              style={{
                height: 1.5,
                width: "100%",
                background: "linear-gradient(90deg, #f6d5f7 0%, #fbe9d7 100%)",
                opacity: 0.8,
              }}
            ></hr>
          </Grid>
          <Grid container justifyContent="center" style={{ marginTop: 20 }}>
            <ImageContainer src="/assets/creatorspic.png" alt="image" />
          </Grid>
        </Mission>
        <Decoration item md={2} className="align-self-end">
          <Grid container className="justify-content-end">
            <img src="/assets/abs4.png" width="120%" alt="" height="120%" />
          </Grid>
        </Decoration>
      </Grid>
    </Grid>
  );
}
