import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const urls = [
  {
    id: 1,
    label: "home",
    path: "/",
  },
  {
    id: 2,
    label: "blog",
    path: "/blog",
  },
];

const Navigation = () => {
  const router = useRouter();
  return (
    <StyledNavigation>
      <ul>
        {urls.map((url) => {
          return (
            <li key={url.id}>
              <Link
                href={url.path}
                className={router.pathname === url.path ? "active" : ""}
              >
                {url.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: center;
  width: 85%;

  & ul {
    display: flex;
    list-style: none;

    & li {
      margin: 0 10px;
      font-size: 1.5rem;
      color: ${(props) => props.theme.palette.primary.main};
      text-transform: capitalize;
    }
  }

  /* TODO: ADD ACTIVE CLASS  */
  .active {
    color: ${(props) => props.theme.palette.common.white};
  }
`;
