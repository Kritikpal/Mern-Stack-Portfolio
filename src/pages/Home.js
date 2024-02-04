import React, { lazy, Suspense } from "react";
import HomeHeader from "../components/home/HomeHeader.js";
import "../css/home.css";
import { LoadingComponent } from "../components/common/LoadingComponent.js";

const LazyServicesSection = lazy(() =>
  import("../components/home/ServicesSection.js")
);
const LazyBlogs = lazy(() => import("../components/home/Blogs.js"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<LoadingComponent />}>
        <HomeHeader />
        <LazyServicesSection className="mx-4" />
        <LazyBlogs className="mx-4" />
      </Suspense>
    </>
  );
};

export default Home;
