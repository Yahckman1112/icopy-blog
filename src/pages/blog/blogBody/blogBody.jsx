import React from "react";
import BigCard from "./../../../components/card/bigCard";
import axios from 'axios'
function BlogBody(props) {

  return (
    <div>
      <div className="row">
        <div className="col-sm-5">
          <BigCard
            image="copy2.jpg"
            CardHeader="Learn Programme"
            cardText="jkhfhsd jhfhd jjhefh jhefh jjhefh jefh hefh jhfh heg iheg ioere"
            cardLink="#"
            linkText="Read More"
          />
        </div>
        <div className="col-sm-5"></div>
      </div>
    </div>
  );
}

export default BlogBody;

// image,CardHeader,cardText,cardLink, linkText
