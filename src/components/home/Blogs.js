import "../../css/blogs.css";
import { animated } from "react-spring";
import { useSlidingAnimation } from "../../hooks/useAnimations";
import AppTitle from "../elements/AppTitle";
import { Col, Row } from "react-bootstrap";
import { FetchAllBlogsEndPoint } from "../../constants/apiEndpoints";
import { useCustomQuery } from "../../hooks/useCustomQuery";
import { Link } from "react-router-dom";
import HigherOrderSuspendedComponent from "../elements/HigherOrderSuspendedComponent";
function BlogCard({
  blogTitle = "",
  subtitle = "",
  image = "",
  date = "",
  blogSummary = "",
  index,
}) {
  return (
    <animated.div style={useSlidingAnimation({ delay: index * 500 })}>
      <div className="my-card blog_post">
        <div className="img_pod">
          <img src={image || "footer/hero_1.jpg"} alt="random image" />
        </div>
        <div className="container_copy">
          <div className="content">
            <h3>{date}</h3>
            <h1>{blogTitle}</h1>
            <p>{blogSummary}</p>
            <Link className="btn_primary mb-sm-3 mb-lg-0" href="#">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </animated.div>
  );
}

function Blogs({ className }) {
  let {
    data: blogs,
    isLoading,
    error,
  } = useCustomQuery(FetchAllBlogsEndPoint.endPoint, FetchAllBlogsEndPoint.key);
  return (
    <HigherOrderSuspendedComponent isLoading={isLoading} error={error}>
      <div className={"blogs " + className}>
        <AppTitle title={"Blogs"} />
        <Row>
          {(blogs || []).map((blog, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <BlogCard index={index} {...blog} />
            </Col>
          ))}
        </Row>
      </div>
    </HigherOrderSuspendedComponent>
  );
}

export default Blogs;
