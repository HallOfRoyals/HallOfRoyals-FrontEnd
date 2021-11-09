import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export default function SingleShowCase(props) {
  const [show, setShow] = useState(false);

  const handleClick = (event) => {
    setShow(!show);
  };

  return (
    <div className="col-sm-6 magic-mt-30">
      <img src={props.showcase.image} alt="" />
      <h2 className="mt-25 --mb-5">{props.showcase.title}</h2>
      <h3 className="--mb-5">{props.showcase.helper}</h3>
      <OverlayTrigger
        show={show}
        placement='bottom'
        overlay={
          <Popover id={`popover-positioned-${props.index}`}>
            <Popover.Body>
              {props.showcase.story}
            </Popover.Body>
            <div className="d-flex justify-content-end --close-dialog">
              <Button onClick={handleClick}>[close]</Button>
            </div>
          </Popover>
        }
      >
        <Button variant="secondary" onClick={handleClick}>view story</Button>
      </OverlayTrigger>
    </div>
  );
}