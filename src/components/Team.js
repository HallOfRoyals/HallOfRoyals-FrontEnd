import teamOne from '../static/images/team/1.png';
import teamTwo from '../static/images/team/2.png';
import teamThree from '../static/images/team/3.png';
import teamFour from '../static/images/team/4.png';
import teamFive from '../static/images/team/5.png';
import teamSix from '../static/images/team/6.png';
import klynoxIcon from '../static/images/klynox-icon.png';
import shapeSeventeen from '../static/images/shape-17.png';

export default function Team() {
  return (
    <section id="team" className="glassy-wrapper x-section mt-60">
      <div className="container x-container position-relative">
        <img src={shapeSeventeen} alt="" className="shape-17" />
        <h1 className="section-title mb-25">Team</h1>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="glassy-wrapper text-center pt-10 pb-10 pl-10 pr-10">
              <img src={teamOne} alt="" className="team-photo" />
              <div className="team-desc mt-10">
                Man from Ado
              </div>
              <div className="team-desc">
                (Product Manager)
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="glassy-wrapper text-center pt-10 pb-10 pl-10 pr-10">
              <img src={teamTwo} alt="" className="team-photo" />
              <div className="team-desc mt-10">
                The Surrealyst
              </div>
              <div className="team-desc">
                (Product Designer)
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="glassy-wrapper text-center pt-10 pb-10 pl-10 pr-10">
              <img src={teamThree} alt="" className="team-photo" />
              <div className="team-desc mt-10">
                Syndicated Art
              </div>
              <div className="team-desc">
                (3D Artist)
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-25">
          <div className="col-sm-6 col-md-4">
            <div className="glassy-wrapper text-center pt-10 pb-10 pl-10 pr-10">
              <img src={teamFour} alt="" className="team-photo" />
              <div className="team-desc mt-10">
                King of the Hives
              </div>
              <div className="team-desc">
                (Software Engineer)
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="glassy-wrapper text-center pt-10 pb-10 pl-10 pr-10">
              <img src={teamFive} alt="" className="team-photo" />
              <div className="team-desc mt-10">
                Ancient Dreamer
              </div>
              <div className="team-desc">
                (3D, 2D Artist)
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="glassy-wrapper text-center pt-10 pb-10 pl-10 pr-10">
              <img src={teamSix} alt="" className="team-photo" />
              <div className="team-desc mt-10">
                Hopkins
              </div>
              <div className="team-desc">
                (AR/VR/Software Dev)
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-30">
          Hall of Royals is a project by Klynox labs - a multinational tech company specialized in blockchain development, SaaS, AR and VR development, 3D design etc.
        </p>
        <div className="text-center mt-35">
          <a href="/" className="team-action">
            <span>Klynox.co</span>
            <img src={klynoxIcon} alt=""/>
          </a>
        </div>
      </div>
    </section>
  );
}