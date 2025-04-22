import { Post } from "../types/post";

interface ArticleProps {
  post: Post;
}

export default function Article({ post }: ArticleProps) {
  return <div>{post.title}</div>;
}
