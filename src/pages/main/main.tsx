import { getDocs, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Post } from "./post";
import { Link } from "react-router-dom";

export interface IPost {
  id: string;
  title: string;
  userId: string;
  username: string;
  description: string;
}

export const Main = () => {
  const [showPosts, setShowPosts] = useState<boolean>(false);
  const [postsList, setPostsList] = useState<IPost[] | null>(null);
  const postsRef = collection(db, "posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as IPost[]
    );
  };

  useEffect(() => {
    if (auth.currentUser) {
      setShowPosts(true);
      getPosts();
    } else {
      setShowPosts(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (showPosts) {
    return (
      <div>
        {postsList?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    );
  } else {
    return <div><Link to="/login">Log in</Link> to see posts!</div>;
  }
};
