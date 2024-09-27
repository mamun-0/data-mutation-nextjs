"use client";

import { useState } from "react";
import { useMutation } from "urql";
import { CREATE_SONG } from "@/queries/song";
import { toast } from "react-toastify";
import Link from "next/link";
function CreateSong() {
  const [songTitle, setSongTitle] = useState("");
  const [result, executeMutation] = useMutation(CREATE_SONG);
  async function handleSubmit(e) {
    e.preventDefault();

    const variables = {
      title: songTitle,
    };
    const response = await executeMutation(variables);
    if (response.error) {
      toast.error("Failed to create song");
    } else {
      toast.success("Song created successfully");
      setSongTitle("");
    }
  }
  return (
    <div className="p-3">
      <Link href="/">◀Back</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="text-xl font-semibold" htmlFor="title">
            Create A New Song
          </label>
          <br />
          <input
            onChange={(e) => {
              setSongTitle(e.target.value);
            }}
            value={songTitle}
            type="text"
            id="title"
            name="title"
            placeholder="Enter song title"
            className="border rounded-md border-gray-300 shadow-lg p-2 my-2"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateSong;
