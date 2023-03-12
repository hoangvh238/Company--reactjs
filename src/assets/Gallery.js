//FOOTER
import Medium from "./Image/MediumLogo.svg";
import LinkDie from "./Image/LinkedinLogo.svg";
import Twitter from "./Image/TwitterLogo.svg";
import Insta from "./Image/InstagramLogo.svg";
import FB from "./Image/FacebookLogo.svg";

// training
import Illutration from "./Image/illutration.jpg";
import Hacker from "./Image/macbook.jpg";

// location

import Doc from "./Image/doc.svg";
import Start from "./Image/start.svg";
import King from "./Image/king.svg";
import Colum from "./Image/colum.svg";
import Cricle from "./Image/cricle.svg";
import Row from "./Image/row.svg";

// BANER
import Borusan from "./Image/icon1.svg";
import Ista from "./Image/icon2.svg";
import Book from "./Image/icon3.svg";
import AkBank from "./Image/icon4.svg";
import AkCan from "./Image/icon5.svg";
import ShowAll from "./Image/icon6.svg";
import AkTas from "./Image/icon7.svg";
import Ola from "./Image/icon8.svg";
import Amazone from "./Image/icon9.svg";

const footerColumns = [
  {
    id: 1,
    headline: "Çözüm ve Hizmetler",
    links: [
      "Yazılım Geliştirme",
      "Outsourcing",
      "Kalite ve Süreç Yönetimi",
      "Danışmanlık",
      "IoT Destekli Çözümler",
    ],
  },
  {
    id: 2,
    headline: "Ürünler",
    links: [
      "Eğitim Yönetim Sistemi",
      "İnsan Sermayesi Yönetim Sistemi",
      "Müşteri İlişkileri Yönetim Sistemi",
      "İçerik Yönetim Sistemi",
    ],
  },
  {
    id: 3,
    headline: "Kurumsal",
    links: ["Hakkımızda", "Belge ve Yetkinlikler", "İş Ortakları"],
  },
  {
    id: 4,
    headline: "İletişim",
    links: ["Bilgi İstek Formu", "Uzman Talep Formu"],
  },
];

const socials = [
  { icon: Medium },
  { icon: LinkDie },
  { icon: Twitter },
  { icon: Insta },
  { icon: FB },
];



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

// DATABASE
export function getArrayByName(name) {
  switch (name) {
    case "footerColumns":
      return footerColumns;
    case "socials":
      return socials;

    case "LocationData":
      return LocationData;

    case "TrainingContent":
      return TrainingContent;

    default:
      return [];
  }
}
