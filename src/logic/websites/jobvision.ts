import { createNavigatorLink } from '../common'

function getCompanyName() {
  const companyHeaderName = document.querySelector('.col-12.pr-0 span.font-size-1')
  const text = companyHeaderName?.textContent || ''
  return text.trim()
}

function getWebsite() {
  const elm = document.querySelector('a[rel="nofollow"]')
  const text = elm?.textContent?.split('|') || []
  return text.length > 0 ? text[0].trim().toLocaleLowerCase() : ''
}

export function addJobvisionLinkOnCompanyPage() {
  const company = getCompanyName()
  const site = getWebsite()
  const elm = document.querySelector('.d-flex.apply-tabs')

  if (elm) {
    const link = createNavigatorLink(company, site)

    elm.appendChild(link)
  }
}
