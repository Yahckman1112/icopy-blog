import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
function FooterList(props) {
  const pagesA = [
    {
      name: "Home",
      Link: "/",
    },
    {
      name: "Portfolio",
      Link: "/",
    },
    {
      name: "Home",
      Link: "/",
    },
    {
      name: "Portfolio",
      Link: "/",
    },
  ];

  const pagesB = [
    {
      name: "About",
      Link: "/",
    },
    {
      name: "Contact",
      Link: "/",
    },
    {
      name: "About",
      Link: "/",
    },
    {
      name: "Contact",
      Link: "/",
    },
  ];
  const pagesC = [
    {
      name: "About",
      Link: "/",
    },
    {
      name: "Contact",
      Link: "/",
    },
    {
      name: "About",
      Link: "/",
    },
    {
      name: "Contact",
      Link: "/",
    },
  ];

  //  renderPages =(pageNames,page, name, link)=>{
  //     return(
  //         {pageNames.map((page) => (
  //             <Link key={page.name} className="footer_page" to={page.link}>
  //               {page.name}
  //             </Link>
  //           ))}
  //     )
  // }
  return (
    <div>
      <div className="row footer_pages1">
        <div className="col-sm-4 col-sx-12  ">
            <span className="footer_pages_text">Pages</span>
          <div className="row">
            <div className="col pageA">
              {pagesA.map((page) => (
                <Link key={page.name} className="footer_page" to={page.Link}>
                  {page.name}
                </Link>
              ))}
            </div>
            <div className="col">
              {pagesB.map((page) => (
                <Link key={page.name} to={page.Link} className="footer_page">
                  {" "}
                  {page.name}
                </Link>
              ))}
            </div>
            <div className="col">
              {pagesC.map((page) => (
                <Link key={page.name} to={page.Link} className="footer_page">
                  {" "}
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterList;
