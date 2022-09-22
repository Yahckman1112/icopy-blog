import React from "react";
import BigCard from "./../../../components/card/bigCard";
function ServiceBody(props) {
  function renderCard(image, cardHeader, cardText, cardLink) {
    return (
      <BigCard
        image={image}
        CardHeader={cardHeader}
        cardText={cardText}
        cardLink={cardLink}
      />
    );
  }

  return (
    <div>
      <div className="row">
        <div className="col-12 col-sx-12 col-sm-6">
          {renderCard(
            "../../images/about_side.jpg",
            "Copy Write",
            "Shoot your revenue to the sky with sizzling storyselling Sales Copy, Emails, VSLs, and Landing Page Copy.",
            "/copywriting"
          )}
        </div>

        <div className="col-12 col-sx-12 col-sm-6">
          {renderCard(
            "../../images/afliated_side.jpg",
            "Email Marketting",
            "Get the best out of your subscribers with Clear-cut email strategies and optimization with different email services providers",
            "/"
          )}
        </div>
      </div>
      <div className="row">
        <div className="col col-12 col-sm-6">
          {renderCard(
            "../../images/seo.jpg",
            "SEO",
            "Let your website pages be the regular pages that annoy everyone because of constant visibility and many-time clicks",
            "/"
          )}
        </div>
        <div className="col col-12 col-sm-6">
          {renderCard(
            "../../images/copy2.jpg",
            "Contetent Writing",
            "Engage your audience with mouthwatering content on your website in the form of Blog Post, Brochure, Case Studies, Press Release and White Papers.",
            "/"
          )}
        </div>
      </div>
      <div className="row">
        <div className="col col-12 col-sm-6">
          {renderCard(
            "../../images/copy2.jpg",
            "Affliated Marketting",
            "Fill your pipe with engaging prospects.",
            "/"
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceBody;
