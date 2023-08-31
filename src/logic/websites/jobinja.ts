import { createNavigatorLink } from '../common'

function getCompanyName() {
  const companyHeaderName = document.querySelector('.c-companyHeader__name')
  const text = companyHeaderName?.textContent?.split('|') || []
  return text.length > 0 ? text[0].trim() : ''
}

function getWebsite() {
  const elms = document.querySelectorAll('.c-companyHeader__metaLink')
  const text = elms[elms.length - 1]?.textContent?.split('|') || []
  return text.length > 0 ? text[0].trim().toLocaleLowerCase() : ''
}

export function addJobinjaLink() {
  const company = getCompanyName()
  const site = getWebsite()
  const elm = document.querySelector('.c-companyHeader__navigatorList')

  if (elm) {
    const li = document.createElement('li')
    li.classList.add('c-companyHeader__navigatorListItem')

    const link = createNavigatorLink(company, site)
    li.appendChild(link)

    elm.appendChild(li)
  }
}
