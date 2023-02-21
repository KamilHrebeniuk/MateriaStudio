import styles from "../../../styles/pages/home/offerSection.module.css";
import __ from "../../../utils/lang/translate";
import Link from "next/link";
import heartPurple from "../../../public/pages/home/icons/heartPurple.svg";
import heartWhite from "../../../public/pages/home/icons/heartWhite.svg";
import personPurple from "../../../public/pages/home/icons/personPurple.svg";
import personWhite from "../../../public/pages/home/icons/personWhite.svg";
import cartPurple from "../../../public/pages/home/icons/cartPurple.svg";
import cartWhite from "../../../public/pages/home/icons/cartWhite.svg";
import starPurple from "../../../public/pages/home/icons/starPurple.svg";
import starWhite from "../../../public/pages/home/icons/starWhite.svg";
import Button from "../../elements/button";
import { useIntl } from "react-intl";
import FlippingTile from "../../elements/flippingTile";
import url from "../../../utils/routing/url";

export default function OfferSection() {
  const intl = useIntl();

  return (
    <div className={styles.container}>
      <div className={styles.headersContainer}>
        <h2 className={styles.mainHeader}>
          {__("pages.home.offerSection.title")}
        </h2>
        <Link
          href={url.offerPage}
          className={styles.secondaryHeader}
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({
              id: "pages.home.offerSection.advert",
            }),
          }}
        />
      </div>
      <div className={styles.graphicsContainer}>
        <FlippingTile
          url={"#"}
          srcPurple={heartPurple}
          srcWhite={heartWhite}
          textPurple={"pages.home.offerSection.graphicHeart"}
          textWhite={"pages.home.offerSection.moreInformation"}
        />
        <FlippingTile
          url={"#"}
          srcPurple={personPurple}
          srcWhite={personWhite}
          textPurple={"pages.home.offerSection.graphicPerson"}
          textWhite={"pages.home.offerSection.moreInformation"}
        />
        <FlippingTile
          url={"#"}
          srcPurple={cartPurple}
          srcWhite={cartWhite}
          textPurple={"pages.home.offerSection.graphicCart"}
          textWhite={"pages.home.offerSection.moreInformation"}
        />
        <FlippingTile
          url={"#"}
          srcPurple={starPurple}
          srcWhite={starWhite}
          textPurple={"pages.home.offerSection.graphicStar"}
          textWhite={"pages.home.offerSection.moreInformation"}
        />
      </div>
      <span className={styles.description}>
        {__("pages.home.offerSection.description")}
      </span>
      <div className={styles.buttonContainer}>
        <Button
          textId={"pages.home.offerSection.button"}
          type={"white"}
          size={"big"}
          url={"#"}
        />
      </div>
    </div>
  );
}
