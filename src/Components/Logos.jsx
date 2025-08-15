import Acme from "../assets/Framer/acme1.png";
import Quantum from "../assets/Framer/quantum1.png";
import Echo from "../assets/Framer/echo1.png";
import Celestia from "../assets/Framer/celestia1.png";
import Pulse from "../assets/Framer/pulse1.png";
import Apex from "../assets/Framer/apex1.png";

const Logos = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden opacity-80 space-x-8 lg:space-x-20 py-12 ">
      <img src={Acme} className="opacity-30" />
      <img src={Quantum} className="opacity-50" />
      <img src={Echo} className="opacity-100" />
      <img src={Celestia} className="opacity-60" />
      <img src={Pulse} className="opacity-50" />
      <img src={Apex} className="opacity-30" />
    </div>
  );
};

export default Logos;
