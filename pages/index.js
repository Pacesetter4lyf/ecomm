import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import { useState } from 'react'
import InvoiceHeader from '../components/invoice-header'
import InvoiceTable from '../components/invoice-table'
import ListActionBar from '../components/list-actionbar'
import ListPager from '../components/list-pager'
// import styles from '../styles/Home.module.css'
import data from '../data'
import { useContext } from 'react'
import InvoiceContext from '../context/invoice-context'




// export async function getStaticProps() {
//   // const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//   // const todos = await res.json()
//   return {
//     props: {
//       invoiceList: data
//     },
//     revalidate: 10
//   }
// }

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:3005/invoices/');
  const invoices= await res.json()
  return {
    props: {
      invoiceList: invoices
    }
  }
}




export default function Home(props) {

 console.log("PROPS INVOICE LIST   ", props.invoiceList);

  const { invoiceList, setInvoiceList } = useContext(InvoiceContext);
  // localStorage.setItem("invoiceList", "hello")



  // if(invoiceList.length === 0){
  //   setInvoiceList(props.invoiceList)
  // }



  return (
    <>
      {/* <Script strategy = "lazyOnLoad" src= "../node_modules/bootstrap/dist/js/bootstrap.js"/> */}

      <div className="main-container" id="container">
        {/* <div className="overlay" />
  <div className="search-overlay" /> */}
        {/*  BEGIN CONTENT AREA  */}
        <div id="content" className="main-content">
          <div className="layout-px-spacing">
            <InvoiceHeader />
            <div className="row" id="cancel-row">

              <div className="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div className="widget-content widget-content-area br-6">
                  <div id="invoice-list_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">

                    <ListActionBar />

                    <InvoiceTable invoiceList = {props.invoiceList}/>


                    <ListPager />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="footer-wrapper">
            <div className="footer-section f-section-1">
              <p className>
                Copyright © 2021{" "}
                <a target="_blank" href="https://designreset.com">
                  DesignReset
                </a>
                , All rights reserved.
              </p>
            </div>
            <div className="footer-section f-section-2">
              <p className>
                Coded with{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </p>
            </div>
          </div>
        </div>
        {/*  END CONTENT AREA  */}
      </div>

    </>

  )
}




