import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "moment/locale/ko";

import Input from "../components/common/Input";
import Button from "./common/Button";

import { ListItemProps } from "../types/listProps";

interface EditInputProps extends ListItemProps {
  onEdit: (idx: number, title: string, body: string) => void;
  onDelete: (idx: number) => void;
}

function EditInput({ idx, title, body, onEdit, onDelete }: EditInputProps) {
  const titleRef = useRef<HTMLTextAreaElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);

  const navigate = useNavigate();

  return (
    <EditInputWrapper>
      <Input
        id="title"
        ref={titleRef}
        defaultValue={title}
        customHeight="5rem"
        customMargin="1rem 0 1rem 3rem"
        customPadding="1.3rem"
      />
      <Input
        id="body"
        ref={bodyRef}
        defaultValue={body}
        customHeight="20rem"
        customMargin="0 3rem"
        customPadding="1.3rem"
      />
      <ButtonContainer>
        <Button
          id="delete-btn"
          onClick={() => {
            onDelete(idx);
            navigate("/");
          }}
          width="10rem"
          height="5rem"
          margin="2rem 0 0 3rem"
          buttonColor="#EE4E4E"
        >
          Delete
        </Button>
        <Button
          id="edit-btn"
          onClick={() => {
            if (titleRef.current && bodyRef.current) {
              onEdit(idx, titleRef.current.value, bodyRef.current.value);
            }
            navigate("/");
          }}
          width="10rem"
          height="5rem"
          margin="2rem 0 0 50rem"
          buttonColor="#226597"
        >
          Done
        </Button>
      </ButtonContainer>
    </EditInputWrapper>
  );
}

export default EditInput;

const EditInputWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.section`
  display: flex;
`;
