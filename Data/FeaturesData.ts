import Image from "next/image";
import cardImg from "public/cardPhoto1.png";
import cardImg2 from "public/cardPhoto2.png";
import gradientPhoto from "public/gradientMain.png";
import gradientPhoto2 from "public/gradientPhoto.jpeg";

const FeaturesData = () => {
  return [
    {
      gradientImg: gradientPhoto,
      person: cardImg,
      headline: "Best video Quality",
      info: "Explore our store and Enjoy",
    },
    {
      gradientImg: gradientPhoto,
      person: cardImg2,
      headline: "Gaming to another level",
      info: "Explore our store and Enjoy",
    },
  ];
};

export default FeaturesData;
