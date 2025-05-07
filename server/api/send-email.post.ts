import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const runtimeConfig = useRuntimeConfig()

  const { name, email, subject, message } = body

  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    })
  }

  const { nodemailer } = useNodeMailer()
  const mailer: any = nodemailer

  const transporter = mailer.createTransport({
    host: runtimeConfig.MAIL_SMTP_HOST,
    port: parseInt(runtimeConfig.MAIL_SMTP_PORT),
    secure: runtimeConfig.MAIL_SMTP_SECURE === 'true',
    auth: {
      user: runtimeConfig.MAIL_SMTP_USER,
      pass: runtimeConfig.MAIL_SMTP_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  // Isi pesan email
  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: runtimeConfig.MAIL_DEFAULT_TO,
    subject: `[Portfolio Contact] ${subject}`,
    html: `
      <h2>New Message from Portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Email sent successfully!' }
  } catch (error) {
    console.error('Failed to send email:', error)
    throw createError({ statusCode: 500, statusMessage: 'Failed to send email' })
  }
})