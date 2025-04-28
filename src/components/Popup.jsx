const Popup = ({ title }) => {
  const handleConfirm = () => {
    console.log('Confirm button clicked!')
  }

  const handleCancel = () => {
    console.log('Cancel button clicked!')
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
            onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
      <div className="backdrop"></div>
    </div>
  )
}
export default Popup
