import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import "moment/locale/ko";
import { useRef, useEffect } from "react";

import Input from "../components/common/Input";
import { getSavedNoteInfo } from "../utils/getNoteInfo";

function CreateInput() {
  const navigate = useNavigate();

  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const createBtnRef = useRef<HTMLButtonElement>(null);

  const noteInfo = getSavedNoteInfo();

  useEffect(() => {
    const titleElement = titleRef.current;
    const bodyElement = bodyRef.current;
    const createBtn = createBtnRef.current;

    const handleCreate = () => {
      if (titleElement && bodyElement) {
        noteInfo.push({
          id: uuidv4(),
          title: titleElement.value,
          body: bodyElement.value,
          createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
          updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        });

        localStorage.setItem("noteInfo", JSON.stringify(noteInfo));
        navigate("/");
      }
    };

    if (createBtn) {
      createBtn.addEventListener("click", handleCreate);
    }

    return () => {
      if (createBtn) {
        createBtn.removeEventListener("click", handleCreate);
      }
    };
  }, [navigate, noteInfo]);

  return (
    <CreateInputWrapper>
      <Input
        id="title"
        ref={titleRef}
        placeholder="Enter Title"
        customHeight="5rem"
        customMargin="1rem 0 1rem 3rem"
        customPadding="1.3rem"
      />
      <Input
        id="body"
        ref={bodyRef}
        placeholder="Contents"
        customHeight="20rem"
        customMargin="0 3rem"
        customPadding="1.3rem"
      />
      <button id="create-btn" ref={createBtnRef} style={{ display: 'none' }}>
        Create
      </button>
    </CreateInputWrapper>
  );
}

export default CreateInput;

const CreateInputWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;
