import ButtonsGroup from '../ButtonsGroups/ButtonsGroup';
import './Carousel.css';

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active bg-yellow p-3">
          <div className='row'>
            <div className='col-7'>
              <img src="https://picsum.photos/id/490/650/400" className="d-block img-position" alt="..." />
            </div>
            <div className='col-4'>
              <div className=" d-none d-md-block mt-5">
                <h3 className='fw-bold'>Even more than you expect</h3>
                <h4><em>Fashion, Beauty, Designer and more</em></h4>
                <ButtonsGroup />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item bg-orange p-3">
          <img src="https://picsum.photos/id/248/650/400" className="d-block img-position" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item bg-red p-3">
          <img src="https://picsum.photos/id/237/650/400" className="d-block img-position" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel