import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostsPage = () => {
  const [postData, setPostData] = useState([])
  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
          if (res.status === 200) return res.json()
          throw new Error("fetch error")
        })
        .then(data => {
          console.log(data);
          setPostData(data)
        })
    } catch (error) {
      console.error(error.message);
    }
  }, [])
  return (
    <div>
      {
        postData.length && postData.map(item => (
          <div key={item.id}>
            <Link to={`/posts/${item.id}`} >{item.title}</Link>
          </div>
        ))
      }

    </div>
  );
};

export default PostsPage;
