import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Box, FormControlLabel, Switch, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutUser } from '../../redux/auth/authAction';
import { toast } from 'react-toastify';
import { toastOptions } from '../../pages/Register';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ColorModeContext } from '../../App';

const Menu = () => {

  const dispatch = useAppDispatch()
  const userId = useAppSelector(state => state.auth.userInfo?.user.id)
  const navigate = useNavigate()
  const { toggleColorMode, mode } = useContext(ColorModeContext)

  const handleLogoutUser = () => {
    dispatch(logoutUser(userId)).then((res) => {
      navigate('/login')
      toast.info(res.payload.message, toastOptions)
    })
  }

  return (
    <Box sx={{
      minWidth: "100px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      alignItems: "flex-start",
      ".css-16viowy-MuiFormControlLabel-root": {
        marginLeft: "-8px"
      }
    }}>
      <div>
        <div onClick={() => { navigate('/profile') }}>
          <Box sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "20px",
            cursor: "pointer"
          }}>
            <AccountBoxIcon sx={{
              marginLeft: "-1px"
            }} />
            <Typography sx={{
              fontSize: "16px"
            }}>Profile</Typography>
          </Box>
        </div>
      </div>
      <div onClick={handleLogoutUser}>
        <Box sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "20px",
          cursor: "pointer"
        }}>
          <LogoutIcon />
          <Typography sx={{
            fontSize: "16px"
          }}>Logout</Typography>
        </Box>
      </div>
      <FormControlLabel
        onChange={toggleColorMode}
        checked={mode === "dark"}
        control={
          <Switch name="Mode"
            sx={{
              ".MuiSwitch-thumb": {
                bgcolor: mode === "dark" ? 'ochre.dark' : 'ochre.light'
              },
              ".css-1ya4y88-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
                bgcolor: mode === "dark" ? 'ochre.dark' : "unset"
              },
              ".css-1yjjitx-MuiSwitch-track": {
                bgcolor: mode === "light" ? 'ochre.light' : "unset"
              }
            }}
          />
        }
        sx={{
          ".MuiFormControlLabel-label": {
            marginLeft: "-4px"
          }
        }}
        label={mode.charAt(0).toUpperCase() + mode.slice(1)}
      />
    </Box>
  )
};

export default Menu;
