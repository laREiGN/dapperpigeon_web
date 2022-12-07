import React from "react";
import { Helmet } from "react-helmet";

import './TempLandingPage.css'

export default function TempLandingPage() {

    return (
        <div className="temp-landing">
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
            <h1 className="tl-text">Coming Soon!</h1>
            <h2 className="tl-sub">Sorry! Our code bugs are doing their best to get this website online as soon as possible.</h2>
            <h2 className="tl-sub">Feel free to subscribe to our mailing list for the newest updates.</h2>

            <div id="mlb2-2394620" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-2394620">
                <div className="ml-form-align-center ">
                    <div className="ml-form-embedWrapper embedForm">
                        <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
                        <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/242375/forms/73193342187341708/subscribe" data-code="" method="post" target="_blank">
                            <div className="ml-form-formContent horozintalForm">
                                <div className="ml-form-horizontalRow">
                                <div className="ml-input-horizontal">
                                    <div style={{width: '100%'}} className="horizontal-fields">
                                        <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                            <input type="email" className="form-control" data-inputmask="" name="fields[email]" placeholder="Email" autoComplete="email"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="ml-button-horizontal primary ">
                                    <button type="submit" className="primary">Subscribe</button>
                                        <button disabled="disabled" style={{display: 'none'}} type="button" className="loading">
                                            <div className="ml-form-embedSubmitLoad"></div>
                                            <span className="sr-only">Loading...</span>
                                        </button>
                                </div>
                                </div>
                            </div>
                            <div className="ml-form-recaptcha ml-validate-required" style={{float: 'left'}}>
                                <div className="g-recaptcha" data-sitekey="6Lf1KHQUAAAAAFNKEX1hdSWCS3mRMv4FlFaNslaD"></div>
                            </div>
                            <input type="hidden" name="ml-submit" value="1"/>
                            <div className="ml-mobileButton-horizontal">
                                <button type="submit" className="primary">Subscribe</button>
                                <button disabled="disabled" style={{display: 'none'}} type="button" className="loading">
                                    <div className="ml-form-embedSubmitLoad"></div>
                                    <span className="sr-only">Loading...</span>
                                </button>
                            </div>
                            <input type="hidden" name="anticsrf" value="true"/>
                        </form>
                    </div>
                    <div className="ml-form-successBody row-success" style={{display: 'none'}}>
                        <div className="ml-form-successContent">
                            <h3 className="tl-sub">Thank you!</h3>
                            We are excited that you'll join us on our journey!
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
    )
}