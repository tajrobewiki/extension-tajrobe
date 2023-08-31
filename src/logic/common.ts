function createLogo() {
  const logo = document.createElement('img')
  logo.src = 'https://tajrobe.wiki/icons/icon.png'
  logo.width = 32
  logo.height = 32
  logo.style.margin = 'auto 10px'
  logo.style.position = 'absolute'
  logo.style.top = '0'
  logo.style.bottom = '0'
  return logo
}

export function createNavigatorLink(company: string, site?: string) {
  const link = document.createElement('a')
  const params = {
    q: company,
    company: '1',
    utm_source: 'extension',
    utm_medium: 'extension',
    utm_campaign: 'extension',
  }
  if (site)
    params.site = site

  const queryString = new URLSearchParams(params).toString()
  link.href = `https://tajrobe.wiki/search?${queryString}`
  link.target = '_blank'
  link.classList.add('c-companyHeader__navigatorLink')

  const logo = createLogo()
  link.prepend(logo)

  const spanWikiTajrobe = document.createElement('span')
  spanWikiTajrobe.innerHTML = 'ویکی‌تجربه'
  spanWikiTajrobe.style.paddingRight = '50px'
  spanWikiTajrobe.style.color = '#000'
  link.appendChild(spanWikiTajrobe)

  link.style.position = 'relative'
  link.style.display = 'flex'
  link.style.alignItems = 'center'
  return link
}
