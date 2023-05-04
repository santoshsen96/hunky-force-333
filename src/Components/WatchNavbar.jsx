import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import "../CSS/WatchNavbar.css";
import { useSearchParams } from "react-router-dom";

const WatchNavbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [brands, setBrands] = useState(searchParams.getAll("brands") || []);
  const [collections, setCollections] = useState(
    searchParams.getAll("gender") || []
  );
  const [sort, setSort] = useState(searchParams.get("order") || "");
  const [width, setWidth] = useState(window.innerWidth);

  const BrandsFilter = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setBrands([...brands, name]);
    } else {
      let NewBrands = brands.filter((item) => item !== name);
      setBrands(NewBrands);
    }
  };

  const GenderFilter = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setCollections([...collections, name]);
    } else {
      let NewCollections = collections.filter((item) => item !== name);
      setCollections(NewCollections);
    }
  };

  const SortPrice = (e) => {
    e.preventDefault();
    setSort(e.target.name);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, [width]);

  useEffect(() => {
    let SearchObj = {
      brands,
      gender: collections,
    };
    sort && (SearchObj.order = sort);
    setSearchParams(SearchObj);
  }, [brands, sort, collections]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {width < 700 ? (
        // small screen navbar
        <Box p="20px" bg="#212529" color="white" textAlign={"left"}>
          <Menu>
            <MenuButton
              as={Button}
              variant={"none"}
              rightIcon={<AiFillCaretDown />}
            >
              Filter by
            </MenuButton>
            <MenuList color="black" textAlign={"left"} p="10px" w="100%">
              <Box>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant={"none"}
                    rightIcon={<AiFillCaretDown />}
                  >
                    BRANDS
                  </MenuButton>
                  <MenuList color="black" textAlign={"left"} p="10px">
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Citizen"
                          onChange={BrandsFilter}
                          checked={brands.includes("Citizen")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Citizen</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Emporio Armani"
                          onChange={BrandsFilter}
                          checked={brands.includes("Emporio Armani")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Emporio Armani</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Invicta"
                          onChange={BrandsFilter}
                          checked={brands.includes("Invicta")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Invicta</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Ben and Sons"
                          onChange={BrandsFilter}
                          checked={brands.includes("Ben and Sons")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Ben and Sons</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Tissot"
                          checked={brands.includes("Tissot")}
                          onChange={BrandsFilter}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Tissot</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Fossil"
                          checked={brands.includes("Fossil")}
                          onChange={BrandsFilter}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Fossil</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Diesel"
                          onChange={BrandsFilter}
                          checked={brands.includes("Diesel")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Diesel</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Lucin Piccard"
                          onChange={BrandsFilter}
                          checked={brands.includes("Lucin Piccard")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Lucin Piccard</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Casio"
                          onChange={BrandsFilter}
                          checked={brands.includes("Casio")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Casio</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Michael Kors"
                          onChange={BrandsFilter}
                          checked={brands.includes("Michael Kors")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Michael Kors</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Mavado"
                          onChange={BrandsFilter}
                          checked={brands.includes("Mavado")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Mavado</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Cabochon"
                          onChange={BrandsFilter}
                          checked={brands.includes("Cabochon")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Cabochon</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Mathey Tissot"
                          onChange={BrandsFilter}
                          checked={brands.includes("Mathey Tissot")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Mathey Tissot</Text>
                    </Flex>
                  </MenuList>
                </Menu>
              </Box>
              <Box>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant={"none"}
                    rightIcon={<AiFillCaretDown />}
                  >
                    COLLECTION
                  </MenuButton>
                  <MenuList color="black" textAlign={"left"} p="10px">
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Mens"
                          onChange={GenderFilter}
                          checked={collections.includes("Mens")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Men</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Womens"
                          onChange={GenderFilter}
                          checked={collections.includes("Womens")}
                        />
                        z<span className="checkmark"></span>
                      </label>
                      <Text>Women</Text>
                    </Flex>
                  </MenuList>
                </Menu>
              </Box>
              <Box>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant={"none"}
                    rightIcon={<AiFillCaretDown />}
                  >
                    COLOR
                  </MenuButton>
                </Menu>
              </Box>
              <Box>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant={"none"}
                    rightIcon={<AiFillCaretDown />}
                  >
                    PRICE
                  </MenuButton>
                </Menu>
              </Box>
              <Box>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant={"none"}
                    rightIcon={<AiFillCaretDown />}
                  >
                    SORT
                  </MenuButton>
                  <MenuList color="black" textAlign={"left"} p="10px">
                    <form className="form">
                      <label>None</label>
                      <input
                        id="01"
                        type="radio"
                        name=""
                        onChange={SortPrice}
                        checked={sort === ""}
                      />
                      <label>Ascending</label>
                      <input
                        id="01"
                        type="radio"
                        name="asc"
                        onChange={SortPrice}
                        checked={sort === "asc"}
                      />
                      <label>Descending</label>
                      <input
                        id="02"
                        type="radio"
                        name="desc"
                        onChange={SortPrice}
                        checked={sort === "desc"}
                      />
                    </form>
                  </MenuList>
                </Menu>
              </Box>
            </MenuList>
          </Menu>
        </Box>
      ) : (
        // large screen navbar
        <Flex
          justify={"space-evenly"}
          alignItems={"center"}
          p="20px"
          bg="#212529"
          color="white"
        >
          <Box>
            <Heading size={"md"}>Filter by:</Heading>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                variant={"none"}
                rightIcon={<AiFillCaretDown />}
              >
                BRANDS
              </MenuButton>
              <MenuList color="black" textAlign={"left"} p="10px">
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Citizen"
                      onChange={BrandsFilter}
                      checked={brands.includes("Citizen")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Citizen</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Emporio Armani"
                      onChange={BrandsFilter}
                      checked={brands.includes("Emporio Armani")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Emporio Armani</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Invicta"
                      onChange={BrandsFilter}
                      checked={brands.includes("Invicta")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Invicta</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Ben and Sons"
                      onChange={BrandsFilter}
                      checked={brands.includes("Ben and Sons")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Ben and Sons</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Tissot"
                      checked={brands.includes("Tissot")}
                      onChange={BrandsFilter}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Tissot</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Fossil"
                      checked={brands.includes("Fossil")}
                      onChange={BrandsFilter}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Fossil</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Diesel"
                      onChange={BrandsFilter}
                      checked={brands.includes("Diesel")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Diesel</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Lucin Piccard"
                      onChange={BrandsFilter}
                      checked={brands.includes("Lucin Piccard")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Lucin Piccard</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Casio"
                      onChange={BrandsFilter}
                      checked={brands.includes("Casio")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Casio</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Michael Kors"
                      onChange={BrandsFilter}
                      checked={brands.includes("Michael Kors")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Michael Kors</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Mavado"
                      onChange={BrandsFilter}
                      checked={brands.includes("Mavado")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Mavado</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Cabochon"
                      onChange={BrandsFilter}
                      checked={brands.includes("Cabochon")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Cabochon</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Mathey Tissot"
                      onChange={BrandsFilter}
                      checked={brands.includes("Mathey Tissot")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Mathey Tissot</Text>
                </Flex>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                variant={"none"}
                rightIcon={<AiFillCaretDown />}
              >
                COLLECTION
              </MenuButton>
              <MenuList color="black" textAlign={"left"} p="10px">
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Mens"
                      onChange={GenderFilter}
                      checked={collections.includes("Mens")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Men</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Womens"
                      onChange={GenderFilter}
                      checked={collections.includes("Womens")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Women</Text>
                </Flex>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                variant={"none"}
                rightIcon={<AiFillCaretDown />}
              >
                COLOR
              </MenuButton>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                variant={"none"}
                rightIcon={<AiFillCaretDown />}
              >
                PRICE
              </MenuButton>
            </Menu>
          </Box>
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                variant={"none"}
                rightIcon={<AiFillCaretDown />}
              >
                SORT
              </MenuButton>
              <MenuList color="black" textAlign={"left"} p="10px">
                <form className="form">
                  <label>None</label>
                  <input
                    id="01"
                    type="radio"
                    name=""
                    onChange={SortPrice}
                    checked={sort === ""}
                  />
                  <label>Ascending</label>
                  <input
                    id="01"
                    type="radio"
                    name="asc"
                    onChange={SortPrice}
                    checked={sort === "asc"}
                  />
                  <label>Descending</label>
                  <input
                    id="02"
                    type="radio"
                    name="desc"
                    onChange={SortPrice}
                    checked={sort === "desc"}
                  />
                </form>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      )}
    </div>
  );
};

export default WatchNavbar;
