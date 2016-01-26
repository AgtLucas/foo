// // Logical (functional)
// Rx.Observable.timer(0, 1000)
//   .map(i => `Seconds elapsed ${i}`)
// // Effects (imperative)
//   .subscribe(text => {
//     const container = document.querySelector('#app')
//     container.textContent = text
//   })

function main () {
  return Rx.Observable.timer(0, 1000)
    .map(i => `Seconds elapsed ${i}`)
}

function DOMEffect (text$) {
  text$.subscribe(text => {
    const container = document.querySelector('#app')
    container.textContent = text
  })
}

DOMEffect(main())
