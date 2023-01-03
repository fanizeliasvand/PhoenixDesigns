import { useParams } from "react-router-dom";
import leggingsImage from "../../assets/leggings.png";
import braImage from "../../assets/sportsBra.png";
import shoeImage from "../../assets/shoes.png";
import hoodieImage from "../../assets/hoodie.png";
import nineThreeImage from "../../assets/93.png";
import ninjaImage from "../../assets/ninja.png";
import vpowderImage from "../../assets/vPowder.png";
import cPowderImage from "../../assets/cPowder.png";
import pMixImage from "../../assets/pMix.png";
import chainImage from "../../assets/chain.png";
import glovesImage from "../../assets/gloves.png";
import beltImage from "../../assets/belt.png";


const products = {
  leggings: {
    name: "Sky Seamless Leggings",
    image: leggingsImage,
    description: "Lift with confidence, our brand new seamlessleggings give you great motivation and comfort at the gym. our material is made out of 90% nyleon and 10% Elastane. These leggings shape your body and give amazing arch support. ",
  },
  bra: {
    name: "Sky Seamless Sports Bra",
    image: braImage,
    description: "Our Sky Seamless bra is a unique peice that is amazing for lifting weights and doing cardio. This design provides great support as well as haveing a chique look because of its scoop neckline, fixed straps and fold-over hem.",
  },
  hoodie: {
    name: "Essential Hoodie",
    image: hoodieImage,
    description: "The essential peice to everyone's wardrobe in the winter. This hoodie made of 100% cotten the most comfortable and warm experience.Featuring a baby pink material with a drawstring hood and a front pocket detail, how could you say no?",
  },

  clouldWalkers: {
    name: "Cloud Walker Sneakers",
    image: shoeImage,
    description: "The Cloud Walkers are one of a kid pair of sneakers with an amazing and new design that makes lifting weights and cardio and amazing experience. the engineering in these shoes provide great back and knee support",
  },
  93: {
    name: "The 93s",
    image: nineThreeImage,
    description: "Black, classy, and comfortable is the look these shoes are trying to achive. The 93s are not onlt gym shoes but also an everyday pair of shoes that could be paired with everything in everyone's closet",
  },
  ninjas: {
    name: "The Ninjas",
    image: ninjaImage,
    description: "The bootie construction of this item provides a snug and secure fit, as well as the double rubber outsole that makes the durability of thsi item a great item for long hikes and out door sports. the unique and beautiful design of this item and the colors used make this a one of a kind pair of shoes.",
  },
  cProtein: {
    name: "Chocolate Protein Powder",
    image: cPowderImage,
    description: "The chocolate Protein Powder is the right choice for you! With a proportion of over 60% of Whey Protein Isolate and 35% of Whey Protein Concentrate it will help you to achieve your goals. The production process ensures a high biological value, an excellent amino acid profile with high BCAA content and best nutritional values: 24.6g of protein, 0.8g of carbohydrates, 1.2g of fat and 112 kcal per serving.",
  },
  vProtein: {
    name: "Vanilla Protein Powder",
    image: vpowderImage,
    description: "Our Vanilla Protein Powder is the right choice for you! With a proportion of over 60% of Whey Protein Isolate and 35% of Whey Protein Concentrate it will help you to achieve your goals. The production process ensures a high biological value, an excellent amino acid profile with high BCAA content and best nutritional values: 24.6g of protein, 0.8g of carbohydrates, 1.2g of fat and 112 kcal per serving.",
  },
  pancakeMix: {
    name: "Protein Pancke Mix",
    image: pMixImage,
    description: "Our Protein Pancake mix is perfect for anyone who does not like to spend too much time in the kitchen but still wants to enjoy delicious and healthy pancakes. With its high protein value of 32g, it is ideal for breakfast or as a snack in between meals.",
  },
  keyChain: {
    name: "Pheonix Key chain",
    image: chainImage,
    description: "Pheonix key chain is a cuet fun key chain to always remember us by.",
  },
  gloves: {
    name: "Profassional Pink Dream lifting Gloves",
    image: glovesImage,
    description: "Best gloves on the market for lifting and gym wear. say goodbye to sweating and slippery hands. no more blisters or calissus. ",
  },
  belt: {
    name: "Pheonix Lifting Belt",
    image: beltImage,
    description: "beautifull gym belt for heavy weights, so you can protect you back. You have our back WE HAVE YOURS :)",
  },

};

const Product = () => {
  const { productName } = useParams();

  const productInfo = products[productName];
  return <div className="column centered"> 
    <h1>{productInfo.name} </h1>
    <img src= {productInfo.image}/> 
    <p>{productInfo.description}</p>
  </div>;
};

export default Product;
