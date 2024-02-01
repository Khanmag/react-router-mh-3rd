import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OnePostPage = () => {
  const params = useParams()
  // {id: }
  const [postData, setPostData] = useState(null)
  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts/" + params.id)
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
  }, [params.id])
  console.log();
  return (
    <div>
      {postData
        ? (
          <>
            <h1>{params.id || ""}</h1>
            <h2>{postData.title}</h2>
            <p>{postData.body}</p>
          </>
        )
        : <h2>Не смогли загрузить пост</h2>
      }
    </div>
  );
};

export default OnePostPage;
