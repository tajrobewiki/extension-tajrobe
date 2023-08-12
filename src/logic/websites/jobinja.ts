import { createNavigatorLink } from '../common'

function getCompanyName() {
  const companyHeaderName = document.querySelector('.c-companyHeader__name')
  const text = companyHeaderName?.textContent?.split('|') || []
  return text.length > 0 ? text[0].trim() : ''
}

export function addJobinjaLink() {
  const company = getCompanyName()
  const elm = document.querySelector('.c-companyHeader__navigatorList')

  if (elm) {
    const li = document.createElement('li')
    li.classList.add('c-companyHeader__navigatorListItem')

    const link = createNavigatorLink(company)
    li.appendChild(link)

    elm.appendChild(li)
  }
}
