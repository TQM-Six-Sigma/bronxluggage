import "../css/ContactUs.css";
const ContactUs = () => {
  return (
    <>
      <div className="container dtp-contactus-container">
        <h1 className="dtp-titleShadow">Contact Us</h1>
        <h2 className="text-center fst-italic mb-5">
          Together we change the world
        </h2>
        <div className="d-flex justify-content-around flex-wrap mb-5">
          <div className="contactCard col-md-3 col-sm-12 m-auto">
            <img
              src={process.env.PUBLIC_URL + "/images/ContactUs/tanphat.png"}
              className=""
              alt="tanphat"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <p className="text-center text-bg-secondary">
              DUONG TAN PHAT <br />
              duongtanphat2019@gmail.com
            </p>
          </div>
          <div className="contactCard col-md-3 col-sm-12 m-auto">
            <img
              src={process.env.PUBLIC_URL + "/images/ContactUs/minhnhan.png"}
              className=""
              alt="minhnhan"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <p className="text-center text-bg-secondary">
              NGUYEN MINH NHAN <br />
              xjaozen@gmail.com
            </p>
          </div>
          <div className="contactCard col-md-3 col-sm-12 m-auto">
            <img
              src={process.env.PUBLIC_URL + "/images/ContactUs/anhtoan.png"}
              className=""
              alt="anhtoan"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <p className="text-center text-bg-secondary">
              HO ANH TOAN <br />
              hoanhtoan10a92016bb@gmail.com
            </p>
          </div>
        </div>
        <h2 className="text-center">Thanks for taking the time to contact us</h2>
        <article className=""style={{textAlign: 'justify'}}>
          On behalf of our entire eProject team, we would like to express our
          deepest gratitude to our school, professors, and the dedicated
          EProject support team for your invaluable guidance and unwavering
          support throughout this challenging endeavor. Your expertise,
          insights, and encouragement have been instrumental in our successful
          completion of this project. We especially appreciate the guidance, support, constructive feedback on our
          proposals, timely assistance with technical difficulties. These contributions were essential in navigating
          the complexities of the project and ensuring a positive outcome.
          Moreover, your commitment to fostering a collaborative and supportive
          learning environment has enabled us to develop valuable skills in
          project management,
          teamwork, critical thinking, and problem-solving. The knowledge and
          experience gained during this eProject will undoubtedly serve us well
          in our future academic and professional pursuits. Thank you again for
          your dedication to our success. We are truly grateful for the
          opportunity to have learned and grown through this experience.
        </article>
        <div className="row mt-5">
          <div className="col-md-6">
          <img
              src={process.env.PUBLIC_URL + "/images/ContactUs/contactfptaptechcmt8.png"}
              className=""
              alt="Contact FPT Aptech"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-6">
          <iframe title="Contact FPT Aptech"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3241473192506!2d106.66363827688225!3d10.78646668936286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752feb31e24595%3A0xb3d6bce53f82a7c9!2sFPT%20Aptech!5e0!3m2!1sen!2sus!4v1728799076863!5m2!1sen!2sus"
            width="100%"
            height="500px"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
