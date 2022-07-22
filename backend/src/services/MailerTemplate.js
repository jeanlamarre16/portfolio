require("dotenv").config();
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const adminFirstName = process.env.ADMIN_FIRSTNAME;
const adminLastName = process.env.ADMIN_LASTNAME;
const adminEmail = process.env.ADMIN_EMAIL;

function sendMail(firstName, lastName, email, phone, message) {
  const text = `Vous avec reçu un message via le formulaire de votre site.`;
  const userLink = "http://localhost:3000/admin";
  const btnText = "Accéder à votre espace admin";
  const headerText = `${adminFirstName} ${adminLastName} - Prise de contact`;
  const adminTitle = `${adminFirstName} ${adminLastName}`;
  const adminActivity = "Développeur Web";

  transport.sendMail(
    {
      from: email,
      to: adminEmail,
      subject: `${headerText}`,
      html: `<!doctype html>
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
        <head>
          <meta http-equiv="content-type" content="text/html; charset=UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${adminTitle}</title>
          <style>
            body{
              height:100% !important;
              margin:0;
              padding:0;
              width:100% !important;
            }
            .ReadMsgBody{
              width:100%;
            }
            .ExternalClass{
              width:100%;
            }
            body{
              -ms-text-size-adjust:100%;
              -webkit-text-size-adjust:100%;
              font-family:Arial,sans-serif;
              font-size:16px;
              font-weight:normal;
              line-height:24px;
              color:#4A4A4A;
              background-color:#f4f4f4;
            }
            .btn a:visited{
              color:#fff !important;
            }
            @media only screen and (max-width: 600px){
                body{
                    width:100% !important;
                    min-width:100% !important;
                    background-color: #ffffff !important;
                }
            }	@media only screen and (max-width: 600px){
                    body{
                        -webkit-text-size-adjust:none !important;
                    }
      
            }	@media only screen and (max-width: 600px){
                    table{
                        -webkit-text-size-adjust:none !important;
                    }
      
            }	@media only screen and (max-width: 600px){
                    td{
                        -webkit-text-size-adjust:none !important;
                    }
      
            }	@media only screen and (max-width: 600px){
                    p{
                        -webkit-text-size-adjust:none !important;
                    }
      
            }	@media only screen and (max-width: 600px){
                    a{
                        -webkit-text-size-adjust:none !important;
                    }
      
            }	@media only screen and (max-width: 600px){
                    li{
                        -webkit-text-size-adjust:none !important;
                    }
      
            }	@media only screen and (max-width: 600px){
                    blockquote{
                        -webkit-text-size-adjust:none !important;
                    }
      
            }	@media only screen and (max-width: 600px){
                    table{
                        max-width:580px !important;
                        width:100% !important;
                    }
      
            }	@media only screen and (max-width: 600px){
                    #bodyTable{
                        background-color: #ffffff !important;
                    }
      
            } @media only screen and (max-width: 600px){
                    #bodyCell{
                        padding:0 !important;
                    }
      
            }	@media only screen and (max-width: 600px){
                    .column{
                        display:block !important;
                        width:100% !important;
                        padding:0 0 15px !important;
                        box-sizing:border-box;
                    }
      
            }	@media only screen and (max-width: 600px){
                    .column-22{
                        display:block !important;
                        width:100% !important;
                        padding:0 0 15px !important;
                        box-sizing:border-box;
                    }
      
            }	@media only screen and (max-width: 600px){
                    .column-65{
                        display:block !important;
                        width:100% !important;
                        padding:0 0 15px !important;
                        box-sizing:border-box;
                    }
      
            }	@media only screen and (max-width: 600px){
                    .column-78{
                        display:block !important;
                        width:100% !important;
                        padding:0 0 15px !important;
                        box-sizing:border-box;
                    }
      
            }	@media only screen and (max-width: 600px){
                    .column-25{
                        display:block !important;
                        width:100% !important;
                        padding:0 0 15px !important;
                        box-sizing:border-box;
                    }
      
            }	@media only screen and (max-width: 600px){
                    .column-50{
                        display:block !important;
                        width:100% !important;
                        padding:0 0 15px !important;
                        box-sizing:border-box;
                    }
                    .column:last-child{
                      padding-bottom:0 !important;
                    }
                    .column-22:last-child{
                      padding-bottom:0 !important;
                  }
            }	@media only screen and (max-width: 600px){
                  .section{
                      padding:20px !important;
                      border-radius:0 !important;
                  }
            } @media only screen and (max-width: 600px){
                    .footer .icon-text{
                        display:none !important;
                    }
      
            }	@media only screen and (max-width: 600px){
                    .mobile-centered-container{
                        text-align:center !important;
                    }
      
            }	@media only screen and (max-width: 600px){
              .mobile-centered-item{
                display:inline-block !important;
              }
            }
        </style>
        </head>
        <body style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background: #f4f4f4; color: #4A4A4A; font-family: Arial, sans-serif; font-size: 16px; font-weight: normal; height: 100% !important; line-height: 24px; margin: 0; padding: 0; width: 100% !important" bgcolor="#f4f4f4">
          <center>
            <table border="0" cellpadding="0" cellspacing="0" width="100%" id="bodyTable" style="height:100% !important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;background:#f4f4f4;border-collapse:collapse;color:#4A4A4A;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;line-height:24px;margin:0;mso-table-lspace:0pt;mso-table-rspace:0pt;padding:0;width:100% !important;" bgcolor="#f4f4f4">
              <tbody>
                <tr>
                  <td align="center" valign="top" id="bodyCell" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;height:100% !important;margin:0;mso-table-lspace:0pt;mso-table-rspace:0pt;padding:20px;width:100% !important;">
                    <!-- // BEGIN EMAIL -->
                    <table border="0" cellpadding="0" cellspacing="0" width="560" class="main" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                      <tbody>
                        <tr>
                          <td align="left" valign="top" class="header" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;background:#D2715B  url('https://link-to-another-hosted-image.png') repeat-y top;background-size:560px 150px;border-radius:5px 5px 0 0;mso-table-lspace:0pt;mso-table-rspace:0pt;padding:28px 130px;" bgcolor="#3F3D55">
                            <!-- // Header block // -->
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                              <tbody>
                                <tr>
                                  <td align="center" valign="middle" class="mobile-centered-container" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                                    <h1 class="header-heading mobile-centered-item" style="color:#fff;font-size:24px;letter-spacing:-.43px;line-height:30px;margin:0;padding:0 0 20px;">${adminFirstName} ${adminLastName} ${adminActivity}</h1>
                                    <div>
                                      <p class="header-text mobile-centered-item" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#fff;font-size:11px;line-height:14px;margin:0;padding-bottom:0;">
                                        <span style="padding: 0 11px 0 10px">
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="left" valign="top" class="section is-top-merged" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;background:#fff;border-radius:0 0 5px 5px;mso-table-lspace:0pt;mso-table-rspace:0pt;padding:20px 50px 40px;" bgcolor="#ffffff">
                              <!-- Content section -->
                              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                                <tbody>
                                  <tr>
                                    <td align="center" valign="top" class="section-heading" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;padding-bottom:15px;">
                                      <h5 style="color:#9B9B9B;font-size:11px;margin:0;padding:0;text-transform:uppercase;">${adminActivity}</h5>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="left" valign="top" class="content-item" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;padding-bottom:25px;">
                                      <h1 style="color:#4A4A4A;font-size:24px;letter-spacing:-.7px;line-height:29px;margin:0;padding:0;">
                                        <span class="highlighted-text" style="color: #000">Bonjour ${adminFirstName},</span>
                                      </h1>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="left" valign="top" class="content-item" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;padding-bottom:25px;">
                                      <p style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin:0;">${text}<br/><br/>Message : " ${message} "</p>
                                      <p><strong>Information du ou de la client.e :</strong></p>
                                      <p>Nom : ${lastName} </p>
                                      <p>Prénom : ${firstName} </p>
                                      <p>Email : ${email} </p>
                                      <p>Téléphone : ${phone}
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table border="0" cellpadding="0" cellspacing="0" align="center" class="btn" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;">
                                <tbody>
                                  <tr>
                                    <td align="center" valign="middle" class="btn-content" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;background:#F3E9E2;border:1px solid #4a4a4a;border-radius:30px;color:#fff;mso-table-lspace:0pt;mso-table-rspace:0pt;padding:4px 20px;" bgcolor="#A2F4DF">
                                      <a href=${userLink} target="_blank" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;color:#4a4a4a !important;display:block;font-family:Arial, sans-serif;font-size:13px;font-weight:bold;text-decoration:none;">${btnText}
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <!-- Section separator -->
                            <td align="left" valign="top" class="section-spacer" style="-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;mso-table-lspace:0pt;mso-table-rspace:0pt;padding:15px;"></td>
                          </tr>
                        </tbody>
                      </table>
                      <!-- END EMAIL // -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </center>
          </body>
      </html>`,
    },
    (err, info) => {
      if (err) console.error(err);
      else console.error(info);
    }
  );
}

module.exports = sendMail;
