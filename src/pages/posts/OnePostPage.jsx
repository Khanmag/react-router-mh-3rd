import { useParams } from "react-router-dom";

const OnePostPage = () => {
  const params = useParams()
  // {id: }
  console.log();
  return (
    <div>
      <h1>{params.id || ""}</h1>
      
    </div>
  );
};

export default OnePostPage;
