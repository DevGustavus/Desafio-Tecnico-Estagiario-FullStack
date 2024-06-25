"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { axiosPublic } from "@/api/axios/axios";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface CustomTableProps {
  isUpdated: boolean;
}

const columns: GridColDef[] = [
  { field: "username", headerName: "User", width: 150 },
  { field: "name", headerName: "Nome", width: 200 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "city", headerName: "Cidade", width: 150 },
  { field: "daysOfWeek", headerName: "Dias da Semana", width: 150 },
  { field: "posts", headerName: "Posts", width: 100 },
  { field: "albums", headerName: "Albuns", width: 100 },
  {
    field: "action",
    headerName: "Ação",
    width: 100,
    renderCell: (params) => (
      <IconButton
        aria-label="Ver detalhes"
        onClick={() => {
          const user = params.row.name;

          window.location.href = `/user/${user}`;
        }}
      >
        <VisibilityIcon />
      </IconButton>
    ),
  },
];

export default function CustomTable({ isUpdated = false }: CustomTableProps) {
  const [users, setUsers] = useState([]);

  function daysOfWeek(user: any) {
    const daysOfWeek = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];
    return daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)];
  }

  function generateRandomUsername() {
    const adjectives = ["Cool", "Super", "Happy", "Crazy", "Fast"];
    const nouns = ["Tiger", "Panda", "Eagle", "Lion", "Shark"];
    const numbers = Math.floor(Math.random() * 1000);

    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${adjective}${noun}${numbers}`;
  }

  function generateRandomCity() {
    const cities = [
      "São Paulo",
      "Rio de Janeiro",
      "Salvador",
      "Brasília",
      "Fortaleza",
      "Belo Horizonte",
      "Manaus",
      "Curitiba",
      "Recife",
      "Porto Alegre",
      "Belém",
      "Goiânia",
      "Guarulhos",
    ];

    return cities[Math.floor(Math.random() * cities.length)];
  }

  async function getUsers() {
    const users = await axiosPublic.get("users");

    const albums = await axiosPublic.get("albums");

    const posts = await axiosPublic.get("posts");

    const usersWithAdditionalInfo = users.data.users.map((user: any) => {
      return {
        ...user,
        username: generateRandomUsername(),
        daysOfWeek: daysOfWeek(user),
        city: generateRandomCity(),
        posts: posts.data.posts.filter((post: any) => post.user_id === user.id)
          .length,
        albums: albums.data.albums.filter(
          (album: any) => album.user_id === user.id
        ).length,
      };
    });
    setUsers(usersWithAdditionalInfo);
  }

  useEffect(() => {
    getUsers();
  }, [isUpdated]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}
