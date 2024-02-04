import "../../css/footer.css";
function Footer() {
  const tweets = [
    {
      username: "coder123",
      tweetHTML:
        '<p>Excited to launch my new coding project! 🚀 <span class="hashtag">#CodingAdventures</span> <span class="hashtag">#WebDev</span></p>',
      timestamp: "2024-02-01T08:30:00Z",
      likes: 15,
      retweets: 7,
    },
    {
      username: "designer_guru",
      tweetHTML:
        '<p>Just finished a stunning design for a client. Thrilled to see it come to life! 💻✨ <span class="hashtag">#DesignMagic</span> <span class="hashtag">#GraphicDesign</span></p>',
      timestamp: "2024-02-02T12:45:00Z",
      likes: 32,
      retweets: 12,
    },
    {
      username: "tech_insider",
      tweetHTML:
        '<p>Breaking: The latest tech innovation is set to revolutionize the industry. Stay tuned for updates! 🌐🔧 <span class="hashtag">#TechNews</span> <span class="hashtag">#Innovation</span></p>',
      timestamp: "2024-02-03T18:15:00Z",
      likes: 50,
      retweets: 23,
    },
  ];
  return (
    <>
      <footer className="footer-32892 pb-0">
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-md pr-md-5 mb-4 mb-md-0">
                <h3>About Us</h3>
                <p>
                  Passionate full-stack developer transforming ideas into
                  seamless digital experiences. Let's build something amazing
                  together!
                </p>

                <ul className="list-unstyled quick-info mb-4">
                  <li>
                    <a href="#" className="d-flex align-items-center">
                      <span className="icon mr-3 icon-phone"></span> +1 291 3912
                      329
                    </a>
                  </li>
                  <li>
                    <a href="#" className="d-flex align-items-center">
                      <span className="icon mr-3 icon-envelope"></span>{" "}
                      info@gmail.com
                    </a>
                  </li>
                </ul>

                <form action="#" className="subscribe">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your e-mail"
                  />
                  <input
                    type="submit"
                    className="btn btn-submit"
                    value="Send"
                  />
                </form>
              </div>
              <div className="col-md mb-4 mb-md-0">
                <h3>Latest Tweet</h3>

                <ul className="list-unstyled tweets">
                  {tweets.map((tweet) => (
                    <li className="d-flex">
                      <div className="mr-4">
                        <span class="fa-brands fa-twitter"></span>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{ __html: tweet.tweetHTML }}
                        className="mx-2"
                      ></div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-md-3 mb-4 mb-md-0">
                <h3>Instagram</h3>
                <div className="row gallery">
                  <div className="col-6">
                    <a href="#">
                      <img
                        src="footer/img_1.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="footer/img_2.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#">
                      <img
                        src="footer/img_3.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="footer/img_4.jpg"
                        alt="Image"
                        className="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="pb-3 footer-menu-wrap d-md-flex align-items-center">
                  <ul className="list-unstyled footer-menu mr-auto">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Our works</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Contacts</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
