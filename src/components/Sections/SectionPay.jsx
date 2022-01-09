import React from 'react';
import logoApplepay from 'images/logo-applepay.png';
import logoDinersclub from 'images/logo-dinersclub.png';
import logoDiscover from 'images/logo-discover.png';
import logoGpay from 'images/logo-gpay.png';
import logoMastercard from 'images/logo-mastercard.png';
import logoPaypal from 'images/logo-paypal.png';
import logoVisa from 'images/logo-visa.png';

const SectionPay = () => {
  return (
    <section className="section-pay">
      <h4 className="section-title">Pay safe & secure</h4>
      <ul className="logos-list">
        <li>
          <img src={logoMastercard} alt="Mastercard" />
        </li>
        <li>
          <img src={logoVisa} alt="Visa" />
        </li>
        <li>
          <img src={logoPaypal} alt="Paypal" />
        </li>
        <li>
          <img src={logoDiscover} alt="Discover" />
        </li>
        <li>
          <img src={logoDinersclub} alt="Dinersclub" />
        </li>
        <li>
          <img src={logoApplepay} alt="Applepay" />
        </li>
        <li>
          <img src={logoGpay} alt="Gpay" />
        </li>
      </ul>
      <ul className="links-list">
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Terms of Use</li>
      </ul>
      <span className="text-opacity">
        GM Unicorn Corporation Limited Florinis 7, Greg Tower, 2nd Floor, 1065,
        Nicosia, Cyprus
      </span>
    </section>
  );
};

export default SectionPay;
