import { useAccordionButton } from 'react-bootstrap/AccordionButton';

export default function NavToggle({ eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>{});

  return (
    <button className="navbar-toggler" type="button" onClick={decoratedOnClick}>
      <span className="toggler-icon"></span>
      <span className="toggler-icon"></span>
      <span className="toggler-icon"></span>
    </button>
  );
}