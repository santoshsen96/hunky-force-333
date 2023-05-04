import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import "../CSS/WatchList.css";

const WatchList = () => {
  const { watches } = useSelector((store) => store.watchReducer);

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
          <div className="card" key={item.id}>
            <div className="card-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="category"> {item.brand} </div>
            <div className="heading">
              {" "}
              {item.title}
              <div className="author"> ${item.price}</div>
            </div>
          </div>
        );
      })}
    </SimpleGrid>
  );
};

export default WatchList;
