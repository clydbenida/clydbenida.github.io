import { Row, Col } from "react-bootstrap"

const CallToAction = () => {
   return (
      <>
         <hr className="m-0" />
         
         <section className="contact-section" id="callToAction">
            <div className="contact-section-content">
               <h2>Send the details and we'll work it together</h2>
               <form>
                  <Row>
                     <Col>
                        <div>
                           <input type="text" className="form-control fomr-control-lg" placeholder="First name" />
                        </div>
                     </Col>
                     <Col>
                        <div>
                           <input type="text" className="form-control fomr-control-lg" placeholder="Last name" />
                        </div>
                     </Col>
                  </Row>
                  <div className="my-3">
                     <input type="email" className="form-control form-control-lg" placeholder="Your Email" />
                  </div>
                  <div className="my-3">
                     <textarea className="form-control" rows="5" placeholder="Write a detailed explanation about your request"></textarea>
                  </div>
                  <div className="my-3">
                     <button className="btn btn-lg bg-primary text-primary">
                        SEND
                     </button>
                  </div>
               </form>
            </div>
         </section>
      </>
   )
}

export default CallToAction