import React from 'react';

function Contact() {

  return (
    <div>
      <from action="contact">
        <div className="container shadow-lg p-3 mb-5 bg-white rounded ">
          <div class="row">
            <div className="form-group">
              <label for="form_name">Firstname</label>
              <input id="form_name" type="text" Name="name" class="form-control" placeholder="Firstname" required="required" data-placeholder="Valid Firstname is required."></input>
              <div class="help-block with-errors"></div>
            </div>
          </div>
        </div>
          <div class="col-md-2">
            <div className="form-group">
              <label for="form_lastname">Lastname</label>
              <input id="form_lastname" type="text" Name="surname" class="form-control" placeholder="Lastname" required="required" data-placeholder="Valid Lastname is required."></input>
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="col-md-2">
            <div className="form-group">
              <label for="form_email">Email</label>
              <input id="form_email" type="email" Name="email" class="form-control" placeholder="Email" required="required" data-placeholder="please, leava me a detailed message."></input>
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="col-md-12 offset-md-3 offset-sm-3">
            <div className="form-group">
              <label for="form_message">message</label>
              <input id="form_message" Name="message" class="form-control" placeholder="Message" required="required" data-placeholder="Valid Message is required."></input>
              <div class="help-block with-errors"></div>
            </div>
          </div>
          <div class="col-md-12 offset-md-3"></div>
          <input type="submit" class="btn btn-primary" value="Send message"></input>
      </from>
    </div>
  );
}

export default Contact;