import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko";

import Input from "../components/common/Input";

import { getSavedNoteInfo } from "../utils/getNoteInfo";

import { ListItemProps } from "../types/listProps";

function EditInput({ idx, title, body }: ListItemProps) {
  const navigate = useNavigate();

  const titleElement = document.getElementById("title") as HTMLInputElement;
  const bodyElement = document.getElementById("body") as HTMLTextAreaElement;
  const editBtn = document.getElementById("edit-btn") as HTMLButtonElement;

  const noteInfo = getSavedNoteInfo();

  const index = typeof idx != "undefined" ? idx : 0;

  if (titleElement && bodyElement && editBtn) {
    editBtn.addEventListener("click", () => {
      noteInfo[index].title = (titleElement as HTMLInputElement).value;
      noteInfo[index].body = (bodyElement as HTMLTextAreaElement).value;
      noteInfo[index].updatedAt = moment().format("YYYY-MM-DD HH:mm:ss");

      localStorage.setItem("noteInfo", JSON.stringify(noteInfo));

      navigate("/");
    });
  } else {
    console.error("One or more elements not found");
  }

  return (
    <EditInputWrapper>
      <Input
        id="title"
        customHeight="5rem"
        customMargin="1rem 0 1rem 3rem"
        customPadding="1.3rem"
      >
        {title}
      </Input>
      <Input
        id="body"
        customHeight="20rem"
        customMargin="0 3rem"
        customPadding="1.3rem"
      >
        {body}
      </Input>
    </EditInputWrapper>
  );
}

export default EditInput;

const EditInputWrapper = styled.section`
  display: flex;

  flex-direction: column;
`;
