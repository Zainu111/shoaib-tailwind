import React from "react";

export default function Footer() {
  return (
    <section className="bg-white px-4 py-4">
      <div className="max-w-max mx-auto">
        <div className="mt-9 md:mt-14 flex justify-center items-center">
          <a href="#" target="_blank" className="mx-3">
            <img
              alt="Linkedin Icon"
              loading="lazy"
              width={18}
              height={18}
              decoding="async"
              data-nimg={1}
              className="footer-social-link transition-all duration-300"
              src="https://sothebysrealty.ae/assets/icons/linkedin.svg"
              style={{ color: "transparent" }}
            />
          </a>
          <a href="#" target="_blank" className="mx-3">
            <img
              alt="Youtube Icon"
              loading="lazy"
              width={19}
              height={15}
              decoding="async"
              data-nimg={1}
              className="footer-social-link transition-all duration-300"
              src="https://sothebysrealty.ae/assets/icons/youtube.svg"
              style={{ color: "transparent" }}
            />
          </a>
          <a href="#" target="_blank" className="mx-3">
            <img
              alt="Facebook Icon"
              loading="lazy"
              width={12}
              height={20}
              decoding="async"
              data-nimg={1}
              className="footer-social-link transition-all duration-300"
              src="https://sothebysrealty.ae/assets/icons/facebook.svg"
              style={{ color: "transparent" }}
            />
          </a>
          <a href="#" target="_blank" className="mx-3">
            <img
              alt="Instagram Icon"
              loading="lazy"
              width={18}
              height={18}
              decoding="async"
              data-nimg={1}
              className="footer-social-link transition-all duration-300"
              src="https://sothebysrealty.ae/assets/icons/instagram.svg"
              style={{ color: "transparent" }}
            />
          </a>
        </div>

        <div className="text-left md:text-center pt-10 md:pt-5 font-acta tracking-wider text-[9px] md:text-[10px] font-normal text-black/70">
          <div className="w-full h-[1px] bg-black/5 mb-3" />
          <span className="text-black/90">2024 © Shoaib Shahid.</span> ALL
          RIGHTS RESERVED.
        </div>
      </div>
    </section>
  );
}
