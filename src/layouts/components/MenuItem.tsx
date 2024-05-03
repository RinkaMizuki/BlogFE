import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

interface Mode {
  toggleColorMode: () => void;
  handleClose: () => void;
  mode: string;
}

const MenuItem = ({ toggleColorMode, mode, handleClose }: Mode) => {
  return (
    <Box sx={{
      display: 'flex',
      marginTop: "70px",
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100%',
      gap: '20px',
      position: 'relative',
    }}>
      <Typography sx={{
        fontSize: "25px",
        fontWeight: "bold",
        cursor: 'pointer',
        marginBottom: "20px"
      }}>Group H</Typography>
      <Link to='/' onClick={handleClose}>
        Blog
      </Link>
      <Link to='/projects' onClick={handleClose}>
        Projects
      </Link>
      <Link to='/about' onClick={handleClose}>
        About
      </Link>
      <Link to='/newsletter' onClick={handleClose}>
        Newsletter
      </Link>
      <Box
        sx={{
          marginTop: "30px",
          paddingTop: '0.5vw',
          paddingBottom: '0.5vw',
          paddingLeft: '1vw',
          paddingRight: '1vw',
          display: 'flex',
          borderRadius: "29px",
          gap: "12px",
          bgcolor: 'background.bgToggle'
        }}
      >
        <Button
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
            maxWidth: "24px",
            height: "24px",
            minWidth: "0",
            borderRadius: "20px",
            cursor: "pointer",
            padding: "0",
          }}
          onClick={toggleColorMode}
        >
          {mode === 'dark' ? <Box sx={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: "10px",
            borderRadius: "20px",
            bgcolor: "background.default",
            minHeight: "24px",
            minWidth: "24px",
          }}>
            <span style={{
              minHeight: "2vw",
              minWidth: "2vw",
            }}></span>
          </Box> : <svg xmlns="http://www.w3.org/2000/svg" style={{
            minHeight: "2vw",
            minWidth: "2vw",
          }} width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 19.25C8 19.25 4.75 16 4.75 12C4.75 8 8 4.75 12 4.75C16 4.75 19.25 8 19.25 12C19.25 16 16 19.25 12 19.25ZM12 6.25C8.83 6.25 6.25 8.83 6.25 12C6.25 15.17 8.83 17.75 12 17.75C15.17 17.75 17.75 15.17 17.75 12C17.75 8.83 15.17 6.25 12 6.25Z" fill="white" />
            <path d="M12 22.96C11.45 22.96 11 22.55 11 22V21.92C11 21.37 11.45 20.92 12 20.92C12.55 20.92 13 21.37 13 21.92C13 22.47 12.55 22.96 12 22.96ZM19.14 20.14C18.88 20.14 18.63 20.04 18.43 19.85L18.3 19.72C17.91 19.33 17.91 18.7 18.3 18.31C18.69 17.92 19.32 17.92 19.71 18.31L19.84 18.44C20.23 18.83 20.23 19.46 19.84 19.85C19.65 20.04 19.4 20.14 19.14 20.14ZM4.86 20.14C4.6 20.14 4.35 20.04 4.15 19.85C3.76 19.46 3.76 18.83 4.15 18.44L4.28 18.31C4.67 17.92 5.3 17.92 5.69 18.31C6.08 18.7 6.08 19.33 5.69 19.72L5.56 19.85C5.37 20.04 5.11 20.14 4.86 20.14ZM22 13H21.92C21.37 13 20.92 12.55 20.92 12C20.92 11.45 21.37 11 21.92 11C22.47 11 22.96 11.45 22.96 12C22.96 12.55 22.55 13 22 13ZM2.08 13H2C1.45 13 1 12.55 1 12C1 11.45 1.45 11 2 11C2.55 11 3.04 11.45 3.04 12C3.04 12.55 2.63 13 2.08 13ZM19.01 5.99C18.75 5.99 18.5 5.89 18.3 5.7C17.91 5.31 17.91 4.68 18.3 4.29L18.43 4.16C18.82 3.77 19.45 3.77 19.84 4.16C20.23 4.55 20.23 5.18 19.84 5.57L19.71 5.7C19.52 5.89 19.27 5.99 19.01 5.99ZM4.99 5.99C4.73 5.99 4.48 5.89 4.28 5.7L4.15 5.56C3.76 5.17 3.76 4.54 4.15 4.15C4.54 3.76 5.17 3.76 5.56 4.15L5.69 4.28C6.08 4.67 6.08 5.3 5.69 5.69C5.5 5.89 5.24 5.99 4.99 5.99ZM12 3.04C11.45 3.04 11 2.63 11 2.08V2C11 1.45 11.45 1 12 1C12.55 1 13 1.45 13 2C13 2.55 12.55 3.04 12 3.04Z" fill="white" />
          </svg>}
        </Button>
        <Button
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: "center",
            maxWidth: "24px",
            height: "24px",
            minWidth: "0",
            borderRadius: "20px",
            cursor: "pointer",
            padding: "0"
          }}
          onClick={toggleColorMode}>
          {mode === 'dark' ? <svg style={{
            minHeight: "2vw",
            minWidth: "2vw",
          }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M11.9794 22.241L11.9794 22.2409L11.9723 22.2406C6.62041 22.0017 2.15041 17.686 1.77876 12.4447L1.77872 12.4442C1.45435 7.94125 4.05841 3.72964 8.26292 1.9614C8.81553 1.73167 9.19107 1.72373 9.4307 1.77165C9.67013 1.81954 9.81779 1.93194 9.90031 2.01741L9.90025 2.01746L9.90646 2.02367C9.99122 2.10843 10.0995 2.25509 10.1442 2.48454C10.1888 2.71296 10.1793 3.06939 9.95184 3.58991L9.95134 3.59107C9.46363 4.71491 9.21956 5.91384 9.23002 7.1434C9.25182 11.8463 13.1487 15.8185 17.8985 16.0097C18.5887 16.0414 19.2653 15.9881 19.9174 15.8724L19.9195 15.872C20.5024 15.7661 20.8652 15.8384 21.0845 15.9351C21.3035 16.0317 21.4219 16.1714 21.4846 16.2729C21.5494 16.3777 21.6233 16.5483 21.6141 16.7885C21.605 17.0286 21.511 17.3863 21.1582 17.8625L21.1564 17.865C19.1319 20.6343 15.9129 22.2501 12.46 22.2501C12.2876 22.2501 12.1323 22.25 11.9794 22.241ZM2.27119 12.4044L2.27128 12.4057C2.62975 17.4243 6.89952 21.5182 11.987 21.7396C15.4443 21.9073 18.7243 20.3307 20.7433 17.5757L20.7433 17.5757L20.7469 17.5707C20.9192 17.3294 21.0111 17.1411 21.0582 17.0157L21.2838 16.4141L20.6452 16.3432C20.514 16.3286 20.3032 16.3182 19.9974 16.3787C19.3055 16.5016 18.5833 16.549 17.87 16.5205L17.8699 16.5205C12.8529 16.321 8.74922 12.1062 8.72001 7.15865C8.7202 5.84669 8.97651 4.58694 9.49652 3.40409C9.62394 3.1228 9.65274 2.91939 9.66615 2.81213L9.7364 2.25011H9.17001C9.00018 2.25011 8.77391 2.2891 8.46583 2.41936C4.46093 4.1015 1.97638 8.11911 2.27119 12.4044Z" stroke="#090D1F" />
          </svg> :
            <Box sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: "10px",
              borderRadius: "20px",
              bgcolor: "background.default",
              minHeight: "24px",
              minWidth: "24px",
            }}>
              <span style={{
                minHeight: "2vw",
                minWidth: "2vw",
              }}></span>
            </Box>
          }
        </Button>
      </Box>
      <Button
        sx={{
          marginTop: "150px"
        }}
        onClick={handleClose}
      >
        <CloseIcon sx={{
          color: mode === 'light' ? "#090D1F" : "#ffffff"
        }} />
      </Button>
    </Box >
  )
};

export default MenuItem;
