import { useParams } from "react-router-dom"

const ArticleDetail = () => {
  const id = useParams();
  console.log(
    id
  );
  return (
    <div>ArticleDetails</div>
  )
}

export default ArticleDetail