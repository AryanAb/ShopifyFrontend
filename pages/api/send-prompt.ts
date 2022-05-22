import axios from 'axios';

export default async (req, res) => {
  const response = await axios.post(`https://api.openai.com/v1/engines/${req.body.engine}/completions`, req.body.data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
    }
  });

  res.status(200).json(response.data);
}
