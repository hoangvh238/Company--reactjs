import React from "react";
import classes from "./style.module.scss";
import Container from "./Container/index";
import Illutration from "@png/illutration.jpg";
import Hacker from "@png/macbook.jpg";


const TrainingContent = [
  {
    id: 1,
    tiltle: "Kalite ve Süreç Yönetimi",
    depcripntions:
      "Deneyimli kadromuz; birçok farklı sektörden deneyimli, PMP® sertifikasına sahip, uzman proje yöneticilerinden oluşmaktadır. Projelerinizin yönetimine destek olmak, zayıf olduğunu düşündüğünüz alanları güçlendirmek, uluslararası geçerliliği olan PMI® metodolojisini şirketinizde uygulamak ve geliştirmek için yanınızdayız.",
    pic: Illutration,
  },
  {
    id: 2,
    tiltle: "Test Yönetimi ve Analizi",
    depcripntions:
      "Danışmanlığını yürüttüğümüz projelerde yazılım hatalarını önlemek amacıyla gerçekleştirdiğimiz testleri her proje aşamasında manuel ya da test otomasyonu ile dikkatle uygulamaktayız. Deneyimli test ekibimiz, kurumlara yüksek kalitede yazılım testleri hizmeti ile baştan sona güvenli, kaliteli ve tatmin edici bir müşteri deneyimi sunmaktadır.",
    pic: Hacker,
  },
];

const Training = ({ page }) => {
  return (
    <div className={classes.container}>
      <div className={`${classes.training} ${page ? classes.page : ""}`}>
        <div className={classes.training__box}>
          {TrainingContent.map(({ id, tiltle, depcripntions, pic }) => (
            <Container  
              tiltle={tiltle}
              depcripntions={depcripntions}
              pic={pic}
              id={id}
            ></Container>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
