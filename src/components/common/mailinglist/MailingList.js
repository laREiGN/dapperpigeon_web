import React from "react";
import { Helmet } from "react-helmet";

import './MailingList.css'


export default function MailingList() {

  return (
    <div className="mailinglist-container">

      <Helmet>
        <script src="https://groot.mailerlite.com/js/w/webforms.min.js?v491724307ca3b85c1c754857e93994e5" type="text/javascript"></script>
        <script>
          {`function ml_webform_success_2394620() {
              var $ = ml_jQuery || jQuery;
              $('.ml-subscribe-form-2394620 .row-success').show();
              $('.ml-subscribe-form-2394620 .row-form').hide();
          }`}
        </script>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Helmet>

      <div className="ml-subscribe-form ml-subscribe-form-2394620">
        <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/242375/forms/73193342187341708/subscribe" data-code="" method="post" target="_blank">
          <div className="ml-row">
            <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
              <input type="email" className="form-control email-input" data-inputmask="" name="fields[email]" placeholder="Type your email adress..." autoComplete="email" />
            </div>
            <div className="ml-button">
              <button type="submit" className="btn secondary">JOIN NEWSLETTER</button>
            </div>
          </div>
          <div className="mailinglist-form_recaptcha ml-validate-required" style={{ float: 'left' }}>
            <div className="g-recaptcha" data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD"></div>
          </div>
          <input type="hidden" name="ml-submit" value="1" />
          <input type="hidden" name="anticsrf" value="true" />
        </form>
      </div>  
    </div>
  )
}