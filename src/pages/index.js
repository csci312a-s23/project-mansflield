// import { useState } from "react";

import DiningHallView from "../components/DiningHallView";
import { useRouter } from "next/router";
import { Box, Container, Typography } from "@mui/material";

export default function MealHow() {
  const router = useRouter();
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
          <Box display="flex" justifyContent="center" alignItems="center">
            <DiningHallView routeDiningHall={routeDiningHall} />
          </Box>
        </Container>
      </main>
    </>
  );
}
