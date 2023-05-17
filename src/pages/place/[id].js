// import { useRouter } from "next/router";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

import BusynessView from "@/components/BusynessView";
import TablesView from "@/components/TablesView";
import MenuView from "@/components/MenuView";
import { useRouter } from "next/router";
import DateTimePickerButton from "@/components/DateTimePickerButton";
import { useSessionStorageValue } from "@react-hookz/web";

import { Box, Container, Typography, Stack, Skeleton } from "@mui/material";

import halls from "@/data/halls.json";

export default function PlacePage({}) {
  const router = useRouter();

  const [info, setInfo] = useState();

  const timeStorage = useSessionStorageValue("date");
  const date = timeStorage.value ? dayjs(timeStorage.value) : dayjs();

  const hall = halls.find((eachHall) => eachHall.id === router.query.id);

  useEffect(() => {
    const dateQuery = dayjs(timeStorage.value);
    if (hall) {
      fetch(`/api/hall/${hall.id}?t=${+dateQuery}`)
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
  }, [hall, timeStorage.value]);

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
                    hall={hall}
                    info={info}
                    date={date}
                    type={"hall"}
                  />
                  {info.busyVal !== -1 ? (
                    <TablesView hall={hall} info={info} date={date} />
                  ) : (
                    <></>
                  )}
                  <MenuView menu={info.menu} date={date} hall={hall} />
                </>
              ) : (
                <p>Loading...</p>
              )}
            </Stack>
          </Box>
        </Container>
        <DateTimePickerButton time={date} setTime={timeStorage.set} />
      </main>
    </>
  );
}
