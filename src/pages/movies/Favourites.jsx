import { baseImgUrl } from "./../../env";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "../../redux/slices/favListSlice";

export default function Favourites() {
  const favList = useSelector((state) => state.favList.value);
  // console.log(favList);
  const dispatch = useDispatch();

  return (
    <>
      <div className="grid grid-cols-4 gap-2 mx-5 my-1 h-1/3">
        {favList.map((item) => (
          <>
            <Card
              className="h-auto max-w-sm"
              imgSrc={`${baseImgUrl}${item["poster_path"]}`}
              horizontal
            >
              <h6 className="font-bold tracking-tight text-md text-gray-90 dark:text-white">
                {item.title}
              </h6>

              <div className="flex flex-row mt-5">
                <Button
                  className="w-auto h-auto mx-2"
                  onClick={() => {
                    dispatch(removeFromFav(item));
                  }}
                >
                  <CiCircleRemove className="w-6 h-6 text-red-700" />
                </Button>

                <Link to={`/details/${item.id}`}>More...</Link>
              </div>
            </Card>
          </>
        ))}
      </div>
    </>
  );
}
