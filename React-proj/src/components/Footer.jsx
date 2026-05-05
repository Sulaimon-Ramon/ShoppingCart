import "./Footer.css"

const Footer = ({setPage}) => {
  const copyRighthex = "\xA9";
  const spark = "\u2726";

  const columns = [
    { heading: "Shop", links: ["All Products", "Kitchen", "Home", "Garden"] },
    { heading: "Company", links: ["About Us", "Journal", "Blog", "Press"] },
    { heading: "Support", links: ["FAQs", "Shipping", "Returns", "Contact"] },
  ];

  return (
    <div>
      <footer className="footer">
        <div className="footer_inner">
          <div className="footer_brand">
            <button className="footer_logo" onClick={() => setPage("home")}>
              Shopping<span className="footer_logo-dot">Cart</span>
            </button>
            <p className="footer__tagline">
              Shopping card and online business e-commerce webapp.
            </p>
            <div className="footer__socials">
              {[`${spark} IG`, `${spark}PIN`, `${spark}TT`].map((s) => (
                <span key={s} className="footer-social">
                  {s}
                </span>
              ))}
            </div>

            <p className="footer-text">
              {copyRighthex}2024 ShoppingCart. All rights reserved.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.heading} className="footer__col">
              <p className="footer__col-heading">{col.heading}</p>
              {col.links.map((link) =>(
                 <p key={link}
                className="footer__link"
                onClick={() => setPage("shop")}>
                {link}
              </p>
              ))}
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <span className="footer__copy">
            {copyRighthex}2024 ShoppingCart. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
