import { Col, Row } from "react-bootstrap";
import ServiceCard from "../common/serviec.card";
import AppTitle from "../elements/AppTitle";
import { useCustomQuery } from "../../hooks/useCustomQuery";
import { FetchAllServicesEndPoint } from "../../constants/apiEndpoints";
import HigherOrderSuspendedComponent from "../elements/HigherOrderSuspendedComponent";

function ServicesSection({ className }) {
  const {
    data: services,
    isLoading,
    error,
  } = useCustomQuery(
    FetchAllServicesEndPoint.endPoint,
    FetchAllServicesEndPoint.key
  );
  return (
    <HigherOrderSuspendedComponent isLoading={isLoading} error={error}>
      <div className={"services-section " + className}>
        <AppTitle title={"My Services"} />
        <Row>
          {(services || []).map((service, index) => (
            <Col xl={4} sm={6}>
              <ServiceCard
                title={service.serviceTitle}
                description={service.summary}
                index={index}
              />
            </Col>
          ))}
        </Row>
      </div>
    </HigherOrderSuspendedComponent>
  );
}

export default ServicesSection;
