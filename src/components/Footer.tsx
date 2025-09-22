import type { FC } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-[#c5def5] text-gray-700 py-4 px-6 md:px-20 w-full  bottom-0">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-300 pb-4">
        {/* E-Comm */}
        <div>
          <h2 className="text-lg font-bold flex items-center gap-2 text-[#0d6efd]">
            <span className="bg-[#0d6efd] text-white px-2 py-0.5 rounded-full text-sm">E</span>
            E-Comm
          </h2>
          <p className="mt-2 text-xs leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold mb-2 text-sm">Follow Us</h3>
          <p className="text-xs mb-2">
            Since the 1500s, when an unknown printer took a galley of type.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="text-[#0d6efd] hover:text-blue-700">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="text-[#0d6efd] hover:text-blue-700">
              <FaTwitter size={16} />
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold mb-2 text-sm">Contact Us</h3>
          <p className="text-xs">
            E-Comm, 4578 <br />
            Marmora Road, <br />
            Glasgow D04 89GR
          </p>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 text-xs">
        <div>
          <h4 className="font-semibold mb-2">Information</h4>
          <ul className="space-y-1">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Service</h4>
          <ul className="space-y-1">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">My Account</h4>
          <ul className="space-y-1">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Our Offers</h4>
          <ul className="space-y-1">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Information</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Payment Icons */}
      <div className="flex justify-center md:justify-end mt-4 space-x-3">
        <img src="/visa.png" alt="Visa" className="h-5" />
        <img src="/paypal.png" alt="PayPal" className="h-5" />
        <img src="/mastercard.png" alt="MasterCard" className="h-5" />
      </div>
    </footer>
  );
};

export default Footer;
