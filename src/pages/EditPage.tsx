import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import EditInput from "../components/EditInput";
import Button from "../components/common/Button";

import { getSavedNoteInfo } from "../utils/getNoteInfo";
import { handleEdit, handleDelete } from "../utils/handle";

import { ListItemProps } from "../types/listProps";

function EditPage() {
  const { noteId } = useParams();
  const navigate = useNavigate();

  const noteInfo = getSavedNoteInfo();

  return (
    <EditPageWrapper>
      <Button
        width="10rem"
        height="4rem"
        margin="2rem 0 0 3rem"
        buttonColor="#EEEEEE"
        fontColor="black"
        onClick={() => navigate("/")}
      >
        ⬅️ Back
      </Button>
      {noteInfo.map((item: ListItemProps, idx: number) => {
        if (item.id === noteId) {
          return (
            <EditInput
              key={item.id}
              idx={idx}
              onEdit={handleEdit}
              onDelete={handleDelete}
              {...item}
            />
          );
        }
        return null;
      })}
    </EditPageWrapper>
  );
}

export default EditPage;

const EditPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
