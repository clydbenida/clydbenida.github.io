const CallToAction = () => {
   return (
      <>
         <hr class="m-0" />
         
         <section class="contact-section" id="callToAction">
            <div class="contact-section-content">
               <h2>Send the details and we'll work it together</h2>
               <form>
                  <div class="my-3">
                     <input type="email" class="form-control form-control-lg" placeholder="Email" />
                  </div>
                  <div class="my-3">
                     <textarea class="form-control" rows="5"></textarea>
                  </div>
                  <div class="my-3">
                     <button class="btn btn-lg bg-primary text-primary">
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