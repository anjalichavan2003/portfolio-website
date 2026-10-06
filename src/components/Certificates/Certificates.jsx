import React, { useState } from "react";
import "./Certificates.css";

import javaCertificate from "../../assets/java-certificate.png";
import pythonCertificate from "../../assets/python-ml-certificate.png";
import mernCertificate from "../../assets/mern-certificate.png";
import dsaCertificate from "../../assets/dsa-certificate.png";
import nptelCertificate from "../../assets/nptel-java-certificate.png";
import nptelCertificate2 from "../../assets/getting-started.png";

const certificates = [
  {
    id: 1,
    title: "Full Stack Developer – Java Plus",
    organization: "SEED Infotech",
    year: "2025",
    grade: "Grade A",
    image: javaCertificate,
  },
  {
    id: 2,
    title: "Python with Machine Learning and AI",
    organization: "SEED Infotech",
    year: "2026",
    image: pythonCertificate,
  },
  {
    id: 3,
    title: "Web Development / MERN Stack",
    organization: "Apna College",
    year: "2025",
    image: mernCertificate,
  },
  {
    id: 4,
    title: "DSA With Java",
    organization: "Apna College",
    year: "2026",
    image: dsaCertificate,
  },
  {
    id: 5,
    title: "Java Programming Fundamentals",
    organization: "NPTEL",
    year: "2025",
    image: nptelCertificate,
  },
  {
    id: 6,
    title: "Getting Started With Competitive Programming",
    organization: "NPTEL",
    year: "2025",
    image: nptelCertificate2,
  },
];

const Certificates = () => {
  // Number of certificates currently visible
  const [visibleCount, setVisibleCount] = useState(2);

  const showMoreCertificates = () => {
    setVisibleCount((prevCount) =>
      Math.min(prevCount + 2, certificates.length),
    );
  };

  const showLessCertificates = () => {
    setVisibleCount(2);
  };

  const visibleCertificates = certificates.slice(0, visibleCount);

  const allCertificatesVisible = visibleCount === certificates.length;

  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-container">
        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="certificates-heading">
          <p className="section-subtitle">MY ACHIEVEMENTS</p>

          <h2>Certifications</h2>

          <p className="section-description">
            Certifications and courses that have strengthened my technical
            skills and development knowledge.
          </p>
        </div>

        {/* =========================
            CERTIFICATES GRID
        ========================== */}
        <div className="certificates-grid">
          {visibleCertificates.map((certificate) => (
            <div className="certificate-card" key={certificate.id}>
              {/* Certificate Image */}
              <div className="certificate-image-wrapper">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="certificate-image"
                />
              </div>

              {/* Certificate Details */}
              <div className="certificate-content">
                <h3>{certificate.title}</h3>

                <p className="certificate-organization">
                  {certificate.organization}
                </p>

                {/* Year / Grade */}
                <div className="certificate-info">
                  <span>{certificate.year}</span>

                  {certificate.grade && <span>{certificate.grade}</span>}
                </div>

                {/* View Certificate */}
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-button"
                >
                  View Certificate
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* =========================
            VIEW MORE / SHOW LESS
        ========================== */}
        {certificates.length > 2 && (
          <div className="certificates-more">
            {!allCertificatesVisible ? (
              <button
                type="button"
                className="view-more-button"
                onClick={showMoreCertificates}
              >
                View More Certificates
                <span>↓</span>
              </button>
            ) : (
              <button
                type="button"
                className="view-more-button"
                onClick={showLessCertificates}
              >
                Show Less
                <span className="arrow-up">↑</span>
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
