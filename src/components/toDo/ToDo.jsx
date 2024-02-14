import { SiTodoist } from "react-icons/si";
import { Button, TextInput } from "flowbite-react";
import { useState } from "react";
import TaskItem from "./TaskItem";
import { useForm } from "react-hook-form";

export default function ToDo() {
  const [tList, setTList] = useState([]);
  const { register, getValues } = useForm();
  let counter = 0;
  return (
    <>
      <div className="flex flex-col max-w-md gap-4 m-auto">
        <h1 className="text-6xl font-bold text-center mb-11">
          <SiTodoist className="inline text-green-600" /> Todo list
        </h1>
        <div className="flex">
          <TextInput
            className="grow"
            id="task"
            type="text"
            placeholder="Enter a new Task here..."
            {...register("task")}
            shadow
          />
          <Button
            outline
            onClick={() => {
              setTList([...tList, getValues("task")]);
              counter++;
            }}
          >
            Add
          </Button>
        </div>
        <div>
          {tList.map((item) => (
            <>
              <TaskItem
                key={counter}
                title={item}
                removeFn={() => {
                  setTList(tList.filter((i) => i != item));
                }}
              />
              <hr />
            </>
          ))}
        </div>
      </div>
    </>
  );
}
