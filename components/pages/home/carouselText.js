import styles from "/styles/pages/home/carouselText.module.css";
import StandardHeader from "/components/elements/standardHeader";
import { useRef } from "react";
import PropTypes from "prop-types";
import __ from "/utils/lang/translate";
import * as React from "react";
import Star_icon from "/public/pages/universal/icons/Star.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useWindowType from "/hooks/useWindowType";
import {
  TYPE_DESKTOP,
  TYPE_MOBILE,
  TYPE_TABLET,
} from "/utils/consts/windowSize";
import Image from "next/image";

export default function CarouselText({
  title,
  subTitle,
  tileTitles,
  tileNames,
  tileDescriptions,
  tilesInRow,
}) {
  const type = useWindowType();

  const slidesToShow = () => {
    switch (type) {
      case TYPE_DESKTOP:
        return tilesInRow;
      case TYPE_TABLET:
        return Math.min(tilesInRow, 2);
      case TYPE_MOBILE:
        return 1;
      default:
        return 1;
    }
  };

  return (
    <CarouselTextTemplate
      title={title}
      subTitle={subTitle}
      tileTitles={tileTitles}
      tileNames={tileNames}
      tileDescriptions={tileDescriptions}
      tilesInRow={slidesToShow()}
    />
  );
}

function CarouselTextTemplate({
  title,
  subTitle,
  tileTitles,
  tileNames,
  tileDescriptions,
  tilesInRow,
}) {
  const slider = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    draggable: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: tilesInRow,
    slidesToScroll: 1,
    dotsClass: styles.dots,
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <StandardHeader title={title} subTitle={subTitle} margins />
        <div className={styles.sliderStaticContainer}>
          <Slider ref={slider} {...settings}>
            {tileTitles.map((title, index) => {
              return (
                <div className={styles.sliderTileContainer} key={index}>
                  <div className={styles.sliderTile}>
                    <div className={styles.authorContainer}>
                      <div className={styles.authorContent}>
                        <span className={styles.authorName}>
                          {__(tileNames[index])}
                        </span>
                        <div className={styles.sliderStars}>
                          <Image
                            className={styles.sliderStar}
                            src={Star_icon}
                            alt={""}
                          />
                          <Image
                            className={styles.sliderStar}
                            src={Star_icon}
                            alt={""}
                          />
                          <Image
                            className={styles.sliderStar}
                            src={Star_icon}
                            alt={""}
                          />
                          <Image
                            className={styles.sliderStar}
                            src={Star_icon}
                            alt={""}
                          />
                          <Image
                            className={styles.sliderStar}
                            src={Star_icon}
                            alt={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.sliderTileDescription}
                      dangerouslySetInnerHTML={{
                        __html: __(tileDescriptions[index]),
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

CarouselText.defaultProps = {
  headerSubTitle: "",
  tilesInRow: 3,
  popUpDisabled: true,
  bulletPointImage: {},
  bulletPointImages: [],
};

CarouselText.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  tileTitles: PropTypes.array.isRequired,
  tileNames: PropTypes.array.isRequired,
  tileDescriptions: PropTypes.array.isRequired,
  tileRoles: PropTypes.array.isRequired,
  tileImageSquares: PropTypes.array.isRequired,
  tileImageDetails: PropTypes.array.isRequired,
  tilesInRow: PropTypes.number,
};

CarouselTextTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  tileTitles: PropTypes.array.isRequired,
  tileNames: PropTypes.array.isRequired,
  tileDescriptions: PropTypes.array.isRequired,
  tileRoles: PropTypes.array.isRequired,
  tileImageSquares: PropTypes.array.isRequired,
  tileImageDetails: PropTypes.array.isRequired,
  tilesInRow: PropTypes.number.isRequired,
};
