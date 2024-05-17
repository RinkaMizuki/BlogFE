import { Container, Row, Col } from "shards-react";
import { UserAccountDetail } from "../components/Account";
import { useAppSelector } from "../hooks";
import LoadingOverlay from 'react-loading-overlay-ts';
import Loading from "./Loading";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const userLogin = useAppSelector(state => state.auth.userInfo?.user) || null;
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <Container fluid className="main-content-container px-4 mt-12">
      <ToastContainer></ToastContainer>
      <Row>
        <Col lg="2" className="justify-center items-center flex">
        </Col>
        <Col lg="8" className="justify-center items-center flex">
          <LoadingOverlay
            className="flex-1"
            active={loading}
            spinner={<Loading />}
            text="Loading..."
          >
            <UserAccountDetail userDetails={userLogin} setLoading={setLoading} />
          </LoadingOverlay>
        </Col>
        <Col lg="2" className="justify-center items-center flex">
        </Col>
      </Row>
    </Container>
  )
};
export default Profile;