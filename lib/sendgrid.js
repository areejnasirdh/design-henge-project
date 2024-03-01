import nodemailer from "nodemailer";
export const sendEmail = async (
    subject,
    name,
    // lastname,
    email,
    phone,
    content,
) => {
    const transporter = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },
        auth: {
            user: 'muhammadehtishamdh@gmail.com',
            pass: 'MBQfNc8tqLb3wH7p',
        },
    });
    const message = {
        // from: "areejdh@gmail.com",
        from: email,
        // from: "muhammadehtishamdh@gmail.com",
        // to: "muhammadehtishamdh@gmail.com",
        to: "leads@designhenge.com",
        cc: "affaq359@gmail.com",
        subject: subject,
        // html: `<h1>Hello world</h1>`
        html: `<div>
        <h1>${name}</h1>
        <h1>${email}</h1>
        <h1>${phone}</h1>
        <h1>${content ? content : ""}</h1>
        </div>`
//         html: `<div style="max-width: 600px; margin: auto;">
//     <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; padding: 30px 0;">
//         <tr>
//             <td style="text-align: center; max-width: 600px;">
//                 <img style="width: 260px; margin-bottom: 30px;" src="https://res.cloudinary.com/hamzakhan/image/upload/v1690455274/DesignAlligators/Alligator-logo-02_hltjp9.jpg" />
//             </td>
//         </tr>
//         <tr>
//             <td style="
//             height: 563px; max-height: 563px; min-height: 563px;
//             background-image: url('https://res.cloudinary.com/hamzakhan/image/upload/v1691392379/DesignAlligators/email-bg_v2tcow.jpg');
//             background-size: 100% 100%;">
//                 <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; text-align: center;">
//                     <tr>
//                         <td>
//                             <h3
//                                 style="color: #197a19; font-size: 25px; text-transform: uppercase; margin: 0; margin-top: 30px;">
//                                 You have Got a
//                                 New Lead!
//                             </h3>
//                             <p style="margin: 0; margin-bottom: 20px; color: #000000b0; font-weight: 500;">Here are
//                                 the details of the
//                                 prospect </p>
//                         </td>
//                     </tr>
//                 </table>
//                 ${title || price ? `<table border="0" cellpadding="0" cellspacing="0" style='width:100%'>
//                 <tr style="vertical-align: top;">
//                     <td style="width: 50%; padding-left:30px">
//                         <table border="0" cellpadding="0" cellspacing="0"
//                             style="width: 100%; padding: 15px 15px 15px 35px;">
//                             <tr>
//                                 <td>
//                                     <h6 style="margin: 0; color: #197a19; font-size: 15px;">Title</h6>
//                                     <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                     border-bottom: 1px solid #0000002b; padding-bottom: 2px; margin-bottom: 15px;
//                                     font-weight: 500;
//                                     ">${title }</p>
//                                 </td>
//                             </tr>
//                         </table>
//                     </td>
//                     <td style="width:50%;">
//                         <table border="0" cellpadding="0" cellspacing="0"
//                             style="width: 100%; padding: 15px 45px 15px 0px;">
//                             <tr>
//                                 <td>
//                                     <h6 style="margin: 0; color: #197a19; font-size: 15px;">Price</h6>
//                                     <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                     border-bottom: 1px solid #0000002b; padding-bottom: 2px; margin-bottom: 15px;
//                                     font-weight: 500;
//                                     ">$${price}</p>
//                                 </td>
//                             </tr>
//                         </table>
//                     </td>
//                 </tr>
//                 </table>` : ""}

//                 <table border="0" cellpadding="0" cellspacing="0" style='padding-left:30px; width: 100%;'>
//                     <tr style="vertical-align: top;">
//                         <td style="width: 50%;">
//                             <table border="0" cellpadding="0" cellspacing="0"
//                                 style="width: 100%; padding: 0px 15px 15px 35px;">
//                                 <tr>
//                                     <td>
//                                         <h6 style="margin: 0; color: #197a19; font-size: 15px;">Name</h6>
//                                         <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                         border-bottom: 1px solid #0000002b; padding-bottom: 2px; margin-bottom: 15px;
//                                         font-weight: 500;
//                                         ">${name}</p>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <h6 style="margin: 0; color: #197a19; font-size: 15px;">E-mail</h6>
//                                         <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                         border-bottom: 1px solid #0000002b; padding-bottom: 2px; margin-bottom: 15px;
//                                         font-weight: 500;
//                                         ">${email}</p>
//                                     </td>
//                                 </tr>
//                                 ${company
//                 ? `<tr>
//                                       <td>
//                                         <h6 style="margin: 0; color: #197a19; font-size: 15px;">
//                                           Company
//                                         </h6>
//                                         <p
//                                           style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                         border-bottom: 1px solid #0000002b; padding-bottom: 2px; font-weight: 500; margin-bottom: 15px;
//                                         "
//                                         >
//                                           ${company ? company : "-"}
//                                         </p>
//                                       </td>
//                                     </tr>`
//                 : ""
//             }
//                                 <tr>
//                                     <td>
//                                         <h6 style="margin: 0; color: #197a19; font-size: 15px;">Phone</h6>
//                                         <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                         border-bottom: 1px solid #0000002b; padding-bottom: 2px; font-weight: 500; margin-bottom: 15px;
//                                         ">${phone}</p>
//                                     </td>
//                                 </tr>
//                                 ${organization
//                 ? ` <tr>
//                                     <td>
//                                         <h6 style="margin: 0; color: #197a19; font-size: 15px;">Organization</h6>
//                                         <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                         border-bottom: 1px solid #0000002b; padding-bottom: 2px; font-weight: 500; margin-bottom: 15px;
//                                         ">${organization}</p>
//                                     </td>
//                                 </tr>`
//                 : ""
//             }
//                             </table>
//                         </td>
//                         <td style="width: 50%; padding: 0px 35px 15px 0px;">
                        
//                         <table border="0" cellpadding="0" cellspacing="0"
//                         style="width: 100%; padding: 0px 15px 15px 0px;">
//                             ${service
//                 ? `<tr>
//                                 <td>
//                                     <h6 style="margin: 0; color: #197a19; font-size: 15px;">Service</h6>
//                                     <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                         border-bottom: 1px solid #0000002b; padding-bottom: 2px; font-weight: 500; margin-bottom: 15px;
//                                         ">
//                                     ${service}</p>
//                                 </td>
//                             </tr>`
//                 : ""
//             }
//                             ${service_required
//                 ? `<tr>
//                                 <td>
//                                     <h6 style="margin: 0; color: #197a19; font-size: 15px;">Service Required</h6>
//                                     <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                         border-bottom: 1px solid #0000002b; padding-bottom: 2px; font-weight: 500; margin-bottom: 15px;
//                                         ">
//                                     ${service_required}</p>
//                                 </td>
//                             </tr>`
//                 : ""
//             }
//                             ${hear_by
//                 ? `<tr>
//                                 <td>
//                                     <h6 style="margin: 0; color: #197a19; font-size: 15px;">Hear By</h6>
//                                     <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                         border-bottom: 1px solid #0000002b; padding-bottom: 2px; font-weight: 500; margin-bottom: 15px;
//                                         ">
//                                     ${hear_by}</p>
//                                 </td>
//                             </tr>`
//                 : ""
//             }
//                             <tr>
//                                 <td>
//                                     <h6 style="margin: 0; color: #197a19; font-size: 15px;">Message</h6>
//                                     <p style="margin: 0; color: #000000ad; font-size: 14px; margin-top: 3px;
//                                     padding-bottom: 2px; font-weight: 500; line-height: 20px;">
//                                     ${content}</p>
//                                 </td>
//                             </tr>
//                         </table>
//                         </td>
//                     </tr>
//                 </table>

//                 <table border="0" cellpadding="0" cellspacing="0" style="margin: auto;">
//                     <tr>
//                         <td>
//                             <div style="margin: 100px 0;">
//                                 <a href='mailto:${email}' style="background-color: #197a19; color: #fff; padding: 8px 30px; font-weight: 700;text-decoration:none;
//                                 border-radius: 8px; cursor: pointer;">REPLY</a>
//                             </div>
//                         </td>
//                     </tr>
//                 </table>
//             </td>
//         </tr>
//     </table>
// </div>`
    };

    const info = await transporter.sendMail(message);

    console.log("Message sent: %s", info.messageId);
};









