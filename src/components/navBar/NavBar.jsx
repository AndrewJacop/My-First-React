("use client");
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { DarkThemeToggle } from "flowbite-react";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";

export default function NavBar() {
  return (
    <Navbar fluid>
      <Navbar.Brand href="#">
        <img src={reactLogo} className="h-6 mr-3 sm:h-9" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          My First React
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img="profile_pic.jpg" rounded />}
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
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
        <DarkThemeToggle className="mx-3" />
      </div>

      <Navbar.Collapse>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/">About</Link>
        </div>
        <div>
          <Link to="todo">to-do</Link>
        </div>
        <div>
          <Link to="signup">Sign up</Link>
        </div>
        <div>
          <Link to="signin">Sign in</Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
