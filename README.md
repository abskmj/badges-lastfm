# Markdown Badges for LastFM
## Last Played Song
Displays the last played song scrobbled on [Last.fm](https://www.last.fm) for a user.
```
![](https://badges.lastfm.workers.dev/last-played?user=rj)
```
![](https://badges.lastfm.workers.dev/last-played?user=rj)

# Customization
Badges are rendered using [Shields.io](https://shields.io/) service and allow customizations as documented under `Styles` section at [Shields.io](https://shields.io/).

## Examples

### Style
```
![](https://badges.lastfm.workers.dev/last-played?user=rj&style=for-the-badge)
```
![](https://badges.lastfm.workers.dev/last-played?user=rj&style=for-the-badge)

### Color
```
![](https://badges.lastfm.workers.dev/last-played?user=rj&color=blue)
```
![](https://badges.lastfm.workers.dev/last-played?user=rj&color=blue)

### Label
```
![](https://badges.lastfm.workers.dev/last-played?user=rj&label=Last%20Song)
```
![](https://badges.lastfm.workers.dev/last-played?user=rj&label=Last%20Song)

# Deploy as Cloudflare Worker
## Disclaimer
I use this service for my profile at [github.com](https://github.com/abskmj). Currently, the service is hosted on a free tier of [Cloudflare Workers](https://workers.cloudflare.com/) and limited at 100K requests per day. If you need a stable service, please consider hosting it under your account.

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/abskmj/badges-lastfm)

## LastFM API Key
Create a secret `LASTFM_API_KEY` for the Cloudflare Worker to use the LastFM APIs.
- Steps for getting an API key is available at [last.fm](https://www.last.fm/api/authentication).
- Steps for creating a secret is available at [developers.cloudflare.com](https://developers.cloudflare.com/workers/reference/apis/environment-variables/#environment-variables). 

# Fixes & Improvements
Head over to the issues tab at [github.com](https://github.com/abskmj/badges-lastfm/issues) to report a bug or suggest an improvement. Feel free to contribute to the code or documentation by creating a pull request.

# Sponsor
If you find the project interesting or helpful, please consider sponsoring it at [github.com](https://github.com/abskmj/badges-lastfm).