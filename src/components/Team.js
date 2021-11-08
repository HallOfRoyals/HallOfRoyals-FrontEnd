import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SectionTitle from './SectionTitle';
import teamMember1 from '../static/images/team/1.png';
import teamMember2 from '../static/images/team/2.png';
import teamMember3 from '../static/images/team/3.png';
import teamMember4 from '../static/images/team/4.png';
import teamMember5 from '../static/images/team/5.png';
import teamMember6 from '../static/images/team/6.png';
import social1 from '../static/images/team/social1.png';
import social2 from '../static/images/team/social2.png';
import social3 from '../static/images/team/social3.png';
import social4 from '../static/images/team/social4.png';
import socialAnchor from '../static/images/team/social-anchor.png';

export default function RoadMap() {
  const [isShowingSocial, setShowSocial] = useState(false);

  const toggleSocial = () => {
    const isShowing = !isShowingSocial;
    setShowSocial(isShowing);
  }

  return (
    <section id="team" className="pb-120">
      <div className="container">
        <div className="d-flex justify-content-center pt-20">
          <SectionTitle title="Team" />
        </div>
      </div>
      <Container style={{ marginTop: -50 }}>
        <p className="desc-title">We are a technology company specialized in blockchain development, SaaS, AR & VR development, 3D design etc.</p>
        <p className="desc-title">We are a dedicated bunch and we're here to take you on a Great Sail</p>
      </Container>
      <Container className="d-flex flex-column justifly-content-center">
        <Row className="mt-35 align-items-center justify-content-around">
          <Col className="d-flex flex-column justify-content-center align-items-center" xs={6} md={4}>
            <div className="team-photo-wrapper">
              <img src={teamMember1} alt="" className="team-photo" />
              <div className={isShowingSocial ? 'd-flex flex-column team-social' : 'd-none'}>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/Adowei_George"><img src={social1} alt="social" /></a>
              </div>
            </div>
            <div className="text-center team-desc">
              <h3>Man from Ado</h3>
              <span>Product Manager</span>
            </div>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center magic-mt-30" xs={6} md={4}>
            <div className="team-photo-wrapper">
              <img src={teamMember2} alt="" className="team-photo" />
              <div className={isShowingSocial ? 'd-flex flex-column team-social' : 'd-none'}>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/TheSurrealyst"><img src={social1} alt="social" /></a>
              </div>
            </div>
            <div className="text-center team-desc">
              <h3>The Surrealist</h3>
              <span>Product Designer</span>
            </div>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center magic-mt-30" xs={6} md={4}>
            <div className="team-photo-wrapper">
              <img src={teamMember3} alt="" className="team-photo" />
              <div className={isShowingSocial ? 'd-flex flex-column team-social': 'd-none'}>
                <a target="_blank" rel="noreferrer" href="https://youtube.com/channel/UCl2oOhWeblU-NQedxjdG6eQ"><img src={social4} alt="social" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.artstation.com/syndicatedart"><img src={social3} alt="social" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/syndicated_art"><img src={social2} alt="social" /></a>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/syndicated_art"><img src={social1} alt="social" /></a>
              </div>
            </div>
            <div className="text-center team-desc">
              <h3>Dwayne <img onClick={toggleSocial} src={socialAnchor} alt="" /></h3>
              <span>3D Artist</span>
            </div>
          </Col>
        </Row>
        <Row className="mt-30 align-items-center justify-content-around">
          <Col className="d-flex flex-column justify-content-center align-items-center" xs={6} md={4}>
            <img src={teamMember4} alt="" className="team-photo" />
            <div className="text-center team-desc">
              <h3>King of the Hives</h3>
              <span>Software Engineer</span>
            </div>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center magic-mt-30" xs={6} md={4}>
            <img src={teamMember5} alt="" className="team-photo" />
            <div className="text-center team-desc">
              <h3>Hopkins</h3>
              <span>AR/VR/Software Developer</span>
            </div>
          </Col>
          <Col className="d-flex flex-column justify-content-center align-items-center magic-mt-30" xs={6} md={4}>
            <img src={teamMember6} alt="" className="team-photo" />
            <div className="text-center team-desc">
              <h3>Ancient Dreamer</h3>
              <span>3D/2D Artist</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}