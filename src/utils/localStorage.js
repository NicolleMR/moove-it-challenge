export const getLocalStorageNotes = () => {
  const localNotes = localStorage.getItem("notes");
  return JSON.parse(localNotes || "[]");
};

export const updateLocalStorageNotes = (notes = []) => {
  const jsonNotes = JSON.stringify(notes);
  localStorage.setItem("notes", jsonNotes);
};
