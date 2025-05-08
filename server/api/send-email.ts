import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields',
      })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_SMTP_USER,
        pass: process.env.MAIL_SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_DEFAULT_TO,
      subject: `[Portfolio Contact] ${email}`,
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    }

    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Email sent successfully!' }

  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email',
    })
  }
})