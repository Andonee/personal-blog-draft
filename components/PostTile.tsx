import React from "react";
import styled from "styled-components";
import { PostType } from "../types/blog";
import Link from "next/link";

const PostTile = (props: PostType) => {
  const { title, publishedAt, slug } = props;

  const publishDate = new Date(publishedAt).toISOString().split("T")[0];
  return (
    <StyledPostTile href={`blog/${slug}`}>
      <h2>{title}</h2>
      <p>{publishDate}</p>
    </StyledPostTile>
  );
};

export default PostTile;

const StyledPostTile = styled(Link)`
  margin: 10px 0;
  transition: all 0.2s ease-in;
  cursor: pointer;
  padding: 0 10px;

  &:hover {
    text-decoration: underline;
  }
`;
