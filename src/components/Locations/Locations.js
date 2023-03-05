import React, { useEffect } from "react";
import classes from "./Locations.module.scss";
import "aos/dist/aos.css";
import { getArrayByName } from "../../assets/Gallery";
import Footer from "./Footer/Footer";
import Item from "./Item/Item";
const LocationData = getArrayByName("LocationData");

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
