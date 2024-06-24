"use client";
import React from "react";
import Image from "next/image";
import CustomTable from "./components/Table";
import {
  Box,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CommonQuestions from "./components/questions";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SupportIcon from "@mui/icons-material/Support";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import CustomHeader from "./components/header";
import { Logo2 } from "./icons/logo2";
import Card_stats from "./components/card_stats";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import SearchIcon from "@mui/icons-material/Search";
import CustomForm from "./components/form";

export default function Home() {
  const [isUpdatedTable, setIsUpdatedTable] = React.useState<boolean>(false);

  return (
    <>
      <Box
        id="home"
        sx={{
          width: "100%",
          backgroundColor: "#3D3D3D",
          display: "flex",
          alignItems: "center",
          padding: "1.5rem 24px",
        }}
      >
        <Logo2 />
      </Box>
      <CustomHeader />
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#8556AA",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "9rem",
          padding: "1rem",
          marginBottom: "1rem",
        }}
      >
        <Card_stats
          title={"Tipo de Quadra"}
          description={"Society"}
          icon={SportsBasketballIcon}
        />
        <Card_stats
          title={"Nível"}
          description={"Semi-Profissional"}
          icon={FormatAlignLeftIcon}
        />
        <Card_stats
          title={"Vitórias"}
          description={"345"}
          icon={EmojiEventsIcon}
        />
      </Box>
      <Container>
        <Typography
          variant="h5"
          sx={{ fontWeight: 500, color: "#303030", marginBottom: "2.5rem" }}
        >
          Usuários
        </Typography>
        <TextField
          id="filled-basic"
          label="Procurar"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="filled"
          size="small"
          fullWidth
          sx={{ marginBottom: "2rem" }}
        />
        <CustomTable isUpdated={isUpdatedTable} />
        <Typography
          id="registro"
          variant="h5"
          sx={{
            fontWeight: 500,
            color: "#303030",
            marginBottom: "1.5rem",
            marginTop: "2.5rem",
          }}
        >
          Registro
        </Typography>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
          spacing={2}
        >
          <CommonQuestions
            title={"Precisa de ajuda?"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidente ut labore et dolore magna aliqua."
            }
            icon={SupportIcon}
          />
          <CommonQuestions
            title={"Por que se registrar?"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidente ut labore et dolore magna aliqua."
            }
            icon={MonitorHeartIcon}
          />
          <CommonQuestions
            title={"O que está acontecendo?..."}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidente ut labore et dolore magna aliqua."
            }
            icon={EmojiEmotionsIcon}
          />
        </Stack>
        <CustomForm
          onUpdated={(e) => {
            setIsUpdatedTable(e);
          }}
        />
      </Container>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#3D3D3D",
          display: "flex",
          alignItems: "center",
          padding: "45px",
          marginTop: "3rem",
        }}
      ></Box>
    </>
  );
}
