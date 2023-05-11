import Head from "next/head";

import { Typography, Link, Stack, CssBaseline } from "@mui/material";
import theme from "../material/theme";
import createEmotionCache from "../material/createEmotionCache";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import MealHow from ".";
import { Chat } from "@mui/icons-material";

const clientSideEmotionCache = createEmotionCache();

export default function MainApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MealHow} />
          <Route path="/" component={Chat} />
        </Switch>
      </Router>
      <Head>
        <title>MealHow</title>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <link rel="icon" type="image/png" href="favicon.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
        <footer>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            mt={2}
            mb={{ xs: 20, sm: 2 }}
          >
            <Typography
              variant="subtitle2"
              color="text.secondary"
              align="center"
            >
              {"We're no "}
              <Link
                color="inherit"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              >
                strangers to love
              </Link>
              {"."}
              <br />
              {"A "}
              <Link
                color="inherit"
                href="https://www.cs.middlebury.edu/~mlinderman/courses/cs312/s23/index.html"
              >
                CS 312
              </Link>
              {" Project"}
            </Typography>
          </Stack>
        </footer>
      </ThemeProvider>
    </CacheProvider>
  );
}
