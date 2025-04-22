import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../types/post";
import { format } from "date-fns";
import DOMPurify from "dompurify";

export default function ArticleDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        // await new Promise((resolve) => setTimeout(resolve, 5000));

        const response = await fetch(
          `https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`
        );
        const data = await response.json();
        setPost(data.post);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-lg">読み込み中...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col max-w-[800px] mt-12 mx-auto">
        <p>記事が見つかりませんでした。</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col max-w-[800px] mt-12 mx-auto">
      <img src={post.thumbnailUrl} alt={post.title} />
      <div className="flex flex-col gap-4">
        <div className="flex justify-between p-2">
          <div className="text-gray-500">
            {format(new Date(post.createdAt), "yyyy/M/d")}
          </div>
          <div className="flex gap-2">
            {post.categories.map((category, index) => (
              <span
                key={index}
                className="border border-blue-300 text-blue-500 p-1 rounded-md"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
        <div className="text-left">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p
            className="mt-6"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.content),
            }}
          />
        </div>
      </div>
    </div>
  );
}
