("use client");
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import { signMeOut } from "../../services/firebase/auth";
import { Toaster } from "react-hot-toast";
import { userContext } from "../../contexts/user";
import { useContext } from "react";
import blankProfilePic from "../../assets/blank.png";

export default function NavBar() {
  const { user, setUser } = useContext(userContext);

  return (
    <>
      <Navbar fluid>
        <Navbar.Brand href="#">
          <img src={reactLogo} className="h-6 mr-3 sm:h-9" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            My First React
          </span>
          <DarkThemeToggle className="mx-3" />
        </Navbar.Brand>
        {user.token && (
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={<Avatar img={blankProfilePic} rounded />}
            >
              <Dropdown.Header>
                <span className="block text-sm">Andrew Jacop</span>
                <span className="block text-sm font-medium truncate">
                  andrew@email.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={() => {
                  setUser({});
                  signMeOut();
                }}
              >
                Sign out
              </Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
          </div>
        )}

        <Navbar.Collapse>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="search">Search</Link>
          </div>
          <div>
            <Link to="todo">to-do</Link>
          </div>
          {!user.token ? (
            <>
              <div>
                <Link to="signup">Sign up</Link>
              </div>
              <div>
                <Link to="signin">Sign in</Link>
              </div>
            </>
          ) : (
            <div>
              <Link
                onClick={() => {
                  setUser({});
                  signMeOut();
                }}
              >
                Sign Out
              </Link>
            </div>
          )}
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Toaster />
      </div>
    </>
  );
}
