import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

const Login = () => {
  const [verifyRegistration, setVerifyRegistration] = useState("");

  const handleChangeReg = (event) => {
    const value = event.target.value;
    setVerifyRegistration(value);

    if (value.includes("o") || value.includes("O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
  };

  const handleClickReg = () => {
    if (
      verifyRegistration === "" ||
      verifyRegistration.includes("o") ||
      verifyRegistration.includes("O")
    ) {
      alert("Usuario inválido para registrarse");
    } else {
      alert("¡Usuario registrado correctamente!");
    }
  };

  return (
    <div>
      <div class="input-group mb-3">
        <span class="input-group-text bg-dark text-white" id="basic-addon1">
          @ Username
        </span>
        <input
          class="form-control bg-dark text-white"
          placeholder="Username"
          type="text"
          value={verifyRegistration}
          onChange={handleChangeReg}
        ></input>
      </div>
      <Button onClick={handleClickReg} variant="outline-secondary">
        Registrarse
      </Button>
      {""}
      <p class="text-white m-4">Valor ingresado:{verifyRegistration} </p>
    </div>
  );
};

export default Login;
