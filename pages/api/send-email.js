import { sendEmail } from '../../lib/sendgrid';

export default async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    await sendEmail('Design Henge', name, email, phone, message);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
