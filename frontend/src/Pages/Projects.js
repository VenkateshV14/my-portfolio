import React from "react";
import "../CSS/Projects.css";

function Projects() {
  const projectData = [
    {
      title: "🤖 Portfolio Automation",
      description:
        "Built a Production-Ready DevOps Portfolio Using React, Node.js, Docker, Terraform & GitHub Actions.",
      blogLink: "https://portfolio-website-automation.hashnode.dev/devops-portfolio",
      codeLink: "https://github.com/VenkateshV14/portfolio-automation.git",
    },
    {
      title: "🚀 3-Tier Microservice Automation",
      description:
        "Containerized and orchestrated three e-commerce microservices using Docker, Kubernetes (EKS), and GitHub Actions CI/CD for seamless deployment.",
      blogLink: "https://microservices-automation.hashnode.dev/docker-k8s-cicd",
      codeLink: "https://github.com/VenkateshV14/microservices-automation.git",
    },
    {
      title: "🌍 Static Website Hosting (IaC)",
      description:
        "Deployed a static website on AWS S3 bucket, using Infrastructure as Code - Terraform.",
      blogLink: "https://terraform-static-website.hashnode.dev/terraform-s3-static-site",
      codeLink: "https://github.com/VenkateshV14/terraform-s3-website.git",
    },
    {
      title: "☁️ AWS Cloud Resume Challenge",
      description:
        "The AWS Cloud Resume Challenge is a hands-on project where you build and deploy a resume website using AWS S3, Lambda, API Gateway, DynamoDB, and CI/CD to showcase cloud and DevOps skills. 🚀",
      blogLink: "",
      codeLink: "",
    },
  ];

  const handleClick = (link) => {
    if (link) {
      window.open(link, "_blank", "noopener noreferrer");
    } else {
      alert("🚀 Project will be updated soon...");
    }
  };

  return (
    <section className="projects" id="projectss">
      <h1>Projects</h1>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-inner">

              {/* Front Side */}
              <div className="card-front">
                <h3>{project.title}</h3>
              </div>

              {/* Back Side */}
              <div className="card-back">
                <p>{project.description}</p>
                <div className="btn-group">
                  <button onClick={() => handleClick(project.blogLink)} className="view-btn">
                    View Blog
                  </button>
                  <button onClick={() => handleClick(project.codeLink)} className="view-btn">
                    View Code
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
