//import { useRouter } from "next/router";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

import BusynessView from "@/components/BusynessView";
import MenuView from "@/components/MenuView";
import { useRouter } from "next/router";

import { Box, Container, Typography, Stack, Skeleton } from "@mui/material";

import retail from "@/data/retail.json";

export default function RetailPage({}) {
  const router = useRouter();

  const [info, setInfo] = useState();

  const [date, setDate] = useState(dayjs()); // eslint-disable-line no-unused-vars

  const place = retail.find((eachHall) => eachHall.id === router.query.id);

  // TODO: send date
  useEffect(() => {
    if (place) {
      fetch(`/api/retail/${place.id}`)
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
  }, [place, date]);

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
            {place ? (
              place.name
            ) : (
              <Skeleton
                variant="text"
                width={120}
                sx={{ fontSize: "0.8rem" }}
              />
            )}
          </Typography>
          <Typography component="p" className="tagline" align="center">
            {place ? (
              place.desc
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
            <Stack
              direction="column"
              justifyContent="center"
              spacing={2}
              sx={{
                minWidth: {
                  xs: "80%",
                  sm: "60%",
                  md: "40%",
                },
              }}
            >
              {info ? (
                <>
                  <BusynessView
                    info={info}
                    date={date}
                    hall={place}
                    type={"retail"}
                  />
                  {place && place.has_menu ? (
                    <MenuView menu={info.menu} date={date} hall={place} />
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <p>Loading...</p>
              )}
            </Stack>
          </Box>
        </Container>
        {/* <div class="topnav">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div> */}
      </main>
    </>
  );
}
