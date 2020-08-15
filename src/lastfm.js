/* global fetch */

const config = require('./config')

const UnexpectedError = new Error('Unexpected response from Last.fm')

exports.getRecentTracks = async (user) => {
  const api = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${config.lastfm.apiKey}&format=json&limit=1`

  const response = await fetch(api)

  if (response.ok) {
    const data = await response.json()

    if (data && data && data.recenttracks) {
    } else throw UnexpectedError

    return data.recenttracks
  } else if (response.status === 404) throw new Error('User not found')
  else throw UnexpectedError
}
