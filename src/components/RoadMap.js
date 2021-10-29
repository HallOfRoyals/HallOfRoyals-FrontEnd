import Container from 'react-bootstrap/Container';

import SectionTitle from './SectionTitle';

export default function RoadMap() {
  return (
    <section id="roadmap" className="pb-120">
      <div className="container">
        <div className="d-flex justify-content-center pt-20">
          <SectionTitle title="Roadmap" />
        </div>
      </div>
      <Container style={{ marginTop: -50 }}>
        <p className="desc-title mb-20">We've got a swift lineup</p>
        <p className="desc mb-55">The drop release date of the Royals will be announced soon</p>
        <div className="text-center wave-vnxD">
          <h2>1st Wave</h2>
          <p className="desc mb-25 text-center">Nov - Dec 2021</p>
          <p className="desc-title">Start creating custom-casts</p>
          <p className="desc mb-20">(Winners & buyers of the "custom-sculpt reserve" get a personalised cast of their face or any face of their choice)</p>
          <p className="desc-title">Start creating community-approved honorary casts</p>
          <p className="desc mb-20">(The Royal community votes on individuals (celebrities, top creators, etc.) to receive free honorary personlaised casts)</p>
          <p className="desc-title mb-20">Hall Of Royals website and app (iOS & Android)</p>
          <p className="desc-title">1st Royal Scroll is opened</p>
          <p className="desc">(Royal scrolls contain surprises, exciting updates or just something big going down)</p>
        </div>
        <div className="text-center wave-vnxD diff">
          <h2>2nd Wave</h2>
          <p className="desc mb-25 text-center">1st quater 2022</p>
          <p className="desc-title mb-20">Completion of the remaining custom-sculpts & honorary sculpts</p>
          <p className="desc-title mb-20">New features for the Hall Of Royals</p>
          <p className="desc-title mb-20">More AR features on the app</p>
          <p className="desc-title">2nd Royal Scroll is opened</p>
        </div>
        <div className="text-center wave-vnxD">
          <h2>3rd Wave</h2>
          <p className="desc mb-25 text-center">1st quater 2022</p>
          <p className="desc-title mb-20">Royal blockchain development for the storage of contents on Hall Of Royals</p>
          <p className="desc-title mb-20">Development of further community requested features for the Hall Of Royals</p>
          <p className="desc-title mb-20">More AR features on the app</p>
          <p className="desc-title">3rd Royal Scroll is opened</p>
        </div>
        <div>
          <p className="desc mb-1 mt-25">NOTE: Honorary casts will be offered for free to the individual sculpted and will not be sold to anyone else.</p>
          <p className="desc">After a (community approved) period of time, unclaimed honorary Royal NFTs will be burned and that slot given to another individual</p>
        </div>
      </Container>
    </section>
  );
}