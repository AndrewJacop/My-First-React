import { useEffect, useState } from "react";
import { axInstance, baseImgUrl } from "./../../env";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { Pagination } from "flowbite-react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToFav, removeFromFav } from "../../redux/slices/favListSlice";

export default function Movies() {
  const [mList, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const favList = useSelector((state) => state.favList.value);
  const favIdList = favList.map((f) => f.id);
  const dispatch = useDispatch();

  const onPageChange = (page) => setCurrentPage(Number(page));
  const isFav = (id) => {
    if (favIdList.includes(id)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    axInstance
      .get("movie/popular", {
        params: {
          page: currentPage,
        },
      })
      .then((res) => {
        // console.log(res.data.results);
        setList(res.data.results.slice(0, 12));
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <div>
        <div className="grid grid-cols-4 gap-2 mx-5 my-1">
          {mList.map((item) => (
            <>
              <Card
                className="h-auto max-w-sm"
                imgSrc={`${baseImgUrl}${item["poster_path"]}`}
                horizontal
              >
                <h6 className="font-bold tracking-tight text-md text-gray-90 dark:text-white">
                  {item.title}
                </h6>

                <div className="flex flex-row items-center justify-between w-40 mt-5">
                  {isFav(item.id) ? (
                    <Button
                      className="w-auto h-auto mx-2"
                      onClick={() => {
                        dispatch(removeFromFav(item));
                      }}
                    >
                      <FaHeart className="w-6 h-6 text-red-700" />
                    </Button>
                  ) : (
                    <Button
                      className="w-auto h-auto mx-2"
                      onClick={() => {
                        dispatch(addToFav(item));
                      }}
                    >
                      <FaRegHeart className="w-6 h-6 text-red-700" />
                    </Button>
                  )}
                  <Link to={`/details/${item.id}`}>More...</Link>
                </div>
              </Card>
            </>
          ))}
        </div>
        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={5}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </div>
    </>
  );
}
// return (
//   <>
//     <div className="container">
//       {mList.map((m, i) => {
//         <h1>{mList[i].title}</h1>;
//       })}
//     </div>
//   </>
// );

//  <Card className="max-w-sm" imgSrc={`baseImgUrl${movie.poster_path}`}>
//    <a href="#">
//      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
//      </h5>
//    </a>
//    <div className="mb-5 mt-2.5 flex items-center">
//      <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
//        5.0
//      </span>
//    </div>
//    <div className="flex items-center justify-between">
//      <span className="text-3xl font-bold text-gray-900 dark:text-white">
//        $599
//      </span>
//      <a
//        href="#"
//        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
//      >
//        Go to Details
//      </a>
//    </div>
//  </Card>;
