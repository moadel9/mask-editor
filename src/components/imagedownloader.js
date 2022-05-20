import html2canvas from "html2canvas"

export const handleDownloadImage = async () => {
  const element = document.getElementById("print"),
    canvas = await html2canvas(element),
    data = canvas.toDataURL("image/jpg"),
    link = document.createElement("a")

  link.href = data
  link.download = "downloaded-image.jpg"

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
// export const exportAsImage = async (el, imageFileName) => {
//   // console.log(el)
//   const canvas = await html2canvas(el)
//   var ctx = canvas.getContext("2d")
//   var two = document.getElementById("masked")
//   var one = document.getElementById("revealed")
//   console.log(one)
//   console.log(two)
//   // composite now

//   ctx.drawImage(two, 20, 20)
//   ctx.globalAlpha = 0
//   ctx.drawImage(one, 10, 10)
//   const data = canvas.toDataURL("image/png", 1.0)
//   const link = document.createElement("a")
//   link.href = data
//   link.download = "downloaded-image.jpg"
//   document.body.appendChild(link)
//   link.click()
//   document.body.removeChild(link)

//   // downloadImage(image, imageFileName)
// }
// const downloadImage = (blob, fileName) => {
//   const fakeLink = window.document.createElement("a")
//   //   fakeLink.style = "display:none;"
//   fakeLink.download = fileName

//   fakeLink.href = blob

//   document.body.appendChild(fakeLink)
//   fakeLink.click()
//   document.body.removeChild(fakeLink)

//   fakeLink.remove()
// }
