import Grid from "@mui/material/Grid";
import RightTitleBar from "../../components/rightbar";
import InvestorsCard from "../../components/card";

import { useState } from "react";
import { INVESTORS_CARD_CONTENT } from "../../constants/constants";
import { useMediaQuery } from "@mui/material";

export default function Pricing() {
  const [selectedPage] = useState(0);
  const md = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Grid id="investors">
      <Grid container justifyContent="flex-end">
        <Grid xs={10} md={5}>
          <RightTitleBar title="PRICING" content="FLEXIBLE OPTIONS" />
        </Grid>
      </Grid>
      <Grid container style={{ marginTop: 30, justifyContent: "center" }}>
        <Grid item order={md ? 2 : 1} xs={12} lg={8} md={10}>
          <Grid container style={{ justifyItems: "center" }}>
            <Grid item md={6} sm={12} xs={12}>
              <Grid
                container
                marginTop="100px"
                style={{ justifyContent: "center" }}
              >
                <Grid item xs={10} sm={7} md={11}>
                  <Grid container>
                    <InvestorsCard
                      cardContent={INVESTORS_CARD_CONTENT[selectedPage][0]}
                      link={INVESTORS_CARD_CONTENT[selectedPage][0].link}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <Grid
                container
                marginTop="100px"
                style={{ justifyContent: "center" }}
              >
                <Grid item xs={10} sm={7} md={11}>
                  <InvestorsCard
                    cardContent={INVESTORS_CARD_CONTENT[selectedPage][1]}
                    link={INVESTORS_CARD_CONTENT[selectedPage][1].link}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
