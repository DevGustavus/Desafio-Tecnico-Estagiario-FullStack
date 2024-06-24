"use client";
import { axiosPublic } from "@/api/axios/axios";
import React, { useEffect, useState } from "react";

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
  const [userData, setUserData] = React.useState<User>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosPublic.get("users");
        const filtedUsers = response.data.users.find(
          (name: string) => params.username
        );
        setUserData(filtedUsers);
      } catch (error) {
        console.error("Erro ao obter os dados do usuário:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Página do Usuário </h1>
      <p>Nome: {userData?.name}</p>
      <p>Email: {userData?.email}</p>
      <p>Criado em: {userData?.created_at}</p>
      <p>Atualizado em: {userData?.updated_at}</p>
    </div>
  );
};

export default UserPage;