// import sgMail from "@sendgrid/mail";


// export const sendEmail2 = async (
//     subject,
//     name,
//     email,
//     phone,
//     company,
//     message,
//     organization,
//     service,
//     service_required,
//     hear_by,
//     title,
//     price
// ) => {
//     // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//     sgMail.setApiKey("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");


//     const msg = {
//         // to: "leads@designalligators.com",
//         to: "umair.xmair@gmail.com",
//         from: "support@googlebiz.co",
//         // from: "umair.xmair@gmail.com",
//         subject: subject,
//         html: `
//     <div style="max-width: 600px; margin: auto;">
//     <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; padding: 30px 0;">
//         <tr>
//             <td style="text-align: center; max-width: 600px;">
//                 <img style="width: 260px; margin-bottom: 30px;" src="https://res.cloudinary.com/hamzakhan/image/upload/v1690455274/DesignAlligators/Alligator-logo-02_hltjp9.jpg" />
//             </td>
//         </tr>
//         <tr>
//             <td style="
//             height: 563px; max-height: 563px; min-height: 563px;
//             background-image: url('https://res.cloudinary.com/hamzakhan/image/upload/v1691392379/DesignAlligators/email-bg_v2tcow.jpg');
//             background-size: 100% 100%;">
//                 <table border="0" cellpadding="0" cellspacing="0" style="width: 100%; text-align: center;">
//                     <tr>
//                         <td>
//                             <h3
//                                 style="color: #197a19; font-size: 25px; text-transform: uppercase; margin: 0; margin-top: 30px;">
//                                 You have Got a
//                                 New Lead!
//                             </h3>
//                             <p style="margin: 0; margin-bottom: 20px; color: #000000b0; font-weight: 500;">Here are
//                                 the details of the
//                                 prospect </p>
//                         </td>
//                     </tr>
//                 </table>
//                 ${title || price ? `<table border="0" cellpadding="0" cellspacing="0" style='width:100%'>
//                 <tr style="vertical-align: top;">
//                     <td style="width: 50%; padding-left:30px">
//                         <table border="0" cellpadding="0" cellspacing="0"
//                             style="width: 100%; padding: 15px 15px 15px 35px;">
//                             <tr>
//                                 <td>
//                                     <h6 style="margin: 0; color: #197a19; font-size: 15px;">Title</h6>
//                                     <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                     border-bottom: 1px solid #0000002b; padding-bottom: 2px; margin-bottom: 15px;
//                                     font-weight: 500;
//                                     ">${title}</p>
//                                 </td>
//                             </tr>
//                         </table>
//                     </td>
//                     <td style="width:50%;">
//                         <table border="0" cellpadding="0" cellspacing="0"
//                             style="width: 100%; padding: 15px 45px 15px 0px;">
//                             <tr>
//                                 <td>
//                                     <h6 style="margin: 0; color: #197a19; font-size: 15px;">Price</h6>
//                                     <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                     border-bottom: 1px solid #0000002b; padding-bottom: 2px; margin-bottom: 15px;
//                                     font-weight: 500;
//                                     ">$${price}</p>
//                                 </td>
//                             </tr>
//                         </table>
//                     </td>
//                 </tr>
//                 </table>` : ""}

