import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";
import { UserDetail as UserDetailType } from "../../types";
import { ChangeEvent, useRef, useState } from "react";
import { updateUserProfile } from "../../services/userService";
import { useAppDispatch } from "../../hooks";
import { setUserInfo } from "../../redux/auth/authSlice";
import { ForgotPassword } from "../Model";

export interface UpdateState {
  avatar: File | null;
  username: string;
  phone: string;
}

const UserAccountDetail = ({ userDetails, setLoading }: { userDetails: UserDetailType | null, setLoading: (isLoading: boolean) => void }) => {
  const [userUpdateInfo, setUserUpdateInfo] = useState<UpdateState>({
    avatar: null,
    username: userDetails?.username || "",
    phone: userDetails?.phone || ""
  });
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [blob, setBlob] = useState("");
  const inputFileRef = useRef<HTMLInputElement>(null);
  const avatarRef = useRef<HTMLImageElement>(null);
  const dispatch = useAppDispatch();

  const handleUpdateProfile = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      if (userUpdateInfo?.avatar) {
        formData.append("avatar", userUpdateInfo?.avatar);
      }
      formData.append("username", userUpdateInfo.username);
      formData.append("phone", userUpdateInfo.phone);
      const userUpdatedInfo = await updateUserProfile("/profile/update", formData, {});
      dispatch(setUserInfo(userUpdatedInfo));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (e.target.files[0].name != userDetails?.avatar) {
      const blob = URL.createObjectURL(e.target.files[0]);
      setBlob(blob);
      setUserUpdateInfo(prevState => {
        const files = e.target?.files ?? []
        return {
          ...prevState,
          avatar: files[0]
        }
      })
    }
  }
  const handleUploadAvatar = () => {
    inputFileRef.current?.click();
  }
  return (
    <Card small className="flex-1">
      <CardHeader className="border-bottom" style={{
        background: "linear-gradient(to right, rgb(148, 142, 153), rgb(46, 20, 55))"
      }}>
        <h6 className="m-0 text-white font-semibold">Personal Infomation</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row className="max-md:flex-col-reverse">
            <Col md="8">
              <Form>
                <Row form>
                  <Col md="10" className="form-group">
                    <label htmlFor="username">User Name</label>
                    <FormInput
                      id="username"
                      placeholder="User name"
                      value={userUpdateInfo.username}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setUserUpdateInfo(prevState => {
                          return {
                            ...prevState,
                            username: e.target.value
                          }
                        })
                      }}
                    />
                  </Col>
                </Row>
                <Row form>
                  <Col md="10" className="form-group">
                    <label htmlFor="email">Email</label>
                    <FormInput
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      value={userDetails?.email}
                      autoComplete="email"
                    />
                  </Col>
                  <Col md="10" className="form-group">
                    <label htmlFor="phone">Number Phone</label>
                    <FormInput
                      type="text"
                      id="phone"
                      placeholder="Phone"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setUserUpdateInfo(prevState => {
                          return {
                            ...prevState,
                            phone: e.target.value
                          }
                        })
                      }}
                      value={userUpdateInfo.phone}
                      autoComplete="phone"
                    />
                  </Col>
                </Row>
                <Button className="mt-4" theme="secondary" type="button" onClick={handleUpdateProfile}>Update Account</Button>
              </Form>
            </Col>
            <Col md="4" className="flex justify-center items-center flex-col">
              <div className="mt-5 mx-auto flex-1 relative" onClick={handleUploadAvatar}>
                <input type="file" hidden ref={inputFileRef} onChange={handleAvatarChange} accept=".png, .jpeg, .jpg" />
                <figure className="w-[110px] h-[110px]">
                  {!blob ? <img
                    className="w-full h-full cursor-pointer box-border rounded-full border-2 border-transparent shadow-md transition-all ease-in-out duration-300 hover:shadow-custom object-cover"
                    src={userDetails?.avatar}
                    alt={userDetails?.url}
                  /> : <img src={blob} className="w-full h-full cursor-pointer box-border rounded-full border-2 border-transparent shadow-md transition-all ease-in-out duration-300 hover:shadow-custom object-cover" alt="avatar" ref={avatarRef} />}
                  <figcaption className="absolute top-0 w-full h-[110px] rounded-full opacity-0 bg-transparent transition-all ease-in-out duration-300 cursor-pointer hover:!opacity-100 !bg-black !bg-opacity-50">
                    <img src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png" className="absolute top-1/2 left-1/2 w-20 h-20" style={{
                      transform: "translate(-50%, -50%)",
                    }} />
                  </figcaption>
                </figure>
              </div>
              <ForgotPassword isOpen={open} handleClose={handleClose} children={<Button theme="secondary" type="button" onClick={handleOpen}>Forgot Password</Button>} />
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card >
  )
};

export default UserAccountDetail;
