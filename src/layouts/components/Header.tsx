import { Avatar, Box, Button, Modal, Tooltip, Zoom, useMediaQuery, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from "react-router-dom";
import { ColorModeContext } from "../../App";
import { MenuItem } from "./index";
import { useAppSelector } from "../../hooks";
import Menu from "../../components/Menu";
import ToggleMode from "../../components/ToggleMode";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "100vw",
  height: "100vh",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Header = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const { toggleColorMode, mode } = useContext(ColorModeContext)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userLogin = useAppSelector(state => state.auth?.userInfo?.user);
  const location = useLocation();

  return (
    <div className="inline-flex p-header w-full">
      <div className="h-[65px] flex justify-between flex-1 items-center">
        <div className="flex justify-center items-center">
          <Link to="/" className="font-medium text-header cursor-pointer">Group H</Link>
        </div>
        {matches ?
          <>
            <Button onClick={handleOpen} className="min-w-0 p-0 h-[24px]">
              <MenuIcon className={`${mode === 'light' ? "text-[#090D1F]" : "text-[#ffffff]"} `} />
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <MenuItem toggleColorMode={toggleColorMode} mode={mode} handleClose={handleClose} />
              </Box>
            </Modal>
          </>
          : <div className="flex justify-center items-center gap-8 font-thin text-lg">
            <Link to="/" className={`relative text-link ${mode === 'light' ? "after:bg-[#090D1F]" : "after:bg-[#ffffff]"} after:absolute after:content-['']  after:w-0 after:left-0 after:bottom-[-5px] after:h-1 after:block after:transition-all after:ease-in-out after:duration-200 hover:after:w-full  ${location.pathname === '/' ? 'after:w-full' : ''}`}>Blog</Link>
            <Link to="/projects" className={`relative text-link ${mode === 'light' ? "after:bg-[#090D1F]" : "after:bg-[#ffffff]"} after:absolute after:content-['']  after:w-0 after:left-0 after:bottom-[-5px] after:h-1 after:block after:transition-all after:ease-in-out after:duration-200 hover:after:w-full ${location.pathname === '/projects' ? 'after:w-full' : ''}`}>Projects</Link>
            <Link to="/about" className={`relative text-link ${mode === 'light' ? "after:bg-[#090D1F]" : "after:bg-[#ffffff]"} after:absolute after:content-['']  after:w-0 after:left-0 after:bottom-[-5px] after:h-1 after:block after:transition-all after:ease-in-out after:duration-200 hover:after:w-full  ${location.pathname === '/about' ? 'after:w-full' : ''}`}>About</Link>
            <Link to="/newsletter" className={`relative text-link ${mode === 'light' ? "after:bg-[#090D1F]" : "after:bg-[#ffffff]"} after:absolute after:content-['']  after:w-0 after:left-0 after:bottom-[-5px] after:h-1 after:block after:transition-all after:ease-in-out after:duration-200 hover:after:w-full ${location.pathname === '/newsletter' ? 'after:w-full' : ''}`}>Newsletter</Link>
            {!userLogin ? <Link to="/login" className={`relative text-link ${mode === 'light' ? "after:bg-[#090D1F]" : "after:bg-[#ffffff]"} after:absolute after:content-['']  after:w-0 after:left-0 after:bottom-[-5px] after:h-1 after:block after:transition-all after:ease-in-out after:duration-200 hover:after:w-full ${location.pathname === '/login' ? 'after:w-full' : ''}`}>Login</Link> :
              <Tooltip title={<Menu />} arrow TransitionComponent={Zoom}>
                <Avatar alt={userLogin.url} src={userLogin.avatar} sx={{
                  cursor: "pointer"
                }} />
              </Tooltip>
            }
            {!userLogin && <ToggleMode />}
          </div>}
      </div>
    </div>
  )
};

export default Header;
