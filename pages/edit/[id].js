import React, { useContext, useEffect, useState } from 'react';
import getDate from '../../utils/get_date';
import InvoiceContext from '../../context/invoice-context';
import { useRouter } from 'next/router';
import AddEdit from '../../components/add-edit';
import data from '../../data';

export default function Edit({ invoice }) {
    const { invoiceList, setInvoiceList } = useContext(InvoiceContext)

    // setInvoice("My name")

    const saveInvoice = async (invoice) => {
        // console.log("THe invoice is  ", invoice)

        fetch(`http://localhost:3005/invoices/${invoice.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(invoice)
        })
        .then(data => data.json())
        // .then(data => console.log("The response is ", data));
        // console.log("invoice edited")
    }


    return (
        <>
            <AddEdit saveInvoice  = { saveInvoice } />
        </>
    );
}


export async function getServerSideProps({ params }) {
    console.log(params);
    // const invoice = data.find((invoice) => invoice.id === params.id)
    let invoice = await fetch(`http://localhost:3005/invoices/${params.id}`)
    invoice = await invoice.json()

    // console.log("inv  ", invoice);
    return {
        props: {
            invoice
        }
    }
}

