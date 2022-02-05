import React, { useContext, useEffect, useState } from 'react';
import getDate from '../utils/get_date';
import InvoiceContext from '../context/invoice-context';
import { useRouter } from 'next/router';
import AddEdit from '../components/add-edit';

export default function Add({ invoice }) {
    const { setInvoice } = useContext(InvoiceContext)

    const saveInvoice = (invoice) => {
        fetch(`http://localhost:3005/invoices/`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(invoice)
        }).then(data => {
            console.log(data);
        });
        console.log("Invoice saved")
    }



    return (
        <>
            <AddEdit action={"add"} data={invoice} saveInvoice={saveInvoice} />
        </>
    );
}


export async function getStaticProps() {
    const invoice =
    {
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
        "currency_img": "",
        "invoice_no": "",
        "date": getDate(),
        "due_date": getDate(),
        "items": [{
            "description": "",
            "details": "",
            "price": "",
            "qty": "",
            "amount": "",
            "tax": false
        },
        {
            "description": "",
            "details": "",
            "price": "",
            "qty": "",
            "amount": "",
            "tax": false
        }],
        "total": "0",
        "tax": {
            "type": "None",
            "rate": 10
        },
        "discount": {
            "type": "None",
            "rate": 10
        },
        sub_total: "0",
        total_tax: "0",
        total_discount: "0",
        "bank_name": "",
        "acct_no": "",
        "acct_name": "",
        "swift": "",
        "country": "",
        "status": "paid",
        "notes": " Thanks for your patronage"
    }


    return {
        props: {
            invoice
        }
    }
}