const Popup = ({ title, closePopup, deleteElement }) => {
  return (
    <div>
      <div className="popup">
        <span>{title}</span>
        <div className="popup__btns">
          <button
            className="popup__btn"
            onClick={deleteElement}>
            Confirm
          </button>
          <button
            className="popup__btn popup__btn--cancel"
            onClick={closePopup}>
            Cancel
          </button>
        </div>
      </div>
      {/* I learned why these backdrops are super helpful now while creating models, I used to keep everything within one element, but the power of this structure is clear now :) */}
      <div
        className="backdrop"
        onClick={closePopup}></div>
    </div>
  )
}
export default Popup
