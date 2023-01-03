import { Zoom } from "react-slideshow-image";
import braImage from "../../assets/sportsBra.png";
import ninjaImage from "../../assets/ninja.png";
import pMixImage from "../../assets/pMix.png";
import beltImage from "../../assets/belt.png"
import leggingsImage from "../../assets/leggings.png";
import { Dropdown } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const images = [braImage, ninjaImage, pMixImage, beltImage, leggingsImage];
  return (
    <div>
      <div className="slide-container">
        <Zoom scale={0.4}>
          {/* {images.map(item, index) => (
            <img key src={item}
          )} */}
          {images.map((each, index) => (
            <img key={index} alt="Slide" src={each} />
          ))}
        </Zoom>
      </div>
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <Dropdown text="Sports Wear" selection>
          <Dropdown.Menu>
            <Dropdown.Item text="Sky Seamless Leggings" onClick={()=> navigate("/product/leggings")} />
            <Dropdown.Item text="Sky Seamless Sports Bra" onClick={()=> navigate("/product/bra")}/>
            <Dropdown.Item text="Essential Hoodie" onClick={()=> navigate("/product/hoodie")}/>
            
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown text="Foot wear" selection>
          <Dropdown.Menu>
            <Dropdown.Item text="Cloud Walkers" onClick={()=> navigate("/product/clouldWalkers")}/>
            <Dropdown.Item text="93s" onClick={()=> navigate("/product/93")}/>
            <Dropdown.Item text="Ninjas" onClick={()=> navigate("/product/ninjas")}/>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown text="Nutrition" selection>
          <Dropdown.Menu>
          <Dropdown.Item text="Chocolate protein Powder" onClick={()=> navigate("/product/cProtein")}/>
            <Dropdown.Item text="Vanilla protein Powder" onClick={()=> navigate("/product/vProtein")}/>
            <Dropdown.Item text="Protein Pancake Mix" onClick={()=> navigate("/product/pancakeMix")}/>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown text="Accessories" selection>
          <Dropdown.Menu>
          <Dropdown.Item text="Pheonix Key Chain" onClick={()=> navigate("/product/keyChain")}/>
            <Dropdown.Item text="Pink Dream Lifting Gloves" onClick={()=> navigate("/product/gloves")}/>
            <Dropdown.Item text="Pheonix lifting Belt" onClick={()=> navigate("/product/belt")}/>
          </Dropdown.Menu>
        </Dropdown>
        
      </div>
    </div>
  );
};

export default Home;
