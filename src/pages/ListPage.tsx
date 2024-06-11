import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../components/common/Button";
import ListItem from "../components/ListItem";

import { getSavedNoteInfo } from "../utils/getNoteInfo";
import { handleUpdate, handleCreate } from "../utils/handle";

import { ListItemProps } from "../types/listProps";

function ListPage() {
  const navigate = useNavigate();
  const noteInfo = getSavedNoteInfo();

  return (
    <ListPageWrapper>
      <BtnContainer>
        <Dropdown
          type="button"
          onClick={() => {
            handleCreate();
            navigate("/");
          }}
        >
          생성순
        </Dropdown>
        <Dropdown
          type="button"
          onClick={() => {
            handleUpdate();
            navigate("/");
          }}
        >
          수정순
        </Dropdown>
      </BtnContainer>

      <ListContainer>
        {noteInfo.map((item: ListItemProps) => (
          <ListItem key={item.id} {...item} />
        ))}
      </ListContainer>
      <Button
        width="15rem"
        height="5rem"
        margin="2rem 0 0 55rem"
        buttonColor="#226597"
        onClick={() => navigate("/create")}
      >
        Create Note
      </Button>
    </ListPageWrapper>
  );
}

export default ListPage;

const ListPageWrapper = styled.section`
  display: flex;
  flex-direction: column;

  margin: 3rem;
`;

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;

  height: 30rem;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BtnContainer = styled.section`
  display: flex;

  margin-bottom: 1rem;
`;

const Dropdown = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;

  width: 7rem;
  height: 2rem;
  margin-left: 1rem;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 0.3rem;
`;
