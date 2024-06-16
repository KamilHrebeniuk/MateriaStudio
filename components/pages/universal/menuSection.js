import styles from "/styles/pages/universal/menuSection.module.css";
import Logo_image from "/public/pages/universal/icons/Logo.svg";
import Image from "next/image";
import Instagram_icon from "/public/pages/universal/icons/Instagram.png";
import Facebook_icon from "/public/pages/universal/icons/Facebook.png";
import Linkedin_icon from "/public/pages/universal/icons/Linkedin.png";
import Twitter_icon from "/public/pages/universal/icons/Twitter.png";
import Hamburger_icon from "/public/pages/universal/icons/Hamburger.svg";
import Link from "next/link";
import __ from "/utils/lang/translate";
import url from "/utils/routing/url";
import {
  TYPE_DESKTOP,
  TYPE_MOBILE,
  TYPE_TABLET,
} from "/utils/consts/windowSize";
import useWindowType from "/hooks/useWindowType";
import { useContext, useState } from "react";
import AppContext from "/context/AppContext";
import { useRouter } from "next/router";
import delayedClick from "/utils/routing/delayRedirect";

export default function MenuSection() {
  const type = useWindowType();
  const menu = () => {
    switch (type) {
      case TYPE_DESKTOP:
        return <MenuSectionDesktop />;
      case TYPE_TABLET:
      case TYPE_MOBILE:
        return <MenuSectionTabletMobile />;
      default:
        return <></>;
    }
  };
  return menu();
}

function MenuSectionDesktop() {
  const context = useContext(AppContext);
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link
          className={styles.logoContainer}
          href={url.homePage}
          onClick={(event) => delayedClick(context, router, event)}
        >
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
        <nav className={styles.pagesContainer}>
          <Link
            className={styles.pagesLink}
            href={url.homePage}
            onClick={(event) => delayedClick(context, router, event)}
          >
            {__("pages.universal.homepage")}
          </Link>
          <Link
            className={styles.pagesLink}
            href={url.portfolioPage}
            onClick={(event) => delayedClick(context, router, event)}
          >
            {__("pages.universal.portfolio")}
          </Link>
          <Link
            className={styles.pagesLink}
            href={url.offerPage}
            onClick={(event) => delayedClick(context, router, event)}
          >
            {__("pages.universal.offer")}
          </Link>
          <Link
            className={styles.pagesLink}
            href={url.contactPage}
            onClick={(event) => delayedClick(context, router, event)}
          >
            {__("pages.universal.contact")}
          </Link>
          {/*<Link className={styles.pagesLink} href={url.blogPage} onClick={(event) => delayedClick(context, router, event)}>*/}
          {/*  {__("pages.universal.blog")}*/}
          {/*</Link>*/}
        </nav>
      </div>
    </div>
  );
}

function MenuSectionTabletMobile() {
  const [isMenuOpened, setMenuOpened] = useState(false);

  const context = useContext(AppContext);
  const router = useRouter();

  const navigationContainer = isMenuOpened
    ? `${styles.navigationContainer} ${styles.navigationContainerActive}`
    : `${styles.navigationContainer}`;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link
          className={styles.logoContainer}
          href={url.homePage}
          onClick={(event) => delayedClick(context, router, event)}
        >
          <Image className={styles.logoImage} src={Logo_image} alt={"#"} />
        </Link>
        <Image
          className={styles.hamburgerButton}
          src={Hamburger_icon}
          alt={"Menu"}
          onClick={() => {
            setMenuOpened(!isMenuOpened);
          }}
        />
        <div className={navigationContainer}>
          <div className={styles.socialsContainer}>
            <Image
              className={styles.socialsIcon}
              src={Linkedin_icon}
              alt={"#"}
            />
            <Image
              className={styles.socialsIcon}
              src={Twitter_icon}
              alt={"#"}
            />
            <Image
              className={styles.socialsIcon}
              src={Instagram_icon}
              alt={"#"}
            />
            <Image
              className={styles.socialsIcon}
              src={Facebook_icon}
              alt={"#"}
            />
          </div>
          <nav className={styles.pagesContainer}>
            <Link
              className={styles.pagesLink}
              href={url.homePage}
              onClick={(event) => delayedClick(context, router, event)}
            >
              {__("pages.universal.homepage")}
            </Link>
            <Link
              className={styles.pagesLink}
              href={url.portfolioPage}
              onClick={(event) => delayedClick(context, router, event)}
            >
              {__("pages.universal.portfolio")}
            </Link>
            <Link
              className={styles.pagesLink}
              href={url.offerPage}
              onClick={(event) => delayedClick(context, router, event)}
            >
              {__("pages.universal.offer")}
            </Link>
            <Link
              className={styles.pagesLink}
              href={url.contactPage}
              onClick={(event) => delayedClick(context, router, event)}
            >
              {__("pages.universal.contact")}
            </Link>
            {/*<Link className={styles.pagesLink} href={url.blogPage} onClick={(event) => delayedClick(context, router, event)}>*/}
            {/*  {__("pages.universal.blog")}*/}
            {/*</Link>*/}
          </nav>
        </div>
      </div>
    </div>
  );
}
