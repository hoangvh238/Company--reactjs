//FOOTER
import Medium from "./Image/MediumLogo.png";
import LinkDie from "./Image/LinkedinLogo.png";
import Twitter from "./Image/TwitterLogo.png";
import Insta from "./Image/InstagramLogo.png";
import FB from "./Image/FacebookLogo.png";

// training
import Illutration from "./Image/illutration.jpg";
import Hacker from "./Image/macbook.jpg";

// location

import Doc from "./Image/doc.png";
import Start from "./Image/start.png";
import King from "./Image/king.png";
import Colum from "./Image/colum.png";
import Cricle from "./Image/cricle.png";
import Row from "./Image/row.png";

// BANER
import Borusan from "./Image/icon1.png";
import Ista from "./Image/icon2.png";
import Book from "./Image/icon3.png";
import AkBank from "./Image/icon4.png";
import AkCan from "./Image/icon5.png";
import ShowAll from "./Image/icon6.png";
import AkTas from "./Image/icon7.png";
import Ola from "./Image/icon8.png";
import Amazone from "./Image/icon9.png";

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

const all = [
  { id: 1, group: 1, pic: Borusan },
  { id: 2, group: 2, pic: Ista },
  { id: 3, group: 2, pic: Book },
  { id: 4, group: 3, pic: AkBank },
  { id: 5, group: 3, pic: AkCan },
  { id: 6, group: 3, pic: ShowAll },
  { id: 7, group: 4, pic: AkTas },
  { id: 8, group: 4, pic: Ola },
  { id: 9, group: 5, pic: Amazone },
];

const custom = [
  { id: 1, group: 1, pic: Borusan },
  { id: 2, group: 1, pic: Ista },
  { id: 3, group: 2, pic: Book },
  { id: 4, group: 3, pic: AkBank },
  { id: 5, group: 4, pic: AkCan },
  { id: 6, group: 5, pic: ShowAll },
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

    case "all":
      return all;
    case "custom":
      return custom;

    case "LocationData":
      return LocationData;

    case "TrainingContent":
      return TrainingContent;

    default:
      return [];
  }
}
