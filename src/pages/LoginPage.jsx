import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { emailValidator } from "../utils/validators";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../store/auth/authSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const dispatch = useDispatch()
  const userEmail = useSelector(s => s.auth.email)

  const handleLogIn = () => {
    // если нет ошибок!
    signInWithEmailAndPassword(auth, email, pass)
      .then((data) => {
        console.log(data);
        dispatch(logIn({
          email: data.user.email,
          id: data.user.uid,
        }))
        localStorage.setItem("email", data.user.email)
        localStorage.setItem("id", data.user.uid)
      })
      .catch(console.error)
  }

  const handleLogOut = () => {
    signOut(auth)
    dispatch(logOut())
    localStorage.removeItem("email")
    localStorage.removeItem("id")
  }

  const handleRegist = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then(data => {
        console.log(data);
        dispatch(logIn({
          email: data.user.email,
          id: data.user.uid,
        }))
        localStorage.setItem("email", data.user.email)
        localStorage.setItem("id", data.user.uid)
      })
      .catch(console.error)
  }

  useEffect(() => {
    const email = localStorage.getItem("email")
    const id = localStorage.getItem("id")
    dispatch(logIn({ email, id }))
  }, [dispatch])
  return (
    <div>
      <Box>
        {
          userEmail ? <h2>привет {userEmail}</h2> : (
            <>
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
                  error={pass.length < 6 && !!pass}
                />
              </Box>
              <Button variant="outlined" onClick={handleLogIn}>Log In</Button>
            </>
          )
        }
        <Button variant="contained" color="success" onClick={handleRegist}>Regist</Button>
        <Button variant="contained" color="error" onClick={handleLogOut}>Log Out</Button>

      </Box>

    </div>
  );
};

export default LoginPage;
