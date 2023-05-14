//import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import BusynessView from "@/components/BusynessView";
import TablesView from "@/components/TablesView";
import MenuView from "@/components/MenuView";
import { useRouter } from "next/router";

import { Box, Container, Typography, Stack, Skeleton } from "@mui/material";

import halls from "@/data/halls.json";

export default function PlacePage({}) {
  const router = useRouter();

  const [info, setInfo] = useState();

  const [date, setDate] = useState(new Date()); // eslint-disable-line no-unused-vars

  const hall = halls.find((eachHall) => eachHall.id === router.query.id);

  // TODO: send date
  useEffect(() => {
    if (hall) {
      fetch(`/api/hall/${hall.id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        })
        .then((data) => {
          setInfo(data);
        })
        .catch((err) => console.log(err)); // eslint-disable-line no-console
    }
  }, [hall, date]);

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
            {hall ? (
              hall.name
            ) : (
              <Skeleton
                variant="text"
                width={120}
                sx={{ fontSize: "0.8rem" }}
              />
            )}
          </Typography>
          <Typography component="p" className="tagline" align="center">
            {hall ? (
              hall.desc
            ) : (
              <Skeleton
                variant="text"
                width={120}
                sx={{ fontSize: "0.8rem" }}
              />
            )}
          </Typography>
        </Box>
      </header>
      <main>
        <Container maxWidth="xl">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Stack direction="column" justifyContent="center" spacing={2}>
              {info ? (
                <>
                  <BusynessView info={info} />
                  <TablesView hall={hall} info={info} setInfo={setInfo} />
                  <MenuView menu={info.menu} date={date} hall={hall} />
                </>
              ) : (
                <p>Loading...</p>
              )}
            </Stack>
          </Box>
        </Container>
      </main>
    </>
  );
}
