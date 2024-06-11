import styled from "styled-components";

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
    body: "2번 내용입니다!!",
    createdAt: 221010,
    updatedAt: 221012,
  },
];

function ListPage() {
  return (
    <ListPageWrapper>
      리스트 페이지입니다~~
      <ListContainer></ListContainer>
    </ListPageWrapper>
  );
}

export default ListPage;

const ListPageWrapper = styled.section`
  display: flex;

  margin: 3rem;
`;

const ListContainer = styled.section`
  display: flex;
`;
