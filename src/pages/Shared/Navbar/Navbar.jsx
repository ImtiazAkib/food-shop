import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <>
      <div className="navbar fixed z-[100] shadow-sm text-white bg-[hsla(0,0%,4%,.25)]">
        <div className="flex-1">
          <a className="w-36">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal hidden lg:flex items-center gap-3 nav-link">
            <li>
              <Link className="">Services</Link>
            </li>
            <li>
              <Link className="">Projects</Link>
            </li>
            <li>
              <Link className="">Team</Link>
            </li>
            <li>
              <Link className="">Blog</Link>
            </li>
            <li>
              <Button info="Contact" />
            </li>
          </ul>
          <div className="drawer drawer-end lg:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-outline text-md md:px-8"
              >
                Menu
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu p-4 w-56 md:w-80 min-h-full bg-base-200 text-base-content">
                <li>
                  <Link>Services</Link>
                </li>
                <li>
                  <Link>Projects</Link>
                </li>
                <li>
                  <Link>Team</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
