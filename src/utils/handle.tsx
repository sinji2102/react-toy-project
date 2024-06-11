import moment from "moment";

import { getSavedNoteInfo } from "../utils/getNoteInfo";

export const handleEdit = (idx: number, title: string, body: string) => {
  const noteInfo = getSavedNoteInfo();
  noteInfo[idx].title = title;
  noteInfo[idx].body = body;
  noteInfo[idx].updatedAt = moment().format("YYYY-MM-DD HH:mm:ss");

  localStorage.setItem("noteInfo", JSON.stringify(noteInfo));
};

export const handleDelete = (idx: number) => {
  const noteInfo = getSavedNoteInfo();
  noteInfo.splice(idx, 1);
  localStorage.setItem("noteInfo", JSON.stringify(noteInfo));
};

export const handleCreate = () => {
  const noteInfo = getSavedNoteInfo();
  noteInfo.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  localStorage.setItem("noteInfo", JSON.stringify(noteInfo));
};

export const handleUpdate = () => {
  const noteInfo = getSavedNoteInfo();
  noteInfo.sort((a, b) => {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  });

  localStorage.setItem("noteInfo", JSON.stringify(noteInfo));
};

// 파일 이름 추천 받습니다........... ^__^
