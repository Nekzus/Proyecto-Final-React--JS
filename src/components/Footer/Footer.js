import React from 'react';

const Footer = () => {
    console.log('Render footer');
    return (
        <footer>
    <div className="container p-4 pb-0">
      <section className="mb-4">
        <a className="btn btn-outline-light btn-floating m-1" href="https://es-la.facebook.com/" role="button"><i
            className="fab fa-facebook-f"></i></a>
        <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/" role="button"><i
            className="fab fa-twitter"></i></a>
        <a className="btn btn-outline-light btn-floating m-1" href="https://myaccount.google.com/" role="button"><i
            className="fab fa-google"></i></a>
        <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/" role="button"><i
            className="fab fa-instagram"></i></a>
        <a className="btn btn-outline-light btn-floating m-1"
          href="https://linkedin.com/in/mauricio-sebastián-ortega-71b43788" role="button"><i
            className="fab fa-linkedin-in"></i></a>
        <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/Nekzus" role="button"><i
            className="fab fa-github"></i></a>
      </section>
    </div>
    <div className="text-center p-3" id="copyright">
      © 2021 Copyright:
      <a className="text-white" href="/"> Cines NKMAX </a>
    </div>
        </footer>
    )
}

export default Footer;
