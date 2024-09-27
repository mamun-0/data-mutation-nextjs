export const CREATE_SONG = `
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      title
    }
  }
`;
export const DELETE_SONG = `
  mutation DeleteSong($id: ID!) {
  deleteSong(id: $id) {
    id
  }
}
`;
