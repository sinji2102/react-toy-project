import moment from "moment";

import { getSavedNoteInfo } from "../utils/getNoteInfo";

const noteInfo = getSavedNoteInfo();

export const handleEdit = (idx: number, title: string, body: string) => {
  noteInfo[idx].title = title;
  noteInfo[idx].body = body;
  noteInfo[idx].updatedAt = moment().format("YYYY-MM-DD HH:mm:ss");

  localStorage.setItem("noteInfo", JSON.stringify(noteInfo));
};

export const handleDelete = (idx: number) => {
  noteInfo.splice(idx, 1);
  localStorage.setItem("noteInfo", JSON.stringify(noteInfo));
};

// 파일 이름 추천 받습니다........... ^__^
