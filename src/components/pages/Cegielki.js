import React from "react";
import "../../App.css";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Typed from "react-typed";
import ProgressBar from "react-bootstrap/ProgressBar";
import dog from "../../dog1.jpg";
import food from "../../food.jpg";
import transporter from "../../transporter.jpg";
import obroza from "../../obroza.jpeg";
import zabawka from "../../zabawka.jpeg";
import szczepienie from "../../szczepienie.jpeg";
import poslanko from "../../bed.jpeg";
const styles = {
  cardImage: {
    objectFit: "cover",
    // width: "40vw",
    height: "40vh",
    borderRadius: "12%",
    padding: "1rem",
  },
  rowedit: {
    marginLeft: "0px",
  },
  cardEdit: {
    padding: "0.5rem",
    width: "18rem",
    marginBottom: "1rem",
    marginTop: "1rem",
    borderRadius: "5%",
  },
};

const Cegielki = () => {
  return (
    <div className="cegielki">
      <div className="cegielki-wraper">
        <div className="cegielki-info">
          <h1>Cegiełki</h1>
          <div className="short-text">
            <Typed
              className="typed-text-cegielki"
              strings={["Każdy grosz się liczy!"]}
              typeSpeed={50}
              backSpeed={60}
              loop
            />
          </div>
        </div>
      </div>

      <div className="contain">
        <div className="row" style={styles.rowedit}>
          <div className="col-12 col-lg-3 col-md-12 col-sm-12 dark-overlay">
            <div className="dane-fundacji">
              <h2>Dane fundacji</h2>
              <p>
                Fundacja na Rzecz Zwierząt <br></br>
                <span>
                  <strong>Przytul Psa</strong>
                </span>
              </p>
              <br />
              <p>ul. Parkowa 5K, Ustanów, </p>
              <p>05-540 Zalesie Górne </p>
              <p>KRS: 0000319418 </p>
              <p>REGON: 141678661 </p>
              <p>NIP: 1231173209</p>
              <br />
              <p>
                <span>
                  <strong>Konto bankowe:</strong>
                </span>
              </p>
              <p>28 2490 0005 0000 4530 6884 7074</p>
            </div>
          </div>

          <div className="col-12 col-lg-9 col-md-12 col-sm-12">
            {/* *****KARTY */}
            <div className="cards">
              <div className="first-row">
                <Card className="kartka" style={styles.cardEdit}>
                  {/* <Card.Img variant="top" src="cegielkitlo.jpg" /> */}
                  <Card.Img
                    as={Image}
                    src={food}
                    fluid={true}
                    alt="PHOTO"
                    style={styles.cardImage}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "1rem" }}>
                      Cegiełka na jedzenie dla bezdomnych psów
                    </Card.Title>
                    <Card.Text>
                      5,00zł - 300,00zł
                      <ProgressBar variant="warning" now={60} />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="kartka" style={styles.cardEdit}>
                  <Card.Img
                    as={Image}
                    src={transporter}
                    fluid={true}
                    alt="PHOTO"
                    style={styles.cardImage}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "1rem" }}>
                      Cegiełka na klatki i transportery do przewozu zwierząt
                    </Card.Title>
                    <Card.Text>
                      5,00zł - 300,00zł
                      <ProgressBar variant="warning" now={40} />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="kartka" style={styles.cardEdit}>
                  <Card.Img
                    as={Image}
                    src={obroza}
                    fluid={true}
                    alt="PHOTO"
                    style={styles.cardImage}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "1rem" }}>
                      Cegiełka na obroże dla bezdomnnych psów
                    </Card.Title>
                    <Card.Text>
                      5,00zł - 300,00zł
                      <ProgressBar variant="warning" now={70} />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              <div className="second-row">
                <Card className="kartka" style={styles.cardEdit}>
                  <Card.Img
                    as={Image}
                    src={zabawka}
                    fluid={true}
                    alt="PHOTO"
                    style={styles.cardImage}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "1rem" }}>
                      Cegiełka na zabawki dla bezdomnych psów
                    </Card.Title>
                    <Card.Text>
                      5,00zł - 300,00zł
                      <ProgressBar variant="warning" now={38} />
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="kartka" style={styles.cardEdit}>
                  <Card.Img
                    as={Image}
                    src={szczepienie}
                    fluid={true}
                    alt="PHOTO"
                    style={styles.cardImage}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "1rem" }}>
                      Cegiełka na szczepienie dla bezdomnych psów
                    </Card.Title>
                    <Card.Text>
                      5,00zł - 300,00zł
                      <ProgressBar variant="warning" now={39} />
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card className="kartka" style={styles.cardEdit}>
                  <Card.Img
                    as={Image}
                    src={poslanko}
                    fluid={true}
                    alt="PHOTO"
                    style={styles.cardImage}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontSize: "1rem" }}>
                      Cegiełka na posłania dla bezdomnych psów
                    </Card.Title>
                    <Card.Text>
                      5,00zł - 300,00zł{" "}
                      <ProgressBar variant="warning" now={20} />
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            {/* koniec kart */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cegielki;
