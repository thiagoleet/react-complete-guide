// styles
import "./ErrorModal.css";

// components
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Backdrop from "../Modal/Backdrop";

const ErrorModal = (props) => {
  return (
    <div>
      <Backdrop onClick={props.onConfirm} />
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
    </div>
  );
};

export default ErrorModal;
