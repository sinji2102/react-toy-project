export const getSavedNoteInfo = () => {
    const notesJSON = localStorage.getItem("noteInfo");
    try {
      return notesJSON ? JSON.parse(notesJSON) : [];
    } catch (e) {
      return [];
    }
  };