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

const JwelleryNavbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [brands, setBrands] = useState(searchParams.getAll("brands") || []);
  const [category, setCategory] = useState(searchParams.get("category") || []);
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

  const CategoryFilter = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setCategory([...category, name]);
    } else {
      let NewCategory = category.filter((item) => item !== name);
      setCategory(NewCategory);
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
      category,
    };
    sort && (SearchObj.order = sort);
    setSearchParams(SearchObj);
  }, [brands, sort, category]); // eslint-disable-line react-hooks/exhaustive-deps

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
                          name="Messika"
                          onChange={BrandsFilter}
                          checked={brands.includes("Messika")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Messika</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Carter"
                          onChange={BrandsFilter}
                          checked={brands.includes("Carter")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Carter</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Mikimoto"
                          onChange={BrandsFilter}
                          checked={brands.includes("Mikimoto")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Mikimoto</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Graff"
                          onChange={BrandsFilter}
                          checked={brands.includes("Graff")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Graff</Text>
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
                          name="Rings"
                          onChange={CategoryFilter}
                          checked={category.includes("Rings")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Rings</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Bracelets"
                          onChange={CategoryFilter}
                          checked={category.includes("Bracelets")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Bracelets</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Necklaces"
                          onChange={CategoryFilter}
                          checked={category.includes("Necklaces")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Necklaces</Text>
                    </Flex>
                    <Flex gap="7px" m="10px">
                      <label className="checkbox-btn">
                        <label></label>
                        <input
                          id="checkbox"
                          type="checkbox"
                          name="Earrings"
                          onChange={CategoryFilter}
                          checked={category.includes("Earrings")}
                        />
                        <span className="checkmark"></span>
                      </label>
                      <Text>Earrings</Text>
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
                      name="Messika"
                      onChange={BrandsFilter}
                      checked={brands.includes("Messika")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Messika</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Carter"
                      onChange={BrandsFilter}
                      checked={brands.includes("Carter")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Carter</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Mikimoto"
                      onChange={BrandsFilter}
                      checked={brands.includes("Mikimoto")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Mikimoto</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Graff"
                      onChange={BrandsFilter}
                      checked={brands.includes("Graff")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Graff</Text>
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
                      name="Rings"
                      onChange={CategoryFilter}
                      checked={category.includes("Rings")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Rings</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Bracelets"
                      onChange={CategoryFilter}
                      checked={category.includes("Bracelets")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Bracelets</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Necklaces"
                      onChange={CategoryFilter}
                      checked={category.includes("Necklaces")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Necklaces</Text>
                </Flex>
                <Flex gap="7px" m="10px">
                  <label className="checkbox-btn">
                    <label></label>
                    <input
                      id="checkbox"
                      type="checkbox"
                      name="Earrings"
                      onChange={CategoryFilter}
                      checked={category.includes("Earrings")}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <Text>Earrings</Text>
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

export default JwelleryNavbar;
