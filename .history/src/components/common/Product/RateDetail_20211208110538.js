import React from "react";
import ReactStars from "react-rating-stars-component";
import imageService from "../../../services/imageService";
export default function RateDetail({ rate }) {
  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }

  return (
    <div className="rate-detail">
      <div className="row">
        <div className="col col-md-2 col-4 rate-img">
          <img src={imageService.get("user.png")} alt="Không load được ảnh" />
        </div>
        <div className="col col-md-10 col-8">
          <div className="rate-content">
            <h5 className="user-rate">{rate.userName}</h5>
            <p>{formatDate(rate.rateTime)}</p>

            <ReactStars
              count={rate.rating}
              edit={false}
              size={24}
              color={"#b1b148"}
            />
            <p>{rate.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
