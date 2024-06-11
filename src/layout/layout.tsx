import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Layout() {
  return (
    <LayoutWrapper>
      <NoteLayout>
        <TitleWrapper>
          <LayoutTitle>Notes App</LayoutTitle>
          <Description>Take notes and never forget.</Description>
        </TitleWrapper>
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

  background-color: ${({ theme }) => theme.colors.beige};

  border-radius: 5rem;
`;

const TitleWrapper = styled.section`
  display: flex;
  flex-direction: column;

  margin: 7rem 0 0 4rem;
`;

const LayoutTitle = styled.section`
  ${({ theme }) => theme.fonts.Bold};
  font-size: 4rem;
`;

const Description = styled.section`
  margin-top: 0.5rem;
  ${({ theme }) => theme.fonts.Regular};
  font-size: 2rem;
`;
