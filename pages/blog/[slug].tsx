import React from "react";
import styled from "styled-components";
import Head from "next/head";
import axios from "axios";
import { publicRuntimeConfig } from "next.config";
import { PostType } from "../../types/blog";
import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import Codepen from "react-codepen-embed";

type Post = {
  post: PostType;
};

const Post = (props: Post) => {
  const { content, publishedAt, title, codepenHash, codesandboxUrl } =
    props.post;
  console.log("props", props, codesandboxUrl);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledContent>
        <ReactMarkdown children={content} />
        {codepenHash && (
          <StyledEmbedded>
            <Codepen
              hash={codepenHash}
              user="Andonee"
              height={600}
              preview={false}
            />
          </StyledEmbedded>
        )}
        {codesandboxUrl && (
          <StyledUrl>
            <a href={codesandboxUrl} target="__blank">
              See on Codesandbox
            </a>
          </StyledUrl>
        )}
      </StyledContent>
    </>
  );
};

export default Post;

// const StyledPost = styled.div`
//   /* color: ${(props) => props.theme.palette.primary.main}; */
// `;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking", // can also be true or 'blocking'
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await axios(
    `${publicRuntimeConfig!.NEXT_PUBLIC_API_URL}/api/posts?filters[slug][$eq]=${
      context.params!.slug
    }`
  );

  const data: PostType = response.data.data[0].attributes;

  return {
    props: {
      post: data,
    },
  };
};

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  & > p {
    margin: 10px auto;
  }

  & > div {
    margin: 10px auto;
    width: 100%;
  }

  & > pre {
    margin: 100px;
    background: #ffeff043;
    word-wrap: break-word;
    box-decoration-break: clone;
    padding: 0.1rem 0.3rem 0.2rem;
    border-radius: 0.2rem;
  }

  /* For all <code> */
  code {
    font-family: MyFancyCustomFont, monospace;
    font-size: inherit;
  }
`;

const StyledEmbedded = styled.div`
  margin-top: 50px;
`;

const StyledUrl = styled.div`
  background-color: rgb(47, 47, 47);
  padding: 10px;
  text-align: center;
  letter-spacing: 1px;

  & a:hover {
    color: ${(props) => props.theme.palette.primary.main};
    transition: all 0.2s;
  }
`;
