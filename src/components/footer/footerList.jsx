import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { pagesA, pagesB, pagesC } from "./render";
function FooterList(props) {
  const renderPages = (pageName, name, link) => {
    return pageName.map((page, i) => (
      <Link key={i} className="footer_page" to={page.Link}>
        {page.name}
      </Link>
    ));
    //  return [1,2,3].map((item)=> item)
  };

  return (
    <div>
      <div className="row footer_pages1">
        <div className="col-sm-4 col-sx-12  ">
          <span className="footer_pages_text">Pages</span>
          <div className="row">
            <div className="col pageA">{renderPages(pagesA)}</div>
            <div className="col">
              <div className="col pageA">{renderPages(pagesB)}</div>
            </div>
            <div className="col">
              <div className="col pageA">{renderPages(pagesC)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterList;
