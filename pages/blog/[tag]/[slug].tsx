import React from "react";
import styled from "styled-components";

const Post = () => {
  return <div>Post</div>;
};

export default Post;

const StyledPost = styled.div`
  color: ${(props) => props.theme.palette.secondary.main};
`;
