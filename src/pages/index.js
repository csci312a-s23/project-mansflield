// import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import DiningHallView from "@/components/DiningHallView";
import ServiceView from "@/components/ServiceView";
import DateTimePickerButton from "@/components/DateTimePickerButton";
import { useSessionStorageValue } from "@react-hookz/web";

import { Box, Stack, Container, Typography } from "@mui/material";

import dayjs from "dayjs";

export default function MealHow() {
  const router = useRouter();

  const timeStorage = useSessionStorageValue("date");
  const time = timeStorage.value ? dayjs(timeStorage.value) : dayjs();

  const routeDiningHall = (diningHall, t) => {
    if (diningHall) {
      router.push(
        {
          pathname: `/place/${diningHall}`,
          query: { t: t },
        },
        `/place/${diningHall}`
      );
    } else {
      router.back;
    }
  };

  const routeService = (service, t) => {
    if (service) {
      router.push(
        {
          pathname: `/service/${service}`,
          query: { t: t },
        },
        `/service/${service}`
      );
    } else {
      router.back;
    }
  };

  return (
    <>
      <header>
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Typography component="h1" variant="h3" align="center">
            MealHow
          </Typography>
          <Typography component="p" className="tagline" align="center">
            How will you eat next?
          </Typography>
        </Box>
      </header>
      <main>
        <Container maxWidth="xl">
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography component="h5" variant="h5">
              Dining
            </Typography>
            <DiningHallView routeDiningHall={routeDiningHall} time={time} />
            <Typography component="h5" variant="h5">
              Retail
            </Typography>
            <ServiceView routeService={routeService} time={time} />
          </Stack>
        </Container>
        <DateTimePickerButton time={time} setTime={timeStorage.set} />
      </main>
    </>
  );
}
