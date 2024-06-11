import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../components/common/Button";
import ListItem from "../components/ListItem";

import { getSavedNoteInfo } from "../utils/getNoteInfo";

import { ListItemProps } from "../types/listProps";

function ListPage() {
  const navigate = useNavigate();
  const noteInfo = getSavedNoteInfo();

  return (
    <ListPageWrapper>
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

  height: 32rem;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
