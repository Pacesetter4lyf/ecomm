import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import InvoiceContext from '../context/invoice-context';
import getDate from '../utils/get_date';

export default function ListActionBar() {
    const router = useRouter()
    const {setInvoice} = useContext(InvoiceContext)

    const addNew = () => {      
        router.push("/add")
        setInvoice(
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
            }
        )
    }
    
    return (
        <div className="inv-list-top-section">
            <div className="row">
                <div className="col-sm-12 col-md-6 d-flex justify-content-md-start justify-content-center">
                    <div className="dataTables_length" id="invoice-list_length">
                        <label>
                            Results :{" "}
                            <select name="invoice-list_length" aria-controls="invoice-list" className="form-control">
                                <option value={7}>7</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                            </select>
                        </label>
                    </div>
                    <div className="dt-action-buttons align-self-center">
                        <div className="dt-buttons">
                            <button onClick = {addNew} className="dt-button btn btn-primary btn-sm" tabIndex={0} aria-controls="invoice-list">
                                <span>Add New</span>
                            </button>{" "}
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 d-flex justify-content-md-end justify-content-center mt-md-0 mt-3">
                    <div id="invoice-list_filter" className="dataTables_filter">
                        <label>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                                <circle cx={11} cy={11} r={8} />
                                <line x1={21} y1={21} x2="16.65" y2="16.65" />
                            </svg>
                            <input type="search" className="form-control" placeholder="Search..." aria-controls="invoice-list" />
                        </label>
                    </div>
                    <div className="toolbar align-self-center">
                        <button className="dt-button dt-delete btn btn-danger btn-sm" tabIndex={0} aria-controls="invoice-list">
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