//                 <table border="0" cellpadding="0" cellspacing="0" style='padding-left:30px; width: 100%;'>
//                     <tr style="vertical-align: top;">
//                         <td style="width: 50%;">
//                             <table border="0" cellpadding="0" cellspacing="0"
//                                 style="width: 100%; padding: 0px 15px 15px 35px;">
//                                 <tr>
//                                     <td>
//                                         <h6 style="margin: 0; color: #197a19; font-size: 15px;">Name</h6>
//                                         <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                         border-bottom: 1px solid #0000002b; padding-bottom: 2px; margin-bottom: 15px;
//                                         font-weight: 500;
//                                         ">${name}</p>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <h6 style="margin: 0; color: #197a19; font-size: 15px;">E-mail</h6>
//                                         <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                         border-bottom: 1px solid #0000002b; padding-bottom: 2px; margin-bottom: 15px;
//                                         font-weight: 500;
//                                         ">${email}</p>
//                                     </td>
//                                 </tr>
//                                 ${company
//                 ? `<tr>
//                                       <td>
//                                         <h6 style="margin: 0; color: #197a19; font-size: 15px;">
//                                           Company
//                                         </h6>
//                                         <p
//                                           style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                         border-bottom: 1px solid #0000002b; padding-bottom: 2px; font-weight: 500; margin-bottom: 15px;
//                                         "
//                                         >
//                                           ${company ? company : "-"}
//                                         </p>
//                                       </td>
//                                     </tr>`
//                 : ""
//             }
//                                 <tr>
//                                     <td>
//                                         <h6 style="margin: 0; color: #197a19; font-size: 15px;">Phone</h6>
//                                         <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                         border-bottom: 1px solid #0000002b; padding-bottom: 2px; font-weight: 500; margin-bottom: 15px;
//                                         ">${phone}</p>
//                                     </td>
//                                 </tr>
//                                 ${organization
//                 ? ` <tr>
//                                     <td>
//                                         <h6 style="margin: 0; color: #197a19; font-size: 15px;">Organization</h6>
//                                         <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                         border-bottom: 1px solid #0000002b; padding-bottom: 2px; font-weight: 500; margin-bottom: 15px;
//                                         ">${organization}</p>
//                                     </td>
//                                 </tr>`
//                 : ""
//             }
//                             </table>
//                         </td>
//                         <td style="width: 50%; padding: 0px 35px 15px 0px;">
                        
