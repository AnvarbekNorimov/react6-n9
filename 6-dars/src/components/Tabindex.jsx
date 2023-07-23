import { useState } from "react";
import Main from "./Main"
import "../css/Tabindex.css";

// const Tabindex = () => {
//   const [contName, setContName] = useState("positive");
//   const handleChange = (e) => {
//     let count =
//       e.target.innerText.toLowerCase().split("")[0].toUpperCase() +
//       e.target.innerText.toLowerCase().split("").splice(1).join("");
//     setContName(count);
//   };
//   const handleInput = (e) => {
//     e.preventDefault();
//     console.log(e.target.children[0].value);
//     if (e.target.children[0].value == 1) {
//       setContName("positive");
//     } else if (e.target.children[0].value == 2) {
//       setContName("Negative");
//     } else if (e.target.children[0].value == 3) {
//       setContName("Neutral");
//     } else {
//       alert("Not Found");
//     }
//   };
//   return (
//     <div className="container">
//       <div className="section">
//         <form onSubmit={handleInput} className="section__top">
//           <input
//             type="text"
//             placeholder="Enter tab index"
//             className="section__top-input"
//           />
//           <button className="section__top-button">Change tab</button>
//         </form>
//         <div className="section__bottom">
//           <div className="section__bottom-title">
//             <span onClick={handleChange} className="title ">
//               POSITIVE
//             </span>
//             <span onClick={handleChange} className="title ">
//               NEGATIVE
//             </span>
//             <span onClick={handleChange} className="title">
//               NEUTRAL
//             </span>
//           </div>
//           <span className="section__bottom-subtitle">
//             {<p>{contName} content</p>}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };
const TabIndex = () => {
  const [contName, setContName] = useState("Positive");
  const [showModal, setShowModal] = useState(true);

  const handleTabClick = (tabName) => {
    setContName(tabName);
  };

  const handleInput = (e) => {
    e.preventDefault();
    const tabIndex = parseInt(e.target.children[0].value); // Convert the value to a number
    // console.log("ssss",tabIndex);
    switch (tabIndex) {
      case 1:
        setContName("Positive");
        break;
      case 2:
        setContName("Negative");
        break;
      case 3:
        setContName("Neutral");
        break;
      default:
        // alert("Not Found");
        setShowModal(false);
        break;
    }
  };

  const closeBtn = () => {
    setShowModal(true);
  };

  return (
    <div className="container">
      <div className="section">
        <form
          onSubmit={handleInput}
          className="section__top "
          placeholder="Enter tab index"
        >
          <input name="tabIndex" type="text" placeholder="Enter tab index" className="section__top-input"/>
          <button type="submit" className=" section__top-button">
            Change tab
          </button>
        </form>
        <div className="section__bottom-title">
          {/* Use handleTabClick to set the 'contName' state */}
          <span
            onClick={() => handleTabClick("Positive")}
            className={`spn ${contName === "Positive" ? "active" : ""}`}
          >
            POSITIVE
          </span>
          <span
            onClick={() => handleTabClick("Negative")}
            className={`spn ${contName === "Negative" ? "active" : ""}`}
          >
            NEGATIVE
          </span>
          <span
            onClick={() => handleTabClick("Neutral")}
            className={`spn ${contName === "Neutral" ? "active" : ""}`}
          >
            NEUTRAL
          </span>
        </div>
        <p>{contName} content</p>
      </div>
      {!showModal && <Main closeModal={closeBtn} />}
    </div>
  );
};

export default TabIndex;
