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
              <p>Completion of the 1000 Genesis collection</p>
              <p className="mt-15">Adding more Legendary Royals to the Genesis collection</p>
              <p className="mt-15">Sculpting and onboarding more celebrities into the ‘Hall of Royals’</p>
              <p className="mt-15">Sculpting minted custom-sculpts which are also part of the
                Genesis collection</p>
              <p className="mt-15">Collaboration with Artists around the world to create more unique and
                special Royals, ornaments & accessories</p>
            </div>
            <ul className="roadmap-ul mt-60">
              <li>
                All Hall Of Royals NFT holders get a 3D file of their Royal in the requested format
              </li>
              <li>
                All holders can also request and get a 4K image of their Royal
              </li>
              <li>
                Early access & air drops of future NFT drops
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-right">
            <img src={roadmapArt} className="d-none d-md-inline-block roadmap-art" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
}