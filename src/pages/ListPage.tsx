import styled from "styled-components";

import ListItem from "../components/ListItem";
import Button from "../components/common/button";

const dummyList = [
  {
    id: 1,
    title: "제목1",
    body: "내용입니다!!",
    createdAt: 221010,
    updatedAt: 221012,
  },
  {
    id: 2,
    title: "제목2",
    body: "2번 내용입니다!! 말줄임표 확인 말줄임표 확인 말줄임표 확인 말줄임표 확인 말줄임  표 확인 말줄임표 확인 말줄임표 확인",
    createdAt: 221010,
    updatedAt: 221012,
  },
  {
    id: 3,
    title: "제목3",
    body: "내용입니다!!",
    createdAt: 221010,
    updatedAt: 221012,
  },
  {
    id: 4,
    title: "제목4",
    body: "2번 내용입니다!!",
    createdAt: 221010,
    updatedAt: 221012,
  },
];

function ListPage() {
  return (
    <ListPageWrapper>
      <ListContainer>
        {dummyList.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </ListContainer>
      <Button
        width="15rem"
        height="5rem"
        margin="2rem 0 0 55rem"
        buttonColor="#226597"
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
