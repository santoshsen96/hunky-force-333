import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import "../CSS/WatchList.css";
import { useNavigate } from "react-router";

const WatchList = () => {
  const { watches } = useSelector((store) => store.watchReducer);
  const navigate = useNavigate();

  return (
    <SimpleGrid
      columns={[1, 2, 4]}
      w="80%"
      m="auto"
      gap="30px"
      p="20px"
      marginBottom="10px"
    >
      {watches?.map((item) => {
        return (
          <div className="card-watches" key={item.id}>
            <div className="card-image-watches">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="category-watches"> {item.brand} </div>
            <div
              className="heading-watches"
              onClick={() => navigate(`/Watches/${item.id}`)}
            >
              {" "}
              {item.title}
              <div className="author-watches"> ${item.price}</div>
            </div>
          </div>
        );
      })}
    </SimpleGrid>
  );
};

export default WatchList;
