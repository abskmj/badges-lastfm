/* global addEventListener, Response */

const lastfm = require('./lastfm')

const lastPlayed = async (parameters) => {
  const defaults = {
    label: 'Last Played',
    color: 'red',
    logo: 'last.fm'
  }

  try {
    const data = await lastfm.getRecentTracks(parameters.user)
    parameters.message = `${data.track[0].name} by ${data.track[0].artist['#text']}`
  } catch (err) {
    parameters.message = err.message
  }

  return Object.assign({}, defaults, parameters)
}

const handleRequest = async (request) => {
  try {
    const url = new URL(request.url)

    const parameters = {}

    for (const [key, value] of url.searchParams) {
      parameters[key] = value
    }

    let redirectParameters

    if (url.pathname === '/last-played') {
      redirectParameters = await lastPlayed(parameters)
    } else {
      redirectParameters = {
        label: 'Last.fm',
        message: 'Unknown badge'
      }
    }

    const redirectUrl = new URL('https://img.shields.io/static/v1')

    for (const key in redirectParameters) {
      redirectUrl.searchParams.set(key, redirectParameters[key])
    }

    // return new Response(redirectUrl)
    return Response.redirect(redirectUrl, 302)
  } catch (err) {

  }
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
