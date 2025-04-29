// functions/encode.js

export const onRequestPost = async (context) => {
  const body = await context.request.json();
  if (!body.text) {
    return new Response('Missing "text" field.', { status: 400 });
  }
  const encoded = btoa(unescape(encodeURIComponent(body.text)));
  return new Response(JSON.stringify({ encoded }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
