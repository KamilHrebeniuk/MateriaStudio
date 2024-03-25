import styles from "/styles/pages/universal/menuSection.module.css";
import Logo_image from "/public/pages/universal/icons/Logo.svg";
import Image from "next/image";
import Instagram_icon from "/public/pages/universal/icons/Instagram.png";
import Facebook_icon from "/public/pages/universal/icons/Facebook.png";
import Linkedin_icon from "/public/pages/universal/icons/Linkedin.png";
import Twitter_icon from "/public/pages/universal/icons/Twitter.png";
import Link from "next/link";
import __ from "/utils/lang/translate";
import url from "../../../utils/routing/url";

export default function MenuSection() {
  return (
    <nav className={styles.container}>
      <div className={styles.content}>
        <Link className={styles.logoContainer} href={url.homePage}>
          <Image className={styles.logoImage} src={Logo_image} alt={"#"} />
        </Link>
        <div className={styles.socialsContainer}>
          <Image className={styles.socialsIcon} src={Linkedin_icon} alt={"#"} />
          <Image className={styles.socialsIcon} src={Twitter_icon} alt={"#"} />
          <Image
            className={styles.socialsIcon}
            src={Instagram_icon}
            alt={"#"}
          />
          <Image className={styles.socialsIcon} src={Facebook_icon} alt={"#"} />
        </div>
        <div className={styles.pagesContainer}>
          <Link className={styles.pagesLink} href={url.homePage}>
            {__("pages.universal.homepage")}
          </Link>
          <Link className={styles.pagesLink} href={url.portfolioPage}>
            {__("pages.universal.portfolio")}
          </Link>
          <Link className={styles.pagesLink} href={url.offerPage}>
            {__("pages.universal.offer")}
          </Link>
          <Link className={styles.pagesLink} href={url.contactPage}>
            {__("pages.universal.contact")}
          </Link>
          {/*<Link className={styles.pagesLink} href={url.blogPage}>*/}
          {/*  {__("pages.universal.blog")}*/}
          {/*</Link>*/}
        </div>
      </div>
    </nav>
  );
}
