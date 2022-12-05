import React, { Component } from 'react'

import PDFViewer from 'pdf-viewer-reactjs'

export default class PageOne extends Component {
  render() {
    return (
      <PDFViewer
      document={{
          url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
      }}
  />
    )
  }
}
