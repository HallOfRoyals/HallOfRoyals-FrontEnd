import '../static/css/ShowCase.css';
import pic1 from '../static/images/showcase/1.png';
import pic2 from '../static/images/showcase/2.png';
import pic3 from '../static/images/showcase/3.png';
import pic4 from '../static/images/showcase/4.png';
import logoIcon from '../static/images/logo-icon.png';

export default function ShowCase() {

  return (
    <section className="glassy-wrapper x-section mt-60">
      <h1 className="section-title">Royals</h1>
      <div className="row mt-20">
        <div className="col-sm-6 col-md-3 showcase-x">
          <img src={pic1} alt=""/>
          <div className="d-flex mt-10 showcase-case">
            <img src={logoIcon} alt="" className="showcase-case-item case-icon" />
            <h4>Ancient Royals</h4>
            <img src={logoIcon} alt="" className="showcase-case-item case-icon"/>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 showcase-x">
          <img src={pic2} alt="" />
          <div className="d-flex mt-10 showcase-case">
            <img src={logoIcon} alt="" className="showcase-case-item case-icon" />
            <h4>Ancient Royals</h4>
            <img src={logoIcon} alt="" className="showcase-case-item case-icon"/>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 showcase-x">
          <img src={pic3} alt="" />
          <div className="d-flex mt-10 showcase-case">
            <img src={logoIcon} alt="" className="showcase-case-item case-icon" />
            <h4>Ancient Royals</h4>
            <img src={logoIcon} alt="" className="showcase-case-item case-icon"/>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 showcase-x">
          <img src={pic4} alt="" />
          <div className="d-flex mt-10 showcase-case">
            <img src={logoIcon} alt="" className="showcase-case-item case-icon" />
            <h4>Ancient Royals</h4>
            <img src={logoIcon} alt="" className="showcase-case-item case-icon"/>
          </div>
        </div>
      </div>
    </section>);
}