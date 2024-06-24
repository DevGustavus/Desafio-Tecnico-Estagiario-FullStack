"use client";
import { axiosPublic } from "@/api/axios/axios";
import Card_stats from "@/app/components/card_stats";
import CustomHeader from "@/app/components/header";
import { Logo2 } from "@/app/icons/logo2";
import { Avatar, Box, Container, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";

interface Props {
  params: { username: string };
}

interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

const UserPage = ({ params }: Props) => {
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosPublic.get("users");
        const filtedUsers = response.data.users.find(
          (user: User) => user.name === params.username
        );
        setUserData(filtedUsers);
      } catch (error) {
        console.error("Erro ao obter os dados do usuário:", error);
      }
    };

    fetchUsers();
  }, [params.username]);

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
          Usuário
        </Typography>

        <Box
          sx={{
            border: "1px solid #E0E0E0", // borda fininha cinza claro
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", // efeito de sombra 3D
            padding: "20px", // espaçamento interno
            marginBottom: "2.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "2.5rem",
              backgroundColor: "#F5F5F5",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <IconButton>
              <Avatar
                alt={userData?.name || ""}
                src="/static/images/avatar/2.jpg"
                className="cursor-auto"
                sx={{ width: "6rem", height: "6rem" }}
              />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ fontWeight: 400, color: "#303030", marginLeft: "1rem" }}
            >
              {userData?.name}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h5" // Mantido como h5
              sx={{ fontWeight: 500, color: "#303030", marginBottom: "0.5rem" }}
            >
              ID:
            </Typography>
            <Typography
              variant="body1" // Alterado para body1
              sx={{ fontWeight: 500, color: "#303030", marginBottom: "2.5rem" }}
            >
              {userData?.id}
            </Typography>
            <Typography
              variant="h5" // Mantido como h5
              sx={{ fontWeight: 500, color: "#303030", marginBottom: "0.5rem" }}
            >
              Nome:
            </Typography>
            <Typography
              variant="body1" // Alterado para body1
              sx={{ fontWeight: 500, color: "#303030", marginBottom: "2.5rem" }}
            >
              {userData?.name}
            </Typography>
            <Typography
              variant="h5" // Mantido como h5
              sx={{ fontWeight: 500, color: "#303030", marginBottom: "0.5rem" }}
            >
              Email:
            </Typography>
            <Typography
              variant="body1" // Alterado para body1
              sx={{ fontWeight: 500, color: "#303030", marginBottom: "2.5rem" }}
            >
              {userData?.email}
            </Typography>
            <Typography
              variant="h5" // Mantido como h5
              sx={{ fontWeight: 500, color: "#303030", marginBottom: "0.5rem" }}
            >
              Criado em:
            </Typography>
            <Typography
              variant="body1" // Alterado para body1
              sx={{ fontWeight: 500, color: "#303030", marginBottom: "2.5rem" }}
            >
              {userData?.created_at}
            </Typography>
            <Typography
              variant="h5" // Mantido como h5
              sx={{ fontWeight: 500, color: "#303030", marginBottom: "0.5rem" }}
            >
              Atualizado em:
            </Typography>
            <Typography
              variant="body1" // Alterado para body1
              sx={{ fontWeight: 500, color: "#303030", marginBottom: "2.5rem" }}
            >
              {userData?.updated_at}
            </Typography>
          </Box>
        </Box>
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
};

export default UserPage;
