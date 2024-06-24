"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { axiosPublic } from "@/api/axios/axios";
interface CustomFormProps {
  onUpdated: React.Dispatch<React.SetStateAction<boolean>>;
}

function CustomForm({ onUpdated }: CustomFormProps) {
  const [userName, setUserName] = React.useState<string>("");
  const [userEmail, setUserEmail] = React.useState<string>("");


  const handleSendUser = async () => {
    const body = {
      email: userEmail,
      name: userName,
      password: Math.random().toString(36).slice(-10),
    };
  
    try {
      await axiosPublic.post("users/create", body);
      alert("Usuário cadastrado com sucesso");
      onUpdated(true);
    } catch (error) {
      console.error(error);
    } finally {

      setTimeout(() => {
        onUpdated(false); 
      }, 1000); 
    }
  };
  
  return (
    <Box
      sx={{
        padding: 2,
        border: "1px solid #e0e0e0",
        borderRadius: 2,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: 400, marginBottom: 7, color: "#919191" }}
      >
        Registro
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <Box sx={{ flex: 1, marginRight: 2 }}>
            <TextField
              id="username"
              label="Nome de usuário*"
              variant="filled"
              size="small"
              fullWidth
              sx={{ marginBottom: 4 }}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              id="fullname"
              label="Nome completo*"
              variant="filled"
              size="small"
              fullWidth
              sx={{ marginBottom: 4 }}
            />
            <TextField
              id="email"
              label="E-mail*"
              variant="filled"
              size="small"
              fullWidth
              sx={{ marginBottom: 4 }}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ flex: 1, marginLeft: 2 }}>
            <TextField
              id="city"
              label="Cidade*"
              variant="filled"
              size="small"
              fullWidth
              sx={{ marginBottom: 4 }}
            />
            <Box>
              <Typography
                variant="body2"
                sx={{ fontWeight: 500, color: "#303030", marginBottom: 1 }}
              >
                DIAS DA SEMANA
              </Typography>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Segunda"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Terça"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Quarta"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Quinta"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Sexta"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Sábado"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Domingo"
                />
              </FormGroup>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "flex-start", marginTop: 6 }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{ marginRight: 2 }}
            onClick={handleSendUser}
          >
            Registrar
          </Button>
          <Button variant="text" color="secondary">
            Cancelar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CustomForm;
