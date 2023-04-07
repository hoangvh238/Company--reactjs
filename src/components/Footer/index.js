import React from "react";
import classes from "./style.module.scss";
import Columm from "./Columm/index";
import Medium from "@svg/MediumLogo.svg";
import LinkDie from "@svg/LinkedinLogo.svg";
import Twitter from "@svg/TwitterLogo.svg";
import Insta from "@svg/InstagramLogo.svg";
import FB from "@svg/FacebookLogo.svg";

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


const Footer = () => {
  return (
    <div className={classes.container}>
      <footer className={classes.footer}>
        <div className={classes.footer__content}>
          {footerColumns.map(({ id, headline, links }) => (
            <Columm
              id={id}
              headline={headline}
              links={links}
            ></Columm>
          ))}
        </div>
        <div className={classes.footer__base}>
          <span className={classes.footer__base__year}>
            © Copyright 2010-2021 - Can Çevik
          </span>
          <div className={classes.footer__base__socials}>
            {socials.map((socials, index) => (
              <img src={socials.icon} key={index}></img>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
