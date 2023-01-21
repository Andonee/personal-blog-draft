import React from "react";
import Header from "components/Header";
import styled from "styled-components";

type LayoutPropsType = {
  children: React.ReactNode;
};

const Layout = (props: LayoutPropsType) => {
  return (
    <StyledLayout>
      <Header />
      <StyledMain>{props.children}</StyledMain>
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMain = styled.main`
  width: 60%;
`;
