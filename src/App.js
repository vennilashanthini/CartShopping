import { Badge, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";

function App() {
  // const [show, setShow] = useState(false);
  const data = [
    {
      productImages:
        "https://res.cloudinary.com/dpcqa2bc7/image/upload/v1722881769/docs/models-8.jpg",
      productName: "Labrador Retriever",
      memory: "1 Year Old",
      price: "169900",
      colour: "Golden Shade",
    },
    {
      productImages:
        "https://res.cloudinary.com/dpcqa2bc7/image/upload/v1722880254/docs/models.jpg",
      productName: "Beagle",
      memory: "6 Months Old",
      price: "139500",
      colour: "Black and Brown patched white",
    },
    {
      productImages:
        "https://res.cloudinary.com/dpcqa2bc7/image/upload/v1722879101/eeqrja1gyrc4cwnkfbdm.jpg",
      productName: "German Shepherd",
      memory: "9 Months Old",
      price: "109500",
      colour: "Brown and Black",
    },
    {
      productImages:
        "https://res.cloudinary.com/dpcqa2bc7/image/upload/v1722881261/docs/models.jpg",
      productName: "French Bulldog",
      memory: "3 Months Old",
      price: "110000",
      colour: "Brown",
    },
    {
      productImages:
        "https://res.cloudinary.com/dpcqa2bc7/image/upload/v1722882092/docs/models-10.jpg",
      productName: "Bull dog",
      memory: "5 Months Old",
      price: "90000",
      colour: "White",
    },
    {
      productImages:
        "https://res.cloudinary.com/dpcqa2bc7/image/upload/v1722881507/docs/models-2.jpg",
      productName: "Border Collie",
      memory: "11 Months Old",
      price: "95000",
      colour: "Black Patched White",
    },
    {
      productImages:
        "https://res.cloudinary.com/dpcqa2bc7/image/upload/v1722881575/docs/models-3.jpg",
      productName: "Alaskan Malamute",
      memory: "2 Years Old",
      price: "75000",
      colour: "Shinning Golden Black",
    },
    {
      productImages:
        "https://res.cloudinary.com/dpcqa2bc7/image/upload/v1722881688/docs/models-6.jpg",
      productName: "Golden Retriever",
      memory: "2 Years Old",
      price: "650000",
      colour: "Golden",
    },
  ];
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#!">
              Cutepets
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#!">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#!">
                    About
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#!">
                        All Products
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn btn-outline-dark" type="submit">
                  <i class="bi-cart-fill me-1"></i>
                  Cart
                  <span class="badge bg-dark text-white ms-1 rounded-pill">
                    {count}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Cutepets</h1>
            <p class="lead fw-normal text-white-50 mb-0">For Sales</p>
          </div>
        </div>
      </header>

      <div className="cart-value">
        <Badge bg="success">CART {count}</Badge>
      </div>

      <div className="card-container">
        {data.map((product, index) => 
          <Cards
            index={index}
            product={product}
            setCount={setCount}
            count={count}
          />
        )}
      </div>

      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Shanthini <span>2024</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

function Cards({product, index, setCount, count}) {
  const [show, setShow] = useState(false);

  function addToCart() {
    setShow(!show);
    setCount(count + 1);
  }
  function removeFromCart() {
    setShow(!show);
    setCount(count - 1);
  }
  return (
    
      <Card key={index} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.productImages} />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          <Card.Text>{product.memory}</Card.Text>
          <Card.Text>
            <span>&#8377;</span>
            {product.price}
          </Card.Text>
          <Card.Text>{product.colour}</Card.Text>

          {!show ? (
            <Button variant="primary" onClick={addToCart}>
              Add to Cart
            </Button>
          ) : (
            ""
          )}

          {show ? (
            <Button variant="danger" onClick={removeFromCart}>
              Remove Cart
            </Button>
          ) : (
            ""
          )}
        </Card.Body>
      </Card>
    
  );
}