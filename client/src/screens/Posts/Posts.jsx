import { useState, useEffect } from "react";
import "./Posts.css";

import Post from "../../components/Post/Post";
import Search from "../../components/Search/Search";
import Layout from "../../components/Layout/Layout";
import { getPosts } from "../../services/posts";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts);
      setSearchResult(allPosts);
    };
    fetchPosts();
  }, []);
  const handleSearch = (event) => {
    event.preventDefault();
    const results = posts.filter((post) =>
      post.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResult(results);
  };
  const handleSubmit = (event) => event.preventDefault();

  return (
    <Layout>
      <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <div className="posts">
        {searchResult.map((post, index) => {
          return (
            <Post
              _id={post._id}
              name={post.name}
              imgURL={post.imgURL}
              price={post.price}
              key={index}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Posts;