//                         <table border="0" cellpadding="0" cellspacing="0"
//                         style="width: 100%; padding: 0px 15px 15px 0px;">
//                             ${service
//                 ? `<tr>
//                                 <td>
//                                     <h6 style="margin: 0; color: #197a19; font-size: 15px;">Service</h6>
//                                     <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                         border-bottom: 1px solid #0000002b; padding-bottom: 2px; font-weight: 500; margin-bottom: 15px;
//                                         ">
//                                     ${service}</p>
//                                 </td>
//                             </tr>`
//                 : ""
//             }
//                             ${service_required
//                 ? `<tr>
//                                 <td>
//                                     <h6 style="margin: 0; color: #197a19; font-size: 15px;">Service Required</h6>
//                                     <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                         border-bottom: 1px solid #0000002b; padding-bottom: 2px; font-weight: 500; margin-bottom: 15px;
//                                         ">
//                                     ${service_required}</p>
//                                 </td>
//                             </tr>`
//                 : ""
//             }
//                             ${hear_by
//                 ? `<tr>
//                                 <td>
//                                     <h6 style="margin: 0; color: #197a19; font-size: 15px;">Hear By</h6>
//                                     <p style="margin: 0; color: #000000ad; font-size: 15px; margin-top: 3px;
//                                         border-bottom: 1px solid #0000002b; padding-bottom: 2px; font-weight: 500; margin-bottom: 15px;
//                                         ">
//                                     ${hear_by}</p>
//                                 </td>
//                             </tr>`
//                 : ""
//             }
//                             <tr>
//                                 <td>
//                                     <h6 style="margin: 0; color: #197a19; font-size: 15px;">Message</h6>
//                                     <p style="margin: 0; color: #000000ad; font-size: 14px; margin-top: 3px;
//                                     padding-bottom: 2px; font-weight: 500; line-height: 20px;">
//                                     ${content}</p>
//                                 </td>
//                             </tr>
//                         </table>
//                         </td>
//                     </tr>
//                 </table>

//                 <table border="0" cellpadding="0" cellspacing="0" style="margin: auto;">
//                     <tr>
//                         <td>
//                             <div style="margin: 100px 0;">
//                                 <a href='mailto:${email}' style="background-color: #197a19; color: #fff; padding: 8px 30px; font-weight: 700;text-decoration:none;
//                                 border-radius: 8px; cursor: pointer;">REPLY</a>
//                             </div>
//                         </td>
//                     </tr>
//                 </table>
//             </td>
//         </tr>
//     </table>
// </div>`,
//     };
//     try {
//         await sgMail.send(msg);

//         // console.log(`Email sent to ${to}`);
//     } catch (error) {
//         console.error(error);
//         console.log("error")
//     }
// };
