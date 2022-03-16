import React from "react";
import "../../podopieczni.css";
import Typed from "react-typed";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import food from "../../food.jpg";
import obroza from "../../obroza.jpeg";
import zabawka from "../../zabawka.jpeg";
import kofi from "../../kofi2.jpg";
import piorun from "../../piorun.jpg";
import linda from "../../linda.jpg";
import bialas from "../../bialas.jpg";
import emi from "../../emi.jpg";
import kleofas from "../../kleofas.jpg";

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
    padding: "0.3rem",
    width: "18rem",
    // maxHeight: "30rem",
    marginBottom: "0.5rem",
    marginTop: "0.5rem",
    borderRadius: "5%",
    fontSize: "0.8rem",
    textAlign: "justify",
  },
};

const Podopieczni = () => {
  return (
    <div className="wrapper">
      <div className="main-head-wrapper">
        <div className="main-head">
          <h1>Nasi podopieczni</h1>
          <div className="short-text-podopieczni">
            <Typed
              // className="typed-text-podopieczni"
              strings={["Twoi kandydaci na przyjaciela"]}
              typeSpeed={50}
              backSpeed={60}
              loop
            />
          </div>
        </div>
      </div>
      {/* ************SIDEBAR*************** */}
      <div className="sidebar">
        <div className="dark-overlay-podop">
          <div className="dane-fund-podop">
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
      </div>
      {/* *************MAIN CONTENT************ */}
      <div className=" content-podopieczni">
        <h1>Czy warto adoptować bezdomnego psa?</h1>
        <p>
          Zdecydowanie warto. Oprócz wielu zalet adopcji psa ze schroniska
          należy podkreślić coś, o czym się często zapomina. Adoptując zwierzę
          ze schroniska czynimy wielkie dobro, naprawiamy to co zepsuli inni
          ludzie, ratujemy istotę, której los w jednej chwili zmienia się
          diametralnie. Koszmar schroniskowej beznadziei zmienia się w piękne,
          radosne, bezpieczne, szczęśliwe życie.
        </p>
        <div className="cards-dogs ">
          <Card className="dogcard" style={styles.cardEdit}>
            {/* <Card.Img variant="top" src="cegielkitlo.jpg" /> */}
            <Card.Img
              as={Image}
              src={kofi}
              fluid={true}
              alt="PHOTO"
              style={styles.cardImage}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Kofi</Card.Title>
              <Card.Text>
                Ten kochany psiak jest pod opieką Fundacji Przytul Psa.
                Przyjechał do nas ze schroniska, gdzie spędził w klatce 8
                długich lat. Pragniemy znaleźć mu mu dobry dom aby zaznał
                prawdziwego, godnego życia. Przebywa w kameralnym hoteliku i dał
                się poznać jako bardzo przyjazny, lgnący do człowieka psiak.
                Jest już wykastrowany i zaszczepiony, zdrowy, gotowy do adopcji.
                Uwielbia spacery i przytulanie. Ma przed sobą wiele lat życia –
                marzymy aby spędził je w bezpiecznym, kochającym domu, który
                wynagrodzi mu to wszystko zło co było jego udziałem. Przebywa w
                okolicach Piaseczna pod Warszawą.
                <br></br>
                <strong>
                  <span style={{ color: "var(--color1" }}>Tel. 503069502</span>
                </strong>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="dogcard" style={styles.cardEdit}>
            {/* <Card.Img variant="top" src="cegielkitlo.jpg" /> */}
            <Card.Img
              as={Image}
              src={piorun}
              fluid={true}
              alt="PHOTO"
              style={styles.cardImage}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Piorun</Card.Title>
              <Card.Text>
                Przybył do nas niedawno i zakochaliśmy się w nim po uszy. Ma
                śliczną, bialutką sierść i niezwykłe oczy – jedno niebieskie,
                drugie brązowe. Jest małym, młodziutkim pieskiem, lubi spacerki
                i bieganie z innymi czworonogami. To przyjazna psina, spragniona
                kontaktu z człowiekiem.
                <br></br>
                <strong>
                  <span style={{ color: "var(--color1" }}>Tel. 503069502</span>
                </strong>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="dogcard" style={styles.cardEdit}>
            {/* <Card.Img variant="top" src="cegielkitlo.jpg" /> */}
            <Card.Img
              as={Image}
              src={linda}
              fluid={true}
              alt="PHOTO"
              style={styles.cardImage}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Linda</Card.Title>
              <Card.Text>
                Jest niedużym, uroczym pieskiem. Lubi się przytulać, jest
                radosna i pełna życia. Uratowana, zapomniała o smutnej
                przeszłości i bardzo czeka na domek. Przebywa w domu tymczasowym
                w Piasecznie.
                <br></br>
                <strong>
                  <span style={{ color: "var(--color1" }}>
                    Telefon w sprawie adopcji: 503069502, 604531952 (tymczasowa
                    opiekunka).
                  </span>
                </strong>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="dogcard" style={styles.cardEdit}>
            {/* <Card.Img variant="top" src="cegielkitlo.jpg" /> */}
            <Card.Img
              as={Image}
              src={bialas}
              fluid={true}
              alt="PHOTO"
              style={styles.cardImage}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Białas</Card.Title>
              <Card.Text>
                Niestety właściciele myśleli, że adoptowali pluszową zabawkę.
                Nie nauczyli psa nic, nawet nie dotrzymali warunków umowy w
                zakresie szczepień, a on rósł, mężniał i zaczynał sprawiać
                kłopoty. I co wtedy? Po prostu go oddali. Obecnie cudowny
                Hipster przebywa w domu tymczasowym pod Warszawą. Kasia
                wychowuje młokosa (Hipster ma obecnie 9 miesięcy) i uczy manier.
                Niestety nie może u niej zostać dłużej. Ma swoich kilka psów,
                które go nie tolerują. Potrzebujemy miejsca dla tego ślicznego
                młodzieńca. Najlepiej aby osoba miała doświadczenie z psami,
                gdyż Hipster, jak każdy nastolatek, wymaga miłości, ale też
                zasad i ograniczeń.
                <br></br>
                <strong>
                  <span style={{ color: "var(--color1" }}>
                    Telefon w sprawie adopcji: 503069502
                  </span>
                </strong>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="dogcard" style={styles.cardEdit}>
            {/* <Card.Img variant="top" src="cegielkitlo.jpg" /> */}
            <Card.Img
              as={Image}
              src={emi}
              fluid={true}
              alt="PHOTO"
              style={styles.cardImage}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Emi</Card.Title>
              <Card.Text>
                Emi to nieduża suczka, która przybyła do nas ze szczeniakami.
                Gdy skończyła je karmić, szczeniaki pojechały do domów, a ona do
                hoteliku. Suczka wciąż czeka na dom. Jest bardzo wycofana.
                Potrzebuje doświadczonej, zdeterminowanej i przygotowanej na
                pracę z nią osoby. Oczywiście będziemy wspierać.
                <br></br>
                <strong>
                  <span style={{ color: "var(--color1" }}>
                    Telefon w sprawie adopcji: 503069502
                  </span>
                </strong>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="dogcard" style={styles.cardEdit}>
            {/* <Card.Img variant="top" src="cegielkitlo.jpg" /> */}
            <Card.Img
              as={Image}
              src={kleofas}
              fluid={true}
              alt="PHOTO"
              style={styles.cardImage}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Kleofas</Card.Title>
              <Card.Text>
                Kleofas to duży, niezwykle łagodny i przemiły młody pies. Ma ok.
                3 lat, płowy kolor sierści, jest krótkowłosy, kastrowany. Nie
                wiemy jakim cudem tak wspaniały, uroczy, delikatny psiak stał
                się bezdomny, bo zasługuje na to, by mieć najcudowniejszy dom.
                Kleoś został uratowany z fatalnego schroniska, w którym pchły
                zjadały go żywcem, a beznadziejna samotność wpędzała w rozpacz i
                depresję. Kleofas jest już bezpieczny, ale wciąż nie ma swojego
                domu. A bardzo pragnie go mieć. <br></br>
                <strong>
                  <span style={{ color: "var(--color1" }}>
                    Telefon w sprawie adopcji: 503069502
                  </span>
                </strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Podopieczni;
