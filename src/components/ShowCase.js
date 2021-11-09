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
      story: <div><p>Adorned with ancient ornaments these Royals look stunning</p> <p>They go with the artistic style and accessories of the 16th and 17th century, evoking a feeling of nostalgia atuned to their time</p></div>,
    },
    {
      image: pic2,
      title: 'Meta Royals',
      helper: 'Modern Dynasties',
      story: <div><p>Stunning just like their ancestors these Meta Royals throw in a touch of modern artistic style, decked with accessories from the Metaverse world</p><p>Their fusion of ancient and modern culture & ideas, bridge the gap between a modern world and a caving past</p></div>,
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