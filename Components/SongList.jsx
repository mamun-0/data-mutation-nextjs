"use client";
import { gql, useMutation, useQuery } from "urql";
import { DELETE_SONG } from "@/queries/song";
import { toast } from "react-toastify";
const Songs = gql`
  query {
    songs {
      id
      title
    }
  }
`;
function SongList() {
  const [result, reexecuteQuery] = useQuery({
    query: Songs,
  });
  const [deletResult, executeMutation] = useMutation(DELETE_SONG);
  if (result.fetching) return <div>Loading...</div>;
  console.log(result);
  async function handleDelete(id) {
    const confirm = window.confirm(
      "Are you sure you want to delete this song?"
    );
    if (confirm) {
      const variables = { id };
      const response = await executeMutation(variables);
      if (response.error) {
        toast.error("Failed to delete song");
      } else {
        toast.success("Song deleted successfully");
        reexecuteQuery({ requestPolicy: "network-only" });
      }
    }
  }
  return (
    <div>
      <h2 className="text-center text-2xl my-2">Our Songs List</h2>
      <ul className="p-2 text-xl space-y-2 mx-3">
        {result.data.songs.map((song, idx) => (
          <div className="flex justify-between" key={song.id}>
            <li className="flex-1 shadow-md border border-gray-300 p-2">
              {`${idx + 1}. `}
              {song.title}
            </li>
            <button
              className="bg-red-500 p-2 rounded-md text-lg mx-2 text-red-100"
              onClick={() => {
                handleDelete(song.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SongList;
