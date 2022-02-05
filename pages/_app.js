import '../styles/globals.css'
import '../styles/main.css'
import '../styles/structure.css'
import '../styles/invoice-list.css'
import '../styles/invoice-Preview.css'
import '../styles/invoice-add.css'
import '../styles/dropify.min.css'
// import '../styles/flatpickr.css'

import '../styles/datatables.css'
import '../styles/dt-global_style.css'
import Head from 'next/head'
import Script from 'next/script'
import { useContext, useState, useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// // import 'bootstrap/dist/js/bootstrap.js';

// import 'bootstrap';

import InvoiceContext from "../context/invoice-context"
import getDate from '../utils/get_date'









function MyApp({ Component, pageProps }) {

const [invoiceList, setInvoiceList] = useState([])
const [invoice, setInvoice] = useState(    {
  "id": "",
  "picture": "",
  "from_name": "",
  "from_email": "",
  "from_address": "",
  "from_phone": "",

  "bill_name": "",
  "bill_email": "",
  "bill_phone": "",
  "bill_address": "",
  "invoice_label": "",
  "currency": "",
  "currency_img": "/images/flag-us.svg",
  "invoice_no": "",
  "date": getDate(),
  "due_date": getDate(),
  "items": [{
      "description": "",
      "details": "",
      "price": "0",
      "qty": "1",
      "amount": "0",
      "tax": false
  },
  {
      "description": "",
      "details": "",
      "price": "0",
      "qty": "1",
      "amount": "0",
      "tax": false
  }],
  "total": "",
  "tax": {
      "type": "None",
      "rate": 10
  },
  "discount": {
      "type": "None",
      "rate": 10
  },
  sub_total: "",
  total_tax: "",
  total_discount: "",
  "bank_name": "",
  "acct_no": "",
  "acct_name": "",
  "swift": "",
  "country": "",
  "status": "",
  "notes": " Thanks for your patronage"
})
const [preferences, setPreference] = useState({})

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossorigin="anonymous"
        />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous" />

      <InvoiceContext.Provider value={{invoiceList, setInvoiceList, invoice, setInvoice}}>
        <Component {...pageProps} />
      </InvoiceContext.Provider>

    </>
  )
}

export default MyApp
