export async function onRequest(context) {
  const incomingUrl = new URL(context.request.url)
  const targetUrl = new URL(incomingUrl.toString())

  targetUrl.protocol = 'https:'
  targetUrl.hostname = 'api.xingjiji.asia'
  targetUrl.pathname = incomingUrl.pathname

  const request = new Request(targetUrl.toString(), context.request)
  request.headers.delete('host')

  return fetch(request)
}
