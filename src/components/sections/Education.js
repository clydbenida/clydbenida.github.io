const Education = () => {
   return (
      <>
         <hr className="m-0" />
         <section className="resume-section" id="education">
            <div className="resume-section-content">
               <h2 className="mb-5">Education</h2>
               <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                     <h3 className="mb-0">Lyceum of The Philippines University</h3>
                     <div className="subheading mb-3">Bachelor of Science in Information Technology</div>
                     <p>GPA: 3.23</p>
                  </div>
                  <div className="flex-shrink-0"><span className="text-primary">June 2015 - December 2017</span></div>
               </div>
               <div className="d-flex flex-column flex-md-row justify-content-between">
                  <div className="flex-grow-1">
                  <h3 className="mb-0">AMA University</h3>
                  <div className="subheading mb-3">Bachelor of Science in Information Technology</div>
                  <p>GPA: 3.56</p>
                  </div>
                  <div className="flex-shrink-0"><span className="text-primary">January 2018 - Present</span></div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Education