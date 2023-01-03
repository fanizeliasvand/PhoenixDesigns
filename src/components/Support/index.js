import logoImage from "../../assets/CS.png"
const Support = () => {

    return <div className="column centered">
        <h1>Support</h1>
        <div className="column centered card support">
            <img className="logo-small" src={logoImage}/>
            <p className="header">talk to us</p>
            <p> Having trouble with our website? Pick up your phone or click on the number below to get connected to one of our live agents to solve your problems or answer all your questions. </p>
            <a href="tel:201-927-9345" target="_blank">(201)-927-9345</a>
        </div>
    </div>;
    
};
  
export default Support;