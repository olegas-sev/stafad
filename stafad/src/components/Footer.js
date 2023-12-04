const Footer = () => {
  return (
    <footer>
      <div ClassName="FooterSpace"></div>
      <button id="showAboutUs">About Us</button>

      <div id="aboutUsPopup" class="popup">
        <div class="popup-content">
          <span id="closeAboutUs" class="close-button">
            &times;
          </span>
          <h1>About Stafad</h1>
          <p>
            Stafad was established with a visionary goal – to revolutionize the
            traditional classifieds scene in Iraq. Our platform seamlessly
            accommodates a wide range of listings, spanning both general items
            and commercial advertisements. Over time, Stafad aspires to solidify
            its position as Iraq's preferred classifieds platform, ushering in a
            transformative era for online trade and connectivity. Our commitment
            is to provide the people of Iraq with a user-friendly, reliable, and
            efficient classifieds platform that facilitates their various needs
            and aspirations.
          </p>
        </div>
        <script src="aboutus.js"></script>
      </div>

      <a href="privacy.html" class="button">
        Read Privacy Policy
      </a>
      <a href="contactus.html" class="button">
        Contact Us
      </a>
    </footer>
  );
};
export default Footer;
