import { sendEmail } from '../../lib/sendgrid';

export default async (req, res) => {
  const { name, lastname, email, phone, content } = req.body;
  try {
    sendEmail('Design Henge', name, lastname, email, phone, content);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
