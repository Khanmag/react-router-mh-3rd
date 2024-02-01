import { useEffect, useState } from "react";

const PostsPage = () => {
  const [postData, setPostData] = useState([])
  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts/?data=1&page=5")
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
        postData.length && postData.map( item => (
          <p key={item.id}>{item.title}</p>
        ))
      }

    </div>
  );
};

export default PostsPage;
