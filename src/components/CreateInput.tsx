import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import "moment/locale/ko";

import Input from "../components/common/Input";

import { getSavedNoteInfo } from "../utils/getNoteInfo";

function CreateInput() {
  const navigate = useNavigate();

  const titleElement = document.getElementById("title") as HTMLInputElement;
  const bodyElement = document.getElementById("body") as HTMLTextAreaElement;
  const createBtn = document.getElementById("create-btn") as HTMLButtonElement;

  const noteInfo = getSavedNoteInfo();

  if (titleElement && bodyElement && createBtn) {
    createBtn.addEventListener("click", () => {
      noteInfo.push({
        id: uuidv4(),
        title: (titleElement as HTMLInputElement).value,
        body: (bodyElement as HTMLTextAreaElement).value,
        // toLocaleString으로는 정렬이 안 된다.... 울고잇어요
        creatdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
      });

      localStorage.setItem("noteInfo", JSON.stringify(noteInfo));
      navigate("/");
    });
  } else {
    console.error("One or more elements not found");
  }

  return (
    <CreateInputWrapper>
      <Input
        id="title"
        placeholder="Enter Title"
        customHeight="5rem"
        customMargin="1rem 0 1rem 3rem"
        customPadding="1.3rem"
      />
      <Input
        id="body"
        placeholder="Contents"
        customHeight="20rem"
        customMargin="0 3rem"
        customPadding="1.3rem"
      />
    </CreateInputWrapper>
  );
}

export default CreateInput;

const CreateInputWrapper = styled.section`
  display: flex;

  flex-direction: column;
`;
