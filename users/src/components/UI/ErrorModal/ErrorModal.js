// react
import { Fragment } from "react";
import ReactDOM from "react-dom";

// styles
import "./ErrorModal.css";

// components
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Backdrop from "../Modal/Backdrop";

const ModalOverlay = (props) => {
  return (
    <Modal className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>
      <div className="content">
        <p>{props.message}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Modal>
  );
};

const BackdropOverlay = (props) => {
  return <Backdrop onClick={props.onConfirm} />;
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackdropOverlay onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
