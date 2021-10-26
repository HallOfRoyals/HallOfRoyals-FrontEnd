import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SectionTitle from './SectionTitle';
import teamMember1 from '../static/images/team/1.png';

export default function RoadMap() {
  return (
    <section className="pb-120">
      <div className="container">
        <div className="d-flex justify-content-center pt-20">
          <SectionTitle title="Team" />
        </div>
      </div>
      <Container style={{ marginTop: -50 }}>
        <p class="desc-title">We are a technology company specialized in blcokchain development, SaaS, AR & VR development, 3D design etc.</p>
        <p class="desc-title">We are a dedicated bunch and we're here to take you on a Great Sail</p>
      </Container>
      <Container className="d-flex flex-column justifly-content-center">
        <Row className="mt-35 align-items-center justify-content-around">
          <Col className="d-flex flex-column justify-content-center align-items-center" sm={6} md={4}>
            <img src={teamMember1} alt="" className="team-photo" />
            <div className="text-center team-desc">
              <h3>Sky_Fantasy</h3>
              <span>Art concept/visualization</span>
            </div>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center magic-mt-30" sm={6} md={4}>
            <img src={teamMember1} alt="" className="team-photo" />
            <div className="text-center team-desc">
              <h3>Sky_fantasy</h3>
              <span>Product Manager/Designer</span>
            </div>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center magic-mt-30" sm={6} md={4}>
            <img src={teamMember1} alt="" className="team-photo" />
            <div className="text-center team-desc">
              <h3>Lord Of The Dark Tides</h3>
              <span>Software developer</span>
            </div>
          </Col>
        </Row>
        <Row className="mt-30 align-items-center justify-content-around">
          <Col className="d-flex flex-column justify-content-center align-items-center" sm={6} md={4}>
            <img src={teamMember1} alt="" className="team-photo" />
            <div className="text-center team-desc">
              <h3>Lord Of The Dark Tides</h3>
              <span>AR/VR/Software developers</span>
            </div>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center magic-mt-30" sm={6} md={4}>
            <img src={teamMember1} alt="" className="team-photo" />
            <div className="text-center team-desc">
              <h3>Dimensun</h3>
              <span>3D Artist</span>
            </div>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center magic-mt-30" sm={6} md={4}>
            <img src={teamMember1} alt="" className="team-photo" />
            <div className="text-center team-desc">
              <h3>Lord Of The Dark Tides</h3>
              <span>3D/2D Artist</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}