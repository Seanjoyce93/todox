import { TrashIcon } from "@heroicons/react/16/solid";
import React from "react";

type TodoProps = {
  text: string;
  completed: boolean;
};

export default function todo(props: TodoProps) {
  const { text, completed } = props;
  return (
    <div className="flex flex-row items-center rounded shadow-md p-3 ">
      <div className="flex flex-row gap-2 items-center flex-grow">
        <input type="checkbox" checked={completed} className="w-5 h-5"></input>
        <label>{text}</label>
      </div>

      <button>
        <TrashIcon className="h-6 w-6 text-red-600" />
      </button>
    </div>
  );
}
