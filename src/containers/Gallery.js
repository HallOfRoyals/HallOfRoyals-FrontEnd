import NavOnlyHeader from '../components/NavOnlyHeader';
import shapeOne from '../static/images/shape-1.png';
import shapeTwo from '../static/images/shape-2.png';
import shapeThree from '../static/images/shape-3.png';
import '../static/css/Gallery.css';

const GallerySection = ({ item }) => {
  return (
    <>
      <div className="">
        <h4 className="text-center mt-40 sub-title">Legendary Royals</h4>
        <div className="row mt-20">
          {item.items.map((itemDetails, index) => (<div key={index} className="col-sm-6 col-md-3 showcase-x">
            <img src={itemDetails.image} alt="" />
            {itemDetails.name ? <h5 className="text-center gallery-name mt-10">{itemDetails.name}</h5> : null}
          </div>))}
        </div>
      </div>
    </>
  );
}

export default function Gallery() {
  const gallery = [
    {
      title: 'Legendary Royals', items: [
        {
          image: '/gallery/1.png',
          name: 'Bob Marley',
        },
        {
          image: '/gallery/2.png',
          name: 'Brenda Fassie',
        },
        {
          image: '/gallery/3.png',
          name: 'Steve Jobs',
        },
        {
          image: '/gallery/4.png',
          name: 'Kobe Bryant',
        },
      ]
    },
    {
      title: 'Honorary Royals', items: [
        {
          image: '/gallery/5.png',
          name: 'Snoop Dogg',
        },
        {
          image: '/gallery/6.png',
          name: 'Asa',
        },
        {
          image: '/gallery/7.png',
          name: 'Burna Boy',
        },
        {
          image: '/gallery/8.png',
          name: 'Rema',
        },
      ]
    },
    {
      title: 'Ancient Royals', items: [
        {
          image: '/gallery/9.png',
        },
        {
          image: '/gallery/10.png',
        },
        {
          image: '/gallery/11.png',
        },
        {
          image: '/gallery/12.png',
        },
      ]
    },
    {
      title: 'Meta Royals', items: [
        {
          image: '/gallery/13.png',
        },
        {
          image: '/gallery/14.png',
        },
        {
          image: '/gallery/15.png',
        },
        {
          image: '/gallery/16.png',
        },
      ]
    }
  ]
  return (
    <div className="position-relative gallery-wrapper">
      <NavOnlyHeader />
      <img src={shapeOne} alt="shape-1" className="shape-1 shape-movement" />
      <img src={shapeTwo} alt="shape-2" className="shape-2" />
      <img src={shapeThree} alt="shape-3" className="shape-3 shape-pulsating" />
      <div className="container">
        <section className="glassy-wrapper x-section mt-120">
          <h2 className="section-title">View Your Royal NFT</h2>
          <div className="mt-20">
            <div className="col-12 col-sm-10 mx-auto d-flex justify-content-center">
              <input type="text" className="form-control" placeholder="Enter your NFT ID" />
              <button type="button" className="btn btn-primary btn-cap ml-10">Reveal</button>
            </div>
          </div>
        </section>
        <section className="glassy-wrapper x-section mt-30">
          <div className="col-12 col-sm-11 mx-auto d-block d-sm-flex justify-content-center text-white">
            <div className="col-12 col-sm-6">
              <div className="gallery-img mx-auto">
                <img src="/gallery/1.png" className="gallery-img" alt="" />
                <h6 className="text-white text-center mt-2">Owner: 0xjnefu84f84949393nfn</h6>
              </div>
            </div>
            <div className="col-12 col-sm-6 px-5 mt-mobile-35">
              <h4 className="text-white">Attributes</h4>
              <div className="d-flex justify-content-between mt-20">
                <div className="">
                  Attribute:&nbsp;
                </div>
                <div className="">
                  Value
                </div>
              </div>
              <div className="d-flex justify-content-between mt-20">
                <div className="">
                  Attribute:&nbsp;
                </div>
                <div className="">
                  Value
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="glassy-wrapper x-section mt-60">
          <h2 className="section-title">Royal Gallery</h2>
          <h4 className="text-center sub-title mt-10">Sneak Peek of some Royals</h4>
          {gallery.map((item, index) => (<GallerySection item={item} key={index} />))}
        </section>
      </div>
    </div>
  );
}