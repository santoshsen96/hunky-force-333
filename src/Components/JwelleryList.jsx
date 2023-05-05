import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import "../CSS/JwelleryList.css";

const JwelleryList = () => {
  const { jwellery } = useSelector((store) => store.jwelleryReducer);

  return (
    <SimpleGrid
      columns={[1, 2, 3, 4]}
      w="80%"
      m="auto"
      gap="20px"
      p="20px"
      marginBottom="10px"
    >
      {jwellery?.map((item) => {
        return (
          <div className="card-jwellery" key={item.id}>
            <div className="card-image-jwellery">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="category-jwellery"> {item.brand} </div>
            <div className="heading-jwellery">
              {" "}
              {item.title}
              <div className="author-jwellery"> ₹ {item.price}</div>
            </div>
          </div>
        );
      })}
    </SimpleGrid>
  );
};

export default JwelleryList;
