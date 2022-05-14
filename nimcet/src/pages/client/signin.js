import {
    Container,
    Grid,
    Box,
    Typography,
    Avatar,
    TextField,
    InputAdornment,
    Button,
  } from "@mui/material";
  import userIcon from "../../assets/image/profile-user.png";
  import { FaRegUserCircle } from "react-icons/fa";
  import { RiLockPasswordLine } from "react-icons/ri";
  import NimLink from "../../components/link";
  
  function SignIn(props) {
    return (
      <Container>
        <br />
        <br />
        <Grid
          container
          direction="row"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid xs={12} md={4} item>
            <Box>
              <Grid container direction="column">
                <Grid item>
                  <Box sx={{ backgroundColor: "#2196f3", padding: "12px" }}>
                    <Grid
                      container
                      spacing={1}
                      alignItems="center"
                      justifyContent={"space-around"}
                      direction="row"
                    >
                      <Grid item>
                        <Avatar src={userIcon} alt="user" />
                      </Grid>
                      <Grid xs={10} item>
                        <Typography color={"#fff"} variant="h6">
                          Sign-in
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item>
                  <form>
                    <Grid container spacing={2} direction="column">
                      <Grid item>
                        <TextField
                          variant="standard"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment>
                                <FaRegUserCircle />
                                &nbsp;
                              </InputAdornment>
                            ),
                          }}
                          label="username"
                          fullWidth
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type={"password"}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment>
                                <RiLockPasswordLine />
                                &nbsp;
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                          label="password"
                          fullWidth
                        />
                      </Grid>
                      <Grid item>
                        <Button variant="outlined" fullWidth>
                          Sign-in
                        </Button>
                      </Grid>
                      <Grid item>
                        <NimLink to="/candidate/reset">Forgot password?</NimLink>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );
  }
  
  export default SignIn;
  