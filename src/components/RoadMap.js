import roadmapArt from '../static/images/roadmap-art.png';
import shapeSixteen from '../static/images/shape-16.png';

export default function RoadMap() {
  return (
    <section id="roadmap" className="glassy-wrapper x-section mt-60 position-relative">
      <img src={shapeSixteen} alt="" className="shape-16" />
      <div className="container">
        <h1 className="section-title">Royals</h1>
        <div className="row mt-25 align-items-start">
          <div className="col-md-6">
            <div className="glassy-wrapper relative-height-box pt-20 pb-20 pl-20 pr-20">
              <p>Sculpting and onboarding more celebrity and achievers into the "Hall Of Royals"</p>
              <p className="mt-15">Collaboration with award organizers such as Headies Awards, BET Awards, etc. to create 3D Hall Of Royals NFT sculpts for their winners</p>
              <p className="mt-15">Create "Hall Of Royals Awards" to recognise and celebrate achievers in blockchain and metaverse</p>
              <p className="mt-15">Sculpting minted custom-sculpts which are also part of the
                Genesis collection</p>
              <p className="mt-15">Collaborate with Artists around the world to create concepts Arts using the Benin Bronze Heads Art form</p>
            </div>
          </div>
          <div className="col-md-6 text-right">
            <img src={roadmapArt} className="d-none d-md-inline-block roadmap-art" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}
