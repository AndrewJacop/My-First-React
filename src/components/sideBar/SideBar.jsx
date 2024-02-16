"use client";

import { Sidebar } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export default function SideBar() {
  const count = useSelector((state) => state.favList.value.length);
  // console.log(count);
  return (
    <Sidebar className="flex-none h-screen">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={FaHome}>
            <Link to="/">Home</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiArrowSmRight}>
            <Link to="signin">Sign In</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiTable}>
            <Link to="signup">Sign Up</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiViewBoards}>
            <Link to="todo">To-Do</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={MdLocalMovies}>
            <Link to="movies">Movies</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={FaSearch}>
            <Link to="search">Search</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={FaHeart} label={count}>
            <Link to="fav">Favorites</Link>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiChartPie}
            label="Pro"
            labelColor="dark"
          >
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} label="3">
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
