/* eslint-disable react/prop-types */
import { Button } from "flowbite-react";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";

export default function TaskItem(props) {
  const [checked, setCheck] = useState({
    value: false,
    color: "gray",
    style: "grow",
  });

  const updateCheck = () => {
    setCheck((prevState) => ({
      value: !prevState.value,
      color: prevState.value ? "gray" : "green",
      style: prevState.value ? "grow" : "line-through grow",
    }));
  };
  return (
    <div className="flex">
      <p className={checked.style}>{props.title}</p>
      <Button.Group>
        <Button color={checked.color} onClick={updateCheck}>
          <FaCheck />
        </Button>
        <Button color="gray" onClick={props.removeFn}>
          <IoClose />
        </Button>
      </Button.Group>
    </div>
  );
}
