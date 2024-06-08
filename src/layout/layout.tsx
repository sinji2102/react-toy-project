import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Layout() {
  return (
    <LayoutWrapper>
      <NoteLayout>
        <Outlet />
      </NoteLayout>
    </LayoutWrapper>
  );
}

export default Layout;

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.lightBlue};
  background-size: cover;
`;

const NoteLayout = styled.section`
  width: 80rem;
  height: 60rem;

  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 7rem;
`;
