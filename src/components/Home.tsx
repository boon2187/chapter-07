import React, { useState } from "react";
import { Post } from "../types/post";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  return <div>Home</div>;
}
