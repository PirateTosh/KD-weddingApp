import React, { Component } from "react";
import Meteor, { createContainer } from "react-web-meteor";
import $ from "jquery";
import "./legal.css";
import { AppTItle, AppURL } from "../../config/config.js";

class privacyPolicy extends Component {
  componentDidMount() {
    $("#spanHeaderText").text("legal");
  }
  render() {
    let styles = {
      link: {
        maxWidth: "400px",
        padding: "15px"
      }
    };
    $(".backIcon").show();
    $(".backIconMobile").show();
    const appDomain = AppURL;
    const appName = AppTItle;
    return (
      <div className="container-fluid respobsiveMarginTop contactusmaincontent appGradientColor">
        <h3 className="headingTop headingTopMobile appBodyFontColor appBodyFontFamily">
          {" "}
        </h3>
        <div className="legal-content">
          <div className="legal-header">
            <p>{appName}</p>
            <p>{appDomain}</p>
            <p>PRIVACY POLICY</p>
          </div>
          <div>
            <div>
              <p>
                THIS DOCUMENT IS AN ELECTRONIC RECORD IN TERMS OF INFORMATION
                TECHNOLOGY ACT, 2000 AND RULES THERE UNDER AS APPLICABLE AND THE
                AMENDED PROVISIONS PERTAINING TO ELECTRONIC RECORDS IN VARIOUS
                STATUTES AS AMENDED BY THE INFORMATION TECHNOLOGY AMENDMENT ACT,
                2008. THIS ELECTRONIC RECORD IS GENERATED BY A COMPUTER SYSTEM
                AND DOES NOT REQUIRE ANY PHYSICAL OR DIGITAL SIGNATURES.
              </p>
              <p>
                THIS DOCUMENT IS PUBLISHED IN ACCORDANCE WITH THE PROVISIONS OF
                RULE 3 (1) OF THE INFORMATION TECHNOLOGY (INTERMEDIARIES
                GUIDELINES) RULES, 2011 THAT REQUIRE PUBLISHING THE RULES AND
                REGULATIONS, TERMS OF SERVICES, PRIVACY POLICY AND USER
                AGREEMENT FOR ACCESS OR TERMS OF USAGE OF THE PRESENT APP OR ITS
                ALLEGED CONTENTS THEREOF.
              </p>
              <p>
                YOUR USE OF THIS APP, SITE OR YOUR PROVISION TO USE OF ANY
                PERSONAL INFORMATION CONSTITUTES YOUR AGREEMENT TO THESE TERMS
                AND ANY SUBSEQUENT CHANGES TO THESE TERMS; DO NOT USE THE APP,
                SITE OR PROVIDE INFORMATION IF YOU DO NOT AGREE WITH ALL OF THE
                TERMS.
              </p>
            </div>
            <div>
              <p>PRIVACY NOTICE</p>
              <p>
                Though we make every effort to preserve the user privacy, we may
                need to disclose personal information when required by law
                wherein we have a good-faith belief that such action is
                necessary to comply with an appropriate law enforcement
                investigation, current judicial proceeding, a court order or
                legal process served on our APP, Web Site, or as required by
                law.
              </p>
              <p>GENERAL DESCRIPTION</p>
              <p>
                {appDomain} collects a Person's Name, Mailing Address, Phone
                Number and E-mail Address. This information is requested during
                the submission of a query by an agency from or to us and is used
                to deliver services that the user/agency has requested.
              </p>
              <p>NORMAL BROWSING</p>
              <p>
                As with many websites, we collect certain information. When you
                browse, read, or download information from {appDomain}, data is
                collected by {appDomain} including but not limited to your IP
                address, URL request, browser type, and date and time of your
                request. Additionally, we collect the IP addresses of visitors,
                time of access, browser type, and web pages visited. This is
                primarily done for a smooth transition of the user and to adhere
                to the security parameters of the {appDomain} itself. We do not
                collect any other information without your knowledge and
                permission.
              </p>
              <p>INFORMATION YOU PROVIDE</p>
              <p>
                {appDomain} requests personally identifiable information when
                you seek a query from the Contact Us Tab in the {appDomain} and
                is subject to the Terms of Use as mentioned on such site. (Such
                information may be used or requested to perform research,
                improve usability of the site, administer mailing lists or
                online communities or other activities related) to {appDomain}{" "}
                services. This information may include, but is not limited to,
                person&rsquo;s names, email addresses, location.
              </p>
              <p>DISCLOSURE OF INFORMATION</p>
              <p>
                Available log records and all data stored on our servers may be
                accessed by our system administrators. In the event that we are
                required by law (including a court order) to disclose the
                information you submit. We, however, prefer to independently
                object to overly broad requests for access to information about
                users of our {appDomain}, but we cannot assure you that we will
                be able to do this in all cases. If you do not challenge the
                disclosure request yourself, we may be legally required to turn
                over your information. The challenge of such overly broad
                requests is inclusive but not limited to denial of information
                basis the judgment of the Hon'ble Supreme Court of India in the
                matter of Shreya Singhal v. Union of India; (2015) 5 SCC 1 or
                any other relevant judgment which may be applicable in the facts
                and circumstances of the matter.
              </p>
              <p>HOW IS THE INFORMATION USED</p>
              <p>
                {appDomain} primary goal in collecting personal information is
                to provide you, the community member, with a potentially
                fulfilling experience of using the {appDomain} as meant to the
                best possible smooth and transitionally manner by its
                creator/agency/user.
              </p>
              <p>LOG FILES</p>
              <p>
                Like most standard {appDomain} use log files. This includes IP
                (Internet Protocol) addresses, browser type, ISP (internet
                service provider), referring / exit pages, platform type, date /
                time stamp and number of clicks to analyze trends, administer
                the site, track user's movement in the aggregate, and gather
                broad demographic information for aggregate use. IP addresses,
                etc. are not linked to personally identifiable information at
                any given time.
              </p>
              <p>COOKIES</p>
              <p>
                As set forth above under "Normal Browsing" anonymous users may
                receive session cookies while visiting our website while their
                browser is open. "Users" are subject to the {appDomain} and
                their individual Terms of Service. Registered Users receive
                session cookies when they are signed into our {appDomain}. To
                facilitate our functions, we may use cookies to recognize when
                you return to our website, if any.
              </p>
              <p>POSTING</p>
              <p>
                Posting or updating content is a public action undertaken by
                Users who are subject to the {appDomain} / Terms of Service. For
                the avoidance of doubt, identification of all contributed
                content may include, but is not limited to, display of your
                name. All content may be retained for restorative, archival, or
                research purposes by {appDomain}. Editing or deleting content
                may alter the displayed state of the content, but will not
                permanently delete the content from {appDomain}.
              </p>
              <p>OTHER WEBSITES</p>
              <p>
                When you are on {appDomain} and are asked for personal
                information by {appDomain}, you are sharing that information
                with {appDomain} only. However, Material on {appDomain} may link
                to independently run websites outside of the {appDomain} domain.{" "}
                {appDomain} is not responsible for the privacy practices or
                content of such websites. We encourage you to read the privacy
                policies of any websites you visit from this website as users
                and other members may be able to access certain information that
                you provide to them (e.g. your e-mail address and content that
                you post on the blog). {appDomain} is not in a position to
                monitor or control any particular user's or community member's
                use of that content.
              </p>
            </div>
            <div>
              <p>
                {appDomain} IS NOT ENGAGED IN THE OCCUPATION OF STORING,
                PROCURING OR USE OF THE INFORMATION (USER NAMES, PASSWORDS OR
                EMAILS) THAT YOU MAY ACCESS BY THE USE OF YOUR SOCIAL NETWORKING
                ACCOUNT FOR THE PURPOSES OF LIKE, TWEETING, +1 BUTTON, OR
                MENTIONS AND SUBSEQUENTLY CANT BE HELD LIABLE FOR THE SAME.
              </p>
              <p>
                THIS DOCUMENT IS AN ELECTRONIC RECORD IN TERMS OF INFORMATION
                TECHNOLOGY ACT, 2000 AND RULES THERE UNDER AS APPLICABLE AND THE
                AMENDED PROVISIONS PERTAINING TO ELECTRONIC RECORDS IN VARIOUS
                STATUTES AS AMENDED BY THE INFORMATION TECHNOLOGY ACT, 2000.
                THIS ELECTRONIC RECORD IS GENERATED BY A COMPUTER SYSTEM AND
                DOES NOT REQUIRE ANY PHYSICAL OR DIGITAL SIGNATURES.
              </p>
              <p>
                BY USING THE {appDomain} AT ANY GIVEN TIME YOU AGREE TO OUR
                TERMS AND CONDITIONS.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default privacyPolicy;