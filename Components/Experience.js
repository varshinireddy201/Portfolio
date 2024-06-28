function Experience({ bgColor, refer }) {
  return (
    <div
      className={`flex-col justify-center lg:h-full ${bgColor} items-top space-y-10 `}
      ref={refer}
    >
      <div className=" flex justify-center">
        <h1 className="pt-12 text-3xl font-extralight font text-white">
          Experience
        </h1>
      </div>

      <div className="flex justify-center overflow-y-scroll scrollbar-hide h-3/4 border-2 m-10 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-black text-white max-w-6xl">
          <div className="grid grid-cols-2">
            <div className="flex justify-center p-4 ">
              <h1 className="font-medium text-3xl mb-4 text-slate-50">
                AvisTech
              </h1>
            </div>
            <div className="flex justify-end">
              <div>
               <img src="/briefcase.jpeg" alt="brief" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <ul className="list">
              <li className="font-medium text-lg mb-4 text-slate-50">
                Software Developer
              </li>
              <li>
               • Implemented OAuth2 JWT-based Single Sign-On (SSO) authentication
                 and migrated a modular monolithic architecture to a Spring Boot
                 microservices solution, enhancing platform performance and user experience by 20%..
              </li>
              <li>
               • Developed and maintained automated UI tests with Selenium WebDriver,
                 increased test coverage by 20%, and reduced manual testing time by 30%,
                 alongside designing data pipelines for Elasticsearch integration.
              </li>
              <li>
               • Designed and developed scalable AWS cloud solutions using services like
                 EC2, Lambda, S3, and RDS, and ensured code quality through Junit frameworks,
                 unit testing, and integration testing, while collaborating in Agile environments.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex justify-center p-4 ">
              <h1 className="font-medium text-3xl mb-4 text-slate-50">
                Verisk
              </h1>
            </div>
            <div className="flex justify-end">
              <div>
                <img src="/briefcase.jpeg" alt="brief" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <ul className="list">
              <li className="font-medium text-lg mb-4 text-slate-50">
                Associate Software Developer
              </li>
              <li>
                • Developed dynamic web applications using React JS and Tailwind CSS,
                  re-engineered microservices with Express.js and ES6, achieving significant
                  improvements in data management efficiency and error reduction.
              </li>
              <li>
                • Demonstrated expertise in Java EE technologies (Servlets, JSP, EJB, JPA)
                  and Spring Framework (Spring Core, Spring MVC, Spring Boot), integrating
                  MongoDB with Spring Mongo Template.
              </li>
              <li>
                • Implemented automated infrastructure provisioning with AWS CloudFormation
                  and Jenkins, enhancing deployment efficiency and maintainability through
                  Infrastructure as Code (IaC) practices.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
