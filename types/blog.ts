export type PostType = {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  codepenHash?: string;
  codesandboxUrl?: string;
};

export type PostResponseData = {
  data: Array<{
    id: number;
    attributes: PostType;
  }>;
};
