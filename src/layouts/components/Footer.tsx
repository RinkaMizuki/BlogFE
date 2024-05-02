import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center gap-2 m-body mt-10 max-sm:flex-col max-sm:justify-center">
      <Link to='/'>© 2024</Link>
      <Link to='/'>Twitter</Link>
      <Link to='/'>LinkedIn</Link>
      <Link to='/'>Email</Link>
      <Link to='/'>Facebook</Link>
      <Link to='/'>Instagram</Link>
    </div>
  )
};

export default Footer;
