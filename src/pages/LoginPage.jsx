import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { emailValidator } from "../utils/validators";

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const handleLogIn = () => {
    
  }
  return (
    <div>
      <Box>
        <Typography>LOGIN</Typography>
        <Box>
          <TextField
            // type="email"
            label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!email && !emailValidator(email)}
          />
        </Box>
        <Box>
          <TextField
            // type="password"
            label="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            error={pass.length < 6}
          />
        </Box>
        <Button variant="outlined" onClick={handleLogIn}>Log In</Button>
      </Box>
    </div>
  );
};

export default LoginPage;
