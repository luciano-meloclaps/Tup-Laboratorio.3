import React from "react";
import { Button, Form } from "react-bootstrap";

const buttonRegistrarion = () => {
  const [verifyRegistration, setVerifyRegistration] = useState(0);
};

const aler = () => {
  alert("sas");
};

const Login = () => {
  return (
    <div>
      <div class="input-group mb-3">
        <span class="input-group-text bg-dark text-white" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          class="form-control bg-dark text-white"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        ></input>
      </div>
      <Button onClick={aler} variant="outline-secondary">
        Registrarse
      </Button>{" "}
    </div>
  );
};

export default Login;
