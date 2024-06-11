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
      <Dropdown>
        정렬
        <DropdownBox
          className="DropdownBox"
          type="button"
          onClick={() => {
            handleCreate();
            navigate("/");
          }}
        >
          생성순
        </DropdownBox>
        <DropdownBox
          className="DropdownBox"
          type="button"
          onClick={() => {
            handleUpdate();
            navigate("/");
          }}
        >
          수정순
        </DropdownBox>
      </Dropdown>

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

const Dropdown = styled.section`
  position: relative;
  display: inline-block;
  text-align: center;
  justify-content: center;

  width: 7rem;
  height: 3rem;
  margin: 0 0 1rem 1rem;

  background-color: ${({ theme }) => theme.colors.white};

  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    .DropdownBox {
      display: flex;
    }
  }
`;

const DropdownBox = styled.button`
  display: none;
  text-align: center;
  justify-content: center;

  width: 7rem;
  height: 3rem;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 0.3rem;

  z-index: 1;
`;
