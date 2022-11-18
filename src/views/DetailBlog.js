import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
const DetailBlog = () => {
  let { id } = useParams();
  let history = useHistory();

  console.log(useParams());

  // console.log(`check id: `, id);
  const {
    data: dataBlogDetail,
    isLoading,
    isError,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/1`, false);
  const handleBackData = () => {
    history.push("/blog");
  };

  //console.log(dataBlogDetail);
  return (
    <>
      <div>
        <span onClick={handleBackData}>&lt;-- Back</span>
      </div>
      <div className="blog-detail">
        {dataBlogDetail && dataBlogDetail.length > 0 && (
          <>
            <div className="title">{dataBlogDetail.title}</div>
            <div className="content">{dataBlogDetail.body}</div>
          </>
        )}
      </div>
    </>
  );
};
export default DetailBlog;
