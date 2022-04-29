const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

const hideElement = (element) => {
  element.style.display = 'none'
}

try {
  const title = document.querySelector('body > div > table > tbody > tr > td:nth-child(2) > div:nth-child(1) > table > tbody > tr:nth-child(3) > td > div > table > tbody > tr:nth-child(1) > td > p > font:nth-child(1)')
  title.classList.add('title')
  
  const subtitle = document.querySelector('body > div > table > tbody > tr > td:nth-child(2) > div:nth-child(1) > table > tbody > tr:nth-child(3) > td > div > table > tbody > tr:nth-child(1) > td > p > font:nth-child(2) > font > font:nth-child(3)')
  subtitle.classList.add('subtitle')
  const dateEmitted = document.querySelector("body > div > table > tbody > tr > td:nth-child(2) > div:nth-child(1) > table > tbody > tr:nth-child(3) > td > div > table > tbody > tr:nth-child(1) > td > p > font:nth-child(2) > font > font:nth-child(5)")
  dateEmitted.classList.add('date-emitted')
  
  const tableElements = document.body.getElementsByTagName('table')
  const mainTable = tableElements[0]
  const leftColumn = mainTable.getElementsByTagName('td')[0]
  
  hideElement(leftColumn)
  
  const bodyTable = tableElements[3]
  const bodyRows = bodyTable.children[0].children
  const bodyNavbar = bodyRows[0]
  const bodyPromotion = bodyRows[1]
  
  hideElement(bodyNavbar)
  hideElement(bodyPromotion)
  
  const satImgRow = document.querySelector("body > div > table > tbody > tr > td:nth-child(2) > div:nth-child(1) > table > tbody > tr:nth-child(3) > td > div > table > tbody > tr:nth-child(4)")
  hideElement(satImgRow)
} catch (error) {
  console.error(error)
  alert(`Oops, qualcosa è andato storto!

  Ti consiglio di disattivare l'estensione "Nimbus" e riprovare.
  Contatta lo sviluppatore per ottenere assistenza.`)
}
