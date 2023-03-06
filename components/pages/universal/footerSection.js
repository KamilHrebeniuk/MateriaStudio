import styles from "../../../styles/pages/universal/footerSection.module.css";
import Image from "next/image";
import Logo_image from "../../../public/pages/universal/icons/Logo.svg";
import Background_image from "../../../public/pages/universal/footer/FooterBG.png";
import Phone_icon from "../../../public/pages/universal/icons/Phone.svg";
import Mail_icon from "../../../public/pages/universal/icons/Mail.svg";
import Instagram_icon from "../../../public/pages/universal/icons/Instagram.png";
import Facebook_icon from "../../../public/pages/universal/icons/Facebook.png";
import Linkedin_icon from "../../../public/pages/universal/icons/Linkedin.png";
import Twitter_icon from "../../../public/pages/universal/icons/Twitter.png";
import Link from "next/link";
import __ from "/utils/lang/translate";
import url from "../../../utils/routing/url";

export default function FooterSection() {
  return (
    <footer
      className={styles.container}
      style={{ backgroundImage: `url(${Background_image.src})` }}
    >
      <div className={styles.content}>
        <div className={styles.contactContainer}>
          <Image
            src={Logo_image}
            alt={"Materia Studio"}
            className={styles.logo}
          />
          <div className={styles.contactInnerContainer}>
            <a
              href="tel:+48 536 333 658"
              className={styles.contactLinkContainer}
            >
              <Image
                src={Phone_icon}
                alt={"Tel:"}
                className={styles.contactIcon}
              />
              +48 536 333 658
            </a>
            <a
              href="mailto:kontakt@materiastudio.design"
              className={styles.contactLinkContainer}
            >
              <Image
                src={Mail_icon}
                alt={"Tel:"}
                className={styles.contactIcon}
              />
              kontakt@materiastudio.design
            </a>
          </div>
        </div>
        <div className={styles.pagesContainer}>
          <h4 className={styles.sectionHeaders}>
            {__("pages.universal.pagesTitle")}
          </h4>
          <Link className={styles.sectionContent} href={url.homePage}>
            {__("pages.universal.homepage")}
          </Link>
          <Link className={styles.sectionContent} href={url.portfolioPage}>
            {__("pages.universal.portfolio")}
          </Link>
          <Link className={styles.sectionContent} href={url.offerPage}>
            {__("pages.universal.offer")}
          </Link>
          <Link className={styles.sectionContent} href={url.contactPage}>
            {__("pages.universal.contact")}
          </Link>
        </div>
        <div className={styles.linksContainer}>
          <h4 className={styles.sectionHeaders}>
            {__("pages.universal.socials")}
          </h4>
          <div className={styles.sectionIconsContainer}>
            <Link className={styles.sectionIconContainer} href="/">
              <Image
                src={Instagram_icon}
                alt={"Instagram"}
                className={styles.sectionIcon}
              />
            </Link>
            <Link className={styles.sectionIconContainer} href="/">
              <Image
                src={Facebook_icon}
                alt={"Facebook"}
                className={styles.sectionIcon}
              />
            </Link>
            <Link className={styles.sectionIconContainer} href="/">
              <Image
                src={Linkedin_icon}
                alt={"Linkedin"}
                className={styles.sectionIcon}
              />
            </Link>
            <Link className={styles.sectionIconContainer} href="/">
              <Image
                src={Twitter_icon}
                alt={"Twitter"}
                className={styles.sectionIcon}
              />
            </Link>
          </div>
        </div>
        <div className={styles.copyright}>
          <span>{__("pages.universal.copyrights")}</span>
          <span>Copyright © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
