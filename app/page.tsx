import Image from "next/image";
import Post from "./components/Post";
import { DataStore } from "@aws-amplify/datastore";
import { Blog } from "./models";

export default async function Home() {
  const posts = await DataStore.query(Blog);
  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Welcome to Gynescope </p>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        );
      })}
    </main>
  );
}
