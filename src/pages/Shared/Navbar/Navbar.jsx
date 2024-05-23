import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar fixed z-[100]">
        <div className="flex-1">
          <a className="btn btn-outline">Logo</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal hidden lg:flex gap-3">
            <li>
              <Link className="btn btn-outline">Services</Link>
            </li>
            <li>
              <Link className="btn btn-outline">Projects</Link>
            </li>
            <li>
              <Link className="btn btn-outline">Team</Link>
            </li>
            <li>
              <Link className="btn btn-outline">Blog</Link>
            </li>
            <li>
              <Link className="btn btn-outline">Contact</Link>
            </li>
          </ul>
          <div className="drawer drawer-end lg:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
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
                {/* Sidebar content here */}
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
