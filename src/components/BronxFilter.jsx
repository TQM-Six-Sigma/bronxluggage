import React, { useState, useEffect, createRef } from "react";
import { Container, Row, Col, Form, Carousel, Button } from "react-bootstrap";
import cardData from "../databaseJSON/BronxFilter.json";
import RatingStarFeedback from "./RatingStarFeedback";
import { Link, useLocation } from "react-router-dom";
import { Tooltip } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const [sort, setSort] = useState("asc");
  const [brandFilter, setBrandFilter] = useState([]);
  const [individualFilter, setIndividualFilter] = useState([]);
  const [colorFilter, setColorFilter] = useState([]);
  const [sizeFilter, setSizeFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const location = useLocation();
  const searchInputRef = createRef();
  const [priceRange, setPriceRange] = useState("");
  const priceRanges = [
    { label: "0$-100$", min: 0, max: 100 },
    { label: "100$-300$", min: 100, max: 300 },
    { label: "300$-600$", min: 300, max: 600 },
    { label: "600$-1000$", min: 600, max: 1000 },
    { label: "1000$-1500$", min: 1000, max: 1500 },
  ];
  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const keyword = params.get("keyword");
    if (keyword) {
      setSearchItem(keyword);
    }
  }, [location]);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchInputRef]);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };

  const filteredCards = cardData
    .filter((card) => {
      return (
        card.name.toLowerCase().includes(searchItem.toLowerCase()) ||
        card.brand.toLowerCase().includes(searchItem.toLowerCase()) ||
        card.individual.toLowerCase().includes(searchItem.toLowerCase()) ||
        card.color.toLowerCase().includes(searchItem.toLowerCase()) ||
        card.stat.toLowerCase().includes(searchItem.toLowerCase()) ||
        card.type.toLowerCase().includes(searchItem.toLowerCase()) ||
        card.size.toLowerCase().includes(searchItem.toLowerCase()) ||
        card.price.toString().includes(searchItem)
      );
    })
    .filter((card) => {
      if (priceRange) {
        const selectedRange = priceRanges.find(
          (range) => range.label === priceRange
        );
        return (
          card.price >= selectedRange.min && card.price <= selectedRange.max
        );
      }
      return true;
    })
    .filter(
      (card) =>
        (brandFilter.length === 0 || brandFilter.includes(card.brand)) &&
        (colorFilter.length === 0 || colorFilter.includes(card.color)) &&
        (sizeFilter.length === 0 || sizeFilter.includes(card.size)) &&
        (typeFilter.length === 0 || typeFilter.includes(card.type)) &&
        (individualFilter.length === 0 ||
          individualFilter.includes(card.individual))
    )

    .sort((a, b) => {
      if (sort === "ascByName") {
        return a.name.localeCompare(b.name);
      } else if (sort === "descByName") {
        return b.name.localeCompare(a.name);
      } else if (sort === "asc") {
        return a.price - b.price;
      } else if (sort === "desc") {
        return b.price - a.price;
      } else if (sort === "bestseller") {
        return b.stat.localeCompare(a.stat);
      } else if (sort === "color") {
        return a.color.localeCompare(b.color);
      } else if (sort === "individual") {
        return a.individual.localeCompare(b.individual);
      } else if (sort === "brand") {
        return a.brand.localeCompare(b.brand);
      }
      return 0;
    });

  const handleBrandFilterChange = (brand) => {
    if (brandFilter.includes(brand)) {
      setBrandFilter(brandFilter.filter((b) => b !== brand));
    } else {
      setBrandFilter([...brandFilter, brand]);
    }
  };
  const handleIndividualFilterChange = (individual) => {
    if (individualFilter.includes(individual)) {
      setIndividualFilter(individualFilter.filter((b) => b !== individual));
    } else {
      setIndividualFilter([...individualFilter, individual]);
    }
  };
  const handleColorFilterChange = (color) => {
    if (colorFilter.includes(color)) {
      setColorFilter(colorFilter.filter((b) => b !== color));
    } else {
      setColorFilter([...colorFilter, color]);
    }
  };
  const handleSizeFilterChange = (size) => {
    if (sizeFilter.includes(size)) {
      setSizeFilter(sizeFilter.filter((b) => b !== size));
    } else {
      setSizeFilter([...sizeFilter, size]);
    }
  };
  const handleTypeFilterChange = (type) => {
    if (typeFilter.includes(type)) {
      setTypeFilter(typeFilter.filter((b) => b !== type));
    } else {
      setTypeFilter([...typeFilter, type]);
    }
  };
  const FilterCheckbox = ({ filter, label, handleFilterChange, filterState }) => {
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={filter}
          checked={filterState.includes(filter)}
          onChange={() => handleFilterChange(filter)}
        />
        <label className="form-check-label">{label}</label>
      </div>
    );
  };
  return (
    <Container className="BronxFilter-Container">
      <Row className="BronxFilter-Filter mb-2 col-12 d-flex justify-content-center">
        <h1 className="d-flex justify-content-center">
          {searchItem.toUpperCase()}
        </h1>
      </Row>
      {
        <Row className="BronxFilter-Filter mb-2 col-12 d-flex justify-content-center">
          <Col
            xs={12}
            md={2}
            lg={2}
            className={"d-flex justify-content-center"}
          >
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Brands
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="TravelPro"
                    label="TravelPro"
                    handleFilterChange={handleBrandFilterChange}
                    filterState={brandFilter}
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="Briggs & Riley"
                    label="Briggs & Riley"
                    handleFilterChange={handleBrandFilterChange}
                    filterState={brandFilter}
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="Bric'S"
                    label="Bric'S"
                    handleFilterChange={handleBrandFilterChange}
                    filterState={brandFilter}
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="Ricardo"
                    label="Ricardo"
                    handleFilterChange={handleBrandFilterChange}
                    filterState={brandFilter}
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="Delsey"
                    label="Delsey"
                    handleFilterChange={handleBrandFilterChange}
                    filterState={brandFilter}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col
            xs={12}
            md={2}
            lg={2}
            className={"d-flex justify-content-center"}
          >
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Style
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="woman"
                    label="Woman"
                    handleFilterChange={handleIndividualFilterChange}
                    filterState={individualFilter}
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="gentleman"
                    label="Gentleman"
                    handleFilterChange={handleIndividualFilterChange}
                    filterState={individualFilter}
                  />
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="Kid"
                    label="Kid"
                    handleFilterChange={handleIndividualFilterChange}
                    filterState={individualFilter}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col
            xs={12}
            md={2}
            lg={2}
            className={"d-flex justify-content-center"}
          >
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Size
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="large"
                    label="Large"
                    handleFilterChange={handleSizeFilterChange}
                    filterState={sizeFilter}
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="medium"
                    label="Medium"
                    handleFilterChange={handleSizeFilterChange}
                    filterState={sizeFilter}
                  />
                </Dropdown.Item>

                <Dropdown.Item>
                  <FilterCheckbox
                    filter="small"
                    label="Small"
                    handleFilterChange={handleSizeFilterChange}
                    filterState={sizeFilter}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col
            xs={12}
            md={2}
            lg={2}
            className={"d-flex justify-content-center"}
          >
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Type
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="Luggage"
                    label="Luggage"
                    handleFilterChange={handleTypeFilterChange}
                    filterState={typeFilter}
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="Bag"
                    label="Bags"
                    handleFilterChange={handleTypeFilterChange}
                    filterState={typeFilter}
                  />
                </Dropdown.Item>

                <Dropdown.Item>
                  <FilterCheckbox
                    filter="Backpack"
                    label="Backpacks"
                    handleFilterChange={handleTypeFilterChange}
                    filterState={typeFilter}
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="Accessories"
                    label="Accessories"
                    handleFilterChange={handleTypeFilterChange}
                    filterState={typeFilter}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col
            xs={12}
            md={2}
            lg={2}
            className={"d-flex justify-content-center"}
          >
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Color
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="Black"
                    label="Black"
                    handleFilterChange={handleColorFilterChange}
                    filterState={colorFilter}
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="Cream"
                    label="Cream"
                    handleFilterChange={handleColorFilterChange}
                    filterState={colorFilter}
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="Red"
                    label="Red"
                    handleFilterChange={handleColorFilterChange}
                    filterState={colorFilter}
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="Green"
                    label="Green"
                    handleFilterChange={handleColorFilterChange}
                    filterState={colorFilter}
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="Blue"
                    label="Blue"
                    handleFilterChange={handleColorFilterChange}
                    filterState={colorFilter}
                  />
                </Dropdown.Item>
                <Dropdown.Item>
                  <FilterCheckbox
                    filter="Yellow"
                    label="Yellow"
                    handleFilterChange={handleColorFilterChange}
                    filterState={colorFilter}
                  />
                </Dropdown.Item>
                  <Dropdown.Item>
                  <FilterCheckbox
                    filter="Orange"
                    label="Orange"
                    handleFilterChange={handleColorFilterChange}
                    filterState={colorFilter}
                  />
                </Dropdown.Item>
                  <Dropdown.Item>
                  <FilterCheckbox
                    filter="Brown"
                    label="Brown"
                    handleFilterChange={handleColorFilterChange}
                    filterState={colorFilter}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      }
      <Row className="BronxFilter-Sort g-0 d-flex justify-content-center mb-3">
        <Col xs={12} md={6} lg={4}>
          <Form>
            <div class="input-group">
            <Form.Control
              type="text"
              value={searchItem}
              onChange={handleInputChange}
              placeholder="Search by name, price, brand..."
              ref={searchInputRef}
            />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={() => setSearchItem("")}
              >
                Clear
              </button>
            </div>
            
            <Form.Select
              className="mt-2"
              value={priceRange}
              onChange={handlePriceRangeChange}
            >
              <option value="">Price</option>
              {priceRanges.map((range) => (
                <option key={range.label} value={range.label}>
                  {range.label}
                </option>
              ))}
            </Form.Select>
            <Form.Select
              className="mt-2"
              aria-label="Sort"
              onChange={(e) => setSort(e.target.value)}
              value={sort}
            >
              <option value="ascByName">Name: A-Z</option>
              <option value="descByName">Name: Z-A</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
              <option value="bestseller">Bestseller</option>
              <option value="color">Sort by Color</option>
              <option value="individual">Sort by Individual</option>
              <option value="brand">Sort by Brand</option>
            </Form.Select>
          </Form>
        </Col>
      </Row>
      <Row className="BronxFilter-Card g-0">
        {filteredCards.map((card, index) => (
          <Col key={index} xs={6} md={4} lg={2}>
            <div
              className="card1"
              style={{
                width: "100%",
                aspectRatio: "9/13",
                backgroundImage: `url(${require(`../../public/images/${card.background}.png`)})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Link
                to={`/${card.link}`}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title={card.description}
              >
                <Carousel>
                  <Carousel.Item>
                    <img
                      src={require(`../../public/images/${card.image}1.png`)}
                      className="d-block w-100"
                      alt={card.name + " 1"}
                    />
                    <Tooltip />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={require(`../../public/images/${card.image}2.png`)}
                      className="d-block w-100"
                      alt={card.name + " 2"}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={require(`../../public/images/${card.image}3.png`)}
                      className="d-block w-100"
                      alt={card.name + " 3"}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src={require(`../../public/images/${card.image}4.png`)}
                      className="d-block w-100"
                      alt={card.name + " 4"}
                    />
                  </Carousel.Item>
                </Carousel>
              </Link>

              <div className="card-body text-black px-3 ">
                <span>{card.serial}</span>
                <h6 className="card-title">{card.name}</h6>
                <div>
                  <RatingStarFeedback />
                </div>
                <p className="card-text">
                  {card.brand}
                  <br />
                  {card.price}
                  {"$"}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Search;
