import './ButtonGroup.css';

const ButtonsGroup = () => {
  return (
    <div className="custom-mt">
      <p className='fw-bold ps-1'>Where would you like to start?</p>
      <button className="btn btn-light me-3 btn-width">Women</button>
      <button className="btn btn-light me-3 btn-width">Men</button>
      <button className="btn btn-light me-3 btn-width">Kids</button>
    </div>
  )
}

export default ButtonsGroup;