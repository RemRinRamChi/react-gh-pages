import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, active, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading ... ";
  }

  let cardData = [
    {
      title: "Confirmed",
      value: confirmed.value,
      description: "Number of confirmed cases of COVID-19",
      class: styles.infected,
    },
    {
      title: "Active",
      value: active.value,
      description: "Number of active cases of COVID-19",
      class: styles.active,
    },
    {
      title: "Recovered",
      value: recovered.value,
      description: "Number of recoveries of COVID-19",
      class: styles.recovered,
    },
    {
      title: "Deaths",
      value: deaths.value,
      description: "Number of deaths caused by COVID-19",
      class: styles.deaths,
    },
  ];

  return (
    <div className={styles.container}>
      <Grid container justify="center">
        {
          cardData.map((cData, i) => (
            <Grid item key={i} component={Card} xs={12} md={2} className={cx(styles.card, cData.class)}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>{cData.title}</Typography>
                <Typography variant="h5">
                  <CountUp start={0} end={cData.value} duration={2.5} separator=","/>
                </Typography>
                <Typography color="textSecondary">
                  {new Date(lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body2">
                  {cData.description}
                </Typography>
              </CardContent>
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
};

export default Cards;
