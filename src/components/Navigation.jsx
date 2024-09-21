import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="flex justify-around gap-4 bg-slate-900 text-sm text-white p-4 tracking-wider font-medium">
        <div>
          <Link to="/">Home Page Counter</Link>
        </div>
        <div>
          <Link to="/wishlist-page">Wishlist Page</Link>
        </div>
        <div>
          <Link to="/auth/register-page">Register Page</Link>
        </div>
        <div>
          <Link to="/profile/:username">Profile Page</Link>
        </div>
        <div>
          <Link to="/header-Page">Header</Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
