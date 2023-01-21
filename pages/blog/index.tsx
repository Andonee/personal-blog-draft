import React from "react";
import Head from "next/head";
import axios from "axios";
import { publicRuntimeConfig } from "next.config";
import { PostResponseData } from "../../types/blog";
import PostTile from "components/PostTile";
import styled from "styled-components";

type BlogType = {
  posts: PostResponseData;
};

const Blog = (props: BlogType) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <StyledPosts>
        <StyledTitle>All posts</StyledTitle>
        {props.posts.data.map((post) => (
          <PostTile {...post.attributes} key={post.id} />
        ))}
      </StyledPosts>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const response = await axios(
    `${publicRuntimeConfig!.NEXT_PUBLIC_API_URL}/api/posts`
  );
  const data: PostResponseData = response.data;

  return {
    props: {
      posts: data,
    },
  };
}

const StyledTitle = styled.h2`
  font-size: 2.5rem;
  margin-left: 5px;
`;

const StyledPosts = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-top: 100px;
`;
