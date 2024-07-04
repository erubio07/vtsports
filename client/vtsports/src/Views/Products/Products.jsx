import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getAllProducts,
  filterByGenre,
  filterByWaist,
  sortByPrice,
} from "../../Redux/actions";
import Pagination from "../../Components/Pagination/Pagination";
// import ReactLoading from "react-loading";
import Spinner from 'react-bootstrap/Spinner';
import HomeSLider from "../../Components/Slider/HomeSlider";
import Filter from "../../Components/Filter/Filter";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import styles from "./Products.module.css";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const productsFilter = useSelector((state) => state.productsFilter);
  const filterMessage = useSelector((state) => state.filterMessage);
  // console.log(filterMessage);
  // console.log(products);
  // console.log(productsFilter);
  // const navigate = useNavigate();
  const totalProducts = products.length;
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const [show, setShow] = useState(false);
  const [productModal, setProductModal] = useState(null);
  // console.log(productModal);
  const forceUpdate = React.useReducer((bool) => !bool)[1]; //fureza la actualizacion del estado

  const handleFIlterByGenre = (e) => {
    dispatch(filterByGenre(e.target.value));
    setCurrentPage(1);
  };

  const handleFilterByWaist = (e) => {
    dispatch(filterByWaist(e.target.value));
    setCurrentPage(1);
  };

  const handleSortByPrice = (e) => {
    dispatch(sortByPrice(e.target.value));
    forceUpdate();
  };

  const handleClose = () => setShow(false);
  const handleShow = (p) => {
    setProductModal(p);
    setShow(true);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <HomeSLider />
      <Filter
        handleFIlterByGenre={handleFIlterByGenre}
        handleFilterByWaist={handleFilterByWaist}
        handleSortByPrice={handleSortByPrice}
      />

      <div className={styles.container}>
        {(!productsFilter || productsFilter.length === 0) && !filterMessage ? (
          <div className={styles.loaderContainer}>
            <Spinner 
            animation="grow"
            variant="light" />
          </div>
        ) : (
          <>
            {filterMessage && (
              <h2>
                <Badge bg="secondary">{filterMessage}</Badge>
              </h2>
            )}
            {productsFilter
              .map((p) => (
                <Card className={styles.card} key={p.id}>
                  <Card.Img
                    variant="top"
                    src={p.image}
                    className={styles.productImage}
                  />
                  <Card.Body>
                    <Card.Title>{p && p.name}</Card.Title>
                    <Card.Text>
                      <p>
                        <strong>Género:</strong> {p && p.Genre.name}
                      </p>
                      <p>
                        <strong>Material:</strong> {p && p.Type.name}
                      </p>
                      <p>
                        <strong>Talles:</strong>{" "}
                        {p.Waists.map((w) => w && w.name).join(", ")}
                      </p>
                      <p className={styles.productPrice}>$ {p.price}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleShow(p)}>
                      Detalles
                    </Button>
                  </Card.Body>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className={styles.modal}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>
                        {productModal && productModal.name}
                      </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <Container>
                        <Row>
                          <Col xs={6} md={4}>
                            <Image
                              src={productModal && productModal.image}
                              rounded
                              style={{ width: 171, height: 180 }}
                            />
                          </Col>
                        </Row>
                      </Container>
                      <p style={{ marginTop: 15 }}>
                        {productModal && productModal.description}
                      </p>
                      <p>
                        <strong>Material:</strong>{" "}
                        {productModal && productModal.Type.name}
                      </p>
                      <p>
                        <strong>Talles:</strong>{" "}
                        {productModal &&
                          productModal.Waists.map((w) => w && w.name).join(
                            ", "
                          )}
                      </p>
                      <p className={styles.productPrice}>
                        $ {productModal && productModal.price}
                      </p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Link
                        to={`https://api.whatsapp.com/send?phone=543516237423&text=Hola, quisera información sobre el producto ${productModal && productModal.name}`}
                        target="_blank"
                      >
                        <Button variant="primary">Contactar</Button>
                      </Link>
                    </Modal.Footer>
                  </Modal>
                </Card>
              ))
              .slice(firstIndex, lastIndex)}
          </>
        )}
      </div>
      <div className={styles.paginacion} style={{ marginTop: "30px" }}>
        <Pagination
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
        />
      </div>
    </div>
  );
};

export default Products;
