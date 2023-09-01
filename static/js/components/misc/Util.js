export const setCanonical = (url) => {
  let link = !!document.querySelector("link[rel='canonical']") ? document.querySelector("link[rel='canonical']") : document.createElement('link')
  link.setAttribute('rel', 'canonical')
  link.setAttribute('href', url)
  document.head.appendChild(link)
}

export const summonerURL = (region,summoner) => `https://xdx.gg/${region}/${summoner.replace(/\s+/g, '').toLowerCase()}`
