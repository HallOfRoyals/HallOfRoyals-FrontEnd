import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../static/css/ActionTray.css';
import logoIconDark from '../static/images/logo-icon-dark.png';

export default function ActionTray() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} className="classic-modal text-black" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Mint a Royal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <div className="col-12 col-sm-10 mx-auto d-flex justify-content-center">
              <div className="">
                <div className="d-flex align-items-center input-holder">
                  <span className="label text-center">Max: 5</span>
                  <input type="text" className="form-control" placeholder="Enter Amount" value="1" />
                </div>
                <p className="text-center text-black mt-2">How many Royals do you want to mint?</p>
              </div>
              <div>

                <button type="button" className="btn btn-big btn-mute btn-cap ml-10">Mint</button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <section id="mint" className="glassy-wrapper x-section mt-120">
        <h1 className="section-title">Get a Royal</h1>
        <div className="row mt-20">
          <div className="col-12">
            <span onClick={handleShow} className="pl-5 pr-5 glassy-wrapper -actiontray-actions text-center d-flex justify-content-center align-items-center btn-cap">
              <span>Mint a Royal</span>
              <img src={logoIconDark} alt="opensea" />
            </span>
            <p className="text-center mt-10">Join our free community airdrop</p>
          </div>
        </div>
      </section>
    </>
  );
}
