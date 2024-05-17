import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';
import { Button as ButtonMui } from "@mui/material"
import {
  Button
} from "shards-react";
import { TextField } from '@mui/material';
import { forgotPassword } from '../../services/authService';
import { ChangeEvent, ReactElement, ReactNode, cloneElement, forwardRef, useState } from 'react';
import { FadeLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import { toastOptions } from '../../pages/Register';
interface FadeProps {
  children: ReactElement;
  in?: boolean;
  onClick?: any;
  onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement, isAppearing: boolean) => void;
  ownerState?: any;
}

const Fade = forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null as any, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null as any, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {cloneElement(children, { onClick })}
    </animated.div>
  );
});

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "20px"
};

interface Props {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const ForgotPassword = ({ children, isOpen, handleClose }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const handleForgotPassowrd = async () => {
    try {
      setLoading(true)
      await forgotPassword('/forgot-password', {
        params: {
          email,
        }
      })
      setEmail('');
      handleClose();
      toast.info("Check your email to reset your password.", toastOptions);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex max-md:my-5'>
      {children}
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={isOpen}
        onClose={() => {
          handleClose()
        }}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
            <Typography sx={{
              textAlign: 'center',
              fontWeight: 'bold'
            }}>
              Forgot Password
            </Typography>
            <TextField
              disabled={loading}
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value.trim())}
              fullWidth
              id="standard-basic"
              label="Email"
              variant="standard"
              color="secondary"
              placeholder='Enter your email to verify forgot password'
            />
            {!loading ? <ButtonMui
              onClick={handleForgotPassowrd}
              sx={{
                width: "50%",
                alignSelf: "center",
              }}
              variant="outlined"
              size="medium"
              color='secondary'
            >
              Send Mail
            </ButtonMui> : <Box sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <FadeLoader color="#ce93d8" width={3} margin={-5} height={10} />
            </Box>
            }
          </Box>
        </Fade>
      </Modal>
    </div>
  )
};

export default ForgotPassword;
