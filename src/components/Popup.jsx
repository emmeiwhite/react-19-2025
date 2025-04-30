const Popup = ({ title, closePopup }) => {
  const handleConfirm = () => {
    console.log('Confirm button clicked!')
  }

  return (
    <div>
      <div className="popup">
        <span>{title}</span>
        <div className="popup__btns">
          <button
            className="popup__btn"
            onClick={handleConfirm}>
            Confirm
          </button>
          <button
            className="popup__btn popup__btn--cancel"
            onClick={closePopup}>
            Cancel
          </button>
        </div>
      </div>
      <div className="backdrop"></div>
    </div>
  )
}
export default Popup
