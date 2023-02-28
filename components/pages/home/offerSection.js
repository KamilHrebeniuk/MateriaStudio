import styles from "../../../styles/pages/home/offerSection.module.css";
import heartPurple from "../../../public/components/elements/flippingTile/icons/heartWhite.svg";
import heartWhite from "../../../public/components/elements/flippingTile/icons/heartGray.svg";
import personPurple from "../../../public/components/elements/flippingTile/icons/personWhite.svg";
import personWhite from "../../../public/components/elements/flippingTile/icons/personGray.svg";
import cartPurple from "../../../public/components/elements/flippingTile/icons/cartWhite.svg";
import cartWhite from "../../../public/components/elements/flippingTile/icons/cartGray.svg";
import starPurple from "../../../public/components/elements/flippingTile/icons/starWhite.svg";
import starWhite from "../../../public/components/elements/flippingTile/icons/starGray.svg";
import Button from "../../elements/button";
import FlippingTile from "../../elements/flippingTile";
import StandardHeader from "../../elements/standardHeader";

export default function OfferSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <StandardHeader
          subTitle={"pages.home.offerSection.subTitle"}
          title={"pages.home.offerSection.title"}
          description={"pages.home.offerSection.description"}
          margins
        />
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
        <div className={styles.buttonContainer}>
          <Button
            textId={"pages.home.offerSection.button"}
            type={"white"}
            size={"big"}
            url={"#"}
          />
        </div>
      </div>
    </div>
  );
}
