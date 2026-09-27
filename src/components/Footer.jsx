import React from "react";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="footer">
      <footer class="py-3 fixed-bottom"   style={{
      backgroundColor: '#EDEDED',
    }}>
        <div class="container" style={{ position: "relative" }}>
          <p class="m-0 text-center text-black">
            Copyright &copy; beauhobba.com 2026
          </p>
          <a
            href="https://www.linkedin.com/in/beau-hobba/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              position: "absolute",
              right: 15,
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              alignItems: "center",
              color: "#9A9A9A",
              opacity: 0.75,
              transition: "opacity 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = 1;
              e.currentTarget.style.color = "#6B6B6B";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = 0.75;
              e.currentTarget.style.color = "#9A9A9A";
            }}
          >
            <AiFillLinkedin size={22} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
