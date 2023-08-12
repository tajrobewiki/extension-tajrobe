const patterns = [
  '^https:\/\/jobinja\.ir\/companies\/',
  '^https:\/\/jobvision\.ir\/companies\/',
]

function extractDomainWithoutTLD(url: string) {
  const parsedUrl = new URL(url)
  const hostnameParts = parsedUrl.hostname.split('.')

  // Remove the last part (TLD) from the hostname parts
  const domainWithoutTLD = hostnameParts.slice(0, -1).join('.')

  return domainWithoutTLD
}

export function checkURLsStartWith(address: string): string | boolean {
  const isExisting = patterns.some(pattern => new RegExp(pattern).test(address))
  if (isExisting)
    return extractDomainWithoutTLD(address)
  return false
}
