// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  console.log(req.body);
  if(!req.body){
    return res.status(400).send('No Content sent');
  }
  try {
    const path = req.body.path;
    await res.unstable_revalidate(`/events/${path}`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send(err.message);
  }
}
