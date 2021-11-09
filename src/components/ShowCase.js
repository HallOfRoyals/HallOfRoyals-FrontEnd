import '../static/css/ShowCase.css';
import pic1 from '../static/images/showcase/1.png';
import pic2 from '../static/images/showcase/2.png';
import ShowCaseSlider from './SingleShowcase';

export default function ShowCase() {
  const showcases = [
    {
      image: pic1,
      title: 'Ancient Royals',
      helper: 'The First Dynasties',
      story: <div><p>Adorned with ancient ornaments these Royals look stunning</p> <p>They are built from materials known from the the 16th century upwards</p></div>,
    },
    {
      image: pic2,
      title: 'Meta Royals',
      helper: 'Modern Dynasties',
      story: <div><p>Stunning just like their ancestors these Meta Royals throw in a touch of modern artistic style, using accessories from the Metaverse world</p></div>,
    }
  ];
  return (<section className="showcase pb-50">
    <div className="container">
      <div className="row align-items-center text-center case">
        {showcases.map((showcase, index) => (
          <ShowCaseSlider key={index} index={index} showcase={showcase} />
        ))}
      </div>
    </div>
  </section>);
}