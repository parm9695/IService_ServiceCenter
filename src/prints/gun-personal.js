import pdf from '@/plugins/pdfmake-style'

function exportPdf(data) {
  const info = {
    pid: data.pid,
    firstName: data.firstName,
  }
  const docDefination = {
    pageMargins: [50, 40, 30, 30],
    content: [
      {
        text: info.pid,
      },
      {
        text: info.firstName,
        bold: true,
      },
    ],
    defaultStyle: pdf.primaryStyle(),
  }
  pdf.pdfPrintPreview(docDefination)
}

export default { exportPdf }
