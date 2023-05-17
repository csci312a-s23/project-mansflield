import { useState } from "react";

import { useRouter } from "next/router";

import DiningHallView from "@/components/DiningHallView";
import ServiceView from "@/components/ServiceView";

import { Box, Stack, Container, Typography } from "@mui/material";

import dayjs from "dayjs";

import style1 from "../styles/main.module.css";

export default function MealHow() {
  const router = useRouter();

  // eslint-disable-next-line no-unused-vars
  const [time, setTime] = useState(dayjs());

  function routeDiningHall(diningHall) {
    if (diningHall) {
      router.push(`/place/${diningHall}`);
    } else {
      router.back;
    }
  }

  function routeService(service) {
    if (service) {
      router.push(`/service/${service}`);
    } else {
      router.back;
    }
  }

  return (
    <>
      <header className={style1.colorTitle}>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            align="center"
            fontFamily={"Helvetica Neue"}
          >
            MealHow
          </Typography>
          <Typography
            component="p"
            className={`tagline`}
            align="center"
            fontFamily={"Helvetica Neue"}
          >
            How will you eat next?
          </Typography>
        </Box>
      </header>
      <main className={style1.mainBody}>
        <Container maxWidth="xl">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography
              component="h5"
              variant="h5"
              fontFamily={"Helvetica Neue"}
            >
              Dining
            </Typography>
            <DiningHallView routeDiningHall={routeDiningHall} time={time} />
            <Typography component="h5" variant="h5">
              Retail
            </Typography>
            <ServiceView routeService={routeService} time={time} />
          </Stack>
        </Container>
      </main>
    </>
  );
}
