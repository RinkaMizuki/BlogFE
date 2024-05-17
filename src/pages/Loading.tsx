import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <HashLoader
      color="#948e99"
      className="absolute left-1/2 top-1/2 z-50" style={{
        transform: "translate(-50%,-50%)"
      }}
      size="80"
    />
  )
};

export default Loading;
