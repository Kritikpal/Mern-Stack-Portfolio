import React from "react";

function MyCard({ content = <div></div> }) {
  return <div className="my-card">{content}</div>;
}

MyCard.propTypes = {
  content: React.PropTypes.node,
};

export default MyCard;
