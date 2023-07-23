import {} from "../css/Main.css";
const Main = ({ closeModal }) => {
  return (
    <div onClick={closeModal} className="modal__backdrop">
      <div className="close-for">
        <h3>Not Found</h3>
        <button onClick={closeModal} className="btn-close">
          Close
        </button>
      </div>
    </div>
  );
};

export default Main;
