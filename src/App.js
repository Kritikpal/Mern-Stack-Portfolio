import "./App.css";
import MainNavbar from "./components/common/MainNavbar";
import Sidebar from "./components/sidebar/sidebar";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import { mainNavigation } from "./menus/MainMenu";
import { Suspense } from "react";
import { LoadingComponent } from "./components/common/LoadingComponent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  const mainMenu = mainNavigation;
  return (
    <Row className="text-white bg-dark">
      <Col md={12} lg={3}>
        <Sidebar />
      </Col>
      <Col md={12} lg={9}>
        <div className="main-content">
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <MainNavbar menus={mainMenu} />
              <Suspense fallback={<LoadingComponent />}>
                <Routes>
                  {mainMenu.map((menu) => (
                    <Route
                      key={menu.name}
                      path={menu.link}
                      element={menu.element}
                    />
                  ))}
                </Routes>
              </Suspense>
              <Footer />
            </BrowserRouter>
          </QueryClientProvider>
        </div>
      </Col>
    </Row>
  );
}

export default App;
