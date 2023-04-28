import Head from "next/head";

import {
  Typography,
  Link,
  Stack,
  Box,
  Container,
  CssBaseline,
} from "@mui/material";
import theme from "../material/theme";
import createEmotionCache from "../material/createEmotionCache";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

export default function MainApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>MealHow</title>
        <link rel="icon" type="image/svg+xml" href="favicon.svg" />
        <link rel="icon" type="image/png" href="favicon.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
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
          <Container maxWidth="xl">
            <Component {...pageProps} />
          </Container>
        </main>
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
