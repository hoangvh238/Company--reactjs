import React  from "react";
import classes from "./style.module.scss";
import "aos/dist/aos.css";
import Footer from "./Footer/index";
import Item from "./Item/index";

import Doc from "@svg/doc.svg";
import Start from "@svg/start.svg";
import King from "@svg/king.svg";
import Colum from "@svg/colum.svg";
import Cricle from "@svg/cricle.svg";
import Row from "@svg/row.svg";

const LocationData = [
  {
    id: 1,
    tiltle: "Döküman Analizi",
    depcriptions:
      "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    icon: Doc,
  },
  {
    id: 2,
    tiltle: "Kabul ve Değerlendirme",
    depcriptions:
      "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    icon: Start,
  },
  {
    id: 3,
    tiltle: "İş Kuralları Analizi",
    depcriptions:
      "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    icon: King,
  },
  {
    id: 4,
    tiltle: "Akış Diyagramları",
    depcriptions:
      "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    icon: Colum,
  },
  {
    id: 5,
    tiltle: "Paydaş",
    depcriptions:
      " Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    icon: Cricle,
  },
  {
    id: 6,
    tiltle: "Prototipleme",
    depcriptions:
      "Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus amet, elementum.",
    icon: Row,
  },
];


const Locations = ({ page }) => {
  return (
    <div className={classes.container}>
      <div className={`${classes.process} ${page ? classes.page : ""}`}>
        <div className={classes.process__content}>
          <h2 className={classes.process__content__tiltle} data-aos="fade-up">
            Kalite ve Süreç Yönetimi
          </h2>
          <p
            className={classes.process__content__depcriptions}
            data-aos="fade-up"
          >
            Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için
            farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje
            Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.
          </p>
          <div className={classes.process__content__gallery}>
            {LocationData.map(({ id, tiltle, depcriptions, icon }) => (
              <Item
                id={id}
                tiltle={tiltle}
                depcriptions={depcriptions}
                icon={icon}
              ></Item>
            ))}
          </div>
        </div>
      </div>
      {!page && <Footer></Footer>}
    </div>
  );
};

export default Locations;
