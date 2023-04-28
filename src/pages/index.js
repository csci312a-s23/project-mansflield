import { useState } from "react";
import { useRouter } from "next/router";

import DiningHallView from "../components/DiningHallView";

import { Box, Stack, Container, Typography } from "@mui/material";

import dayjs from "dayjs";

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
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <DiningHallView routeDiningHall={routeDiningHall} time={time} />
          </Stack>
        </Container>
      </main>
    </>
  );
}
