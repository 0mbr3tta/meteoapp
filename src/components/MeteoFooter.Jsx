const MeteoFooter = function(){
    return(
        <footer className="bg-primary text-white text-center p-4 mt-5">
        <div>
          <h5>Per rimanere sempre aggiornato seguici anche sui nostri social </h5>
          <div className="d-flex justify-content-center">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <i className="bi bi-facebook" style={{ fontSize: '2rem' }}></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <i className="bi bi-twitter" style={{ fontSize: '2rem' }}></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <i className="bi bi-instagram" style={{ fontSize: '2rem' }}></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
              <i className="bi bi-linkedin" style={{ fontSize: '2rem' }}></i>
            </a>
          </div>
        </div>
        <div className="mt-3">
          <p>&copy;Ombretta & Sole </p>
        </div>
      </footer>)}
export default MeteoFooter