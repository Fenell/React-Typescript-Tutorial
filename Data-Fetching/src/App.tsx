import { useEffect, useState, type ReactNode } from "react";
import "./App.css";
import { get } from "./util/http";
import type { BlogPost } from "./components/BlogPosts";
import fetchingImg from "./assets/data-fetching.png";
import BlogPosts from "./components/BlogPosts";

interface RawDataBlogPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();

  useEffect(() => {
    const fetchPosts = async () => {
      const data = (await get(
        "http://jsonplaceholder.typicode.com/posts"
      )) as RawDataBlogPost[];

      const blogPosts: BlogPost[] = data.map((rawPost) => {
        return {
          id: rawPost.id,
          title: rawPost.title,
          text: rawPost.body,
        };
      });
      setFetchedPosts(blogPosts);
    };

    fetchPosts();
  }, []);

  let content: ReactNode;
  if (fetchedPosts) {
    content = <BlogPosts posts={fetchedPosts} />;
  }

  return (
    <main>
      <img src={fetchingImg} alt="img" />
      {content}
    </main>
  );
}

export default App;
