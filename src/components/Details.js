import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./styled-components/Button";
import { StoreButton } from "./styled-components/StoreButton";
import Footer from "../components/Footer";
import ShortLoadScreen from "./PreLoad/ShortLoadScreen";

export default function Details(props) {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <React.Fragment>
      {showComponent ? (
        <ShortLoadScreen call={() => setShowComponent(false)} />
      ) : null}

      {/* Extracts Values from React Context Provider */}
      <ProductConsumer>
        {value => (
          <React.Fragment>
            <div className="center">
              <div className="container py-5">
                <div className="row">
                  <div className=" mx-auto text-center text-slanted text-green detailsTitle">
                    <h1>{props.data.name}</h1>
                  </div>
                </div>
              </div>
              {/* End Title */}
              <img
                src={props.data.background_image_additional}
                className="center smallerImg"
                alt="Game"
              />
              {/* Product Text */}
              <div>
                <h3 className="text-capitalize font-weight-bold mt-3 mb-0 gameDesc">
                  description:
                </h3>
                <p className="readableText gameDesc">
                  {props.data.description_raw}
                </p>
              </div>
              <div className=" text-capitalize gameInfo">
                <div className="bottomInfo">
                  {props.data.developers ? (
                    <h4 className="text-green">
                      <strong>
                        developer : {props.data.developers[0].name}
                      </strong>
                    </h4>
                  ) : (
                    <h4 className="text-green">
                      <strong>developer unknown</strong>
                    </h4>
                  )}
                  {/* {props.data.publishers ? (
                    <h4 className="text-green">
                      <strong>
                        publisher : {props.data.publishers[0].name}
                      </strong>
                    </h4>
                  ) : (
                    <h4 className="text-green">
                      <strong>publisher unknown</strong>
                    </h4>
                  )} */}
                  {props.data.esrb_rating ? (
                    <h4 className="text-green">
                      <strong>
                        age rating : {props.data.esrb_rating.name}
                      </strong>
                    </h4>
                  ) : (
                    <h4 className="text-green">
                      <strong> age rating : unknown</strong>
                    </h4>
                  )}
                  {props.data.released ? (
                    <h4 className="text-green">
                      <strong>release date : {props.data.released}</strong>
                    </h4>
                  ) : (
                    <h4 className="text-green">
                      <strong>release date : unknown</strong>
                    </h4>
                  )}
                  {props.data.stores ? (
                    <h4 className="text-green">
                      <strong>
                        stores to purchase game :{" "}
                        {props.data.stores.map((store, index) => (
                          <a
                            href={store.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={`${store.store.name}?index=${index}`}
                          >
                            <StoreButton>{store.store.name}</StoreButton>
                          </a>
                        ))}
                      </strong>
                    </h4>
                  ) : (
                    <h4 className="text-green">
                      <strong>No Available Stores</strong>
                    </h4>
                  )}
                </div>
                {/* Product Info */}
              </div>
              <div />
              {/* Buttons */}
              <div>
                <Link to="/">
                  <ButtonContainer
                    className="mx-auto"
                    onClick={props.screenHandler}
                  >
                    back to products
                  </ButtonContainer>
                </Link>
              </div>
              <div />
            </div>
          </React.Fragment>
        )}
      </ProductConsumer>
      <Footer />
    </React.Fragment>
  );
}
