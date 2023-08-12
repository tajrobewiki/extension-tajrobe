import { createNavigatorLink } from '../common'

function getCompanyName() {
  const companyHeaderName = document.querySelector('.col-12.pr-0 span.font-size-1')
  const text = companyHeaderName?.textContent || ''
  return text.trim()
}

export function addJobvisionLink() {
  const company = getCompanyName()
  const elm = document.querySelector('.d-flex.apply-tabs')

  if (elm) {
    const link = createNavigatorLink(company)

    elm.appendChild(link)
  }
}
