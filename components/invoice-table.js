import React from 'react';
import InvoiceRow from './invoice-row';
import InvoiceContext from '../context/invoice-context';
import { useContext } from 'react';



export default function InvoiceTable({invoiceList}) {

    // const { invoiceList } = useContext(InvoiceContext);

    return (
        <div className="table-responsive">
            <table id="invoice-list" className="table table-hover dataTable no-footer" style={{ width: "100%" }} role="grid" aria-describedby="invoice-list_info">
                <thead>
                    <tr role="row">
                        <th className="checkbox-column sorting_disabled" rowSpan={1} colSpan={1} aria-label=" Record no. " style={{ width: 82 }}>
                            <label className="new-control new-checkbox checkbox-primary m-auto">
                                <input type="checkbox" className="new-control-input chk-parent select-customers-info" id="customer-all-info" />
                                <span className="new-control-indicator" />
                                <span style={{ visibility: "hidden" }}>c</span>
                            </label>
                        </th>
                        <th className="sorting_asc" tabIndex={0} aria-controls="invoice-list" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Invoice Id: activate to sort column descending" style={{ width: 87 }}>
                            Invoice Id
                        </th>
                        <th className="sorting" tabIndex={0} aria-controls="invoice-list" rowSpan={1} colSpan={1} aria-label="Name: activate to sort column ascending" style={{ width: 181 }}>
                            Name
                        </th>
                        <th className="sorting" tabIndex={0} aria-controls="invoice-list" rowSpan={1} colSpan={1} aria-label="Email: activate to sort column ascending" style={{ width: 242 }}>
                            Email
                        </th>
                        <th className="sorting" tabIndex={0} aria-controls="invoice-list" rowSpan={1} colSpan={1} aria-label="Date: activate to sort column ascending" style={{ width: 95 }}>
                            Date
                        </th>
                        <th className="sorting" tabIndex={0} aria-controls="invoice-list" rowSpan={1} colSpan={1} aria-label="Amount: activate to sort column ascending" style={{ width: 70 }}>
                            Amount
                        </th>
                        <th className="sorting" tabIndex={0} aria-controls="invoice-list" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: 65 }}>
                            Status
                        </th>
                        <th className="sorting" tabIndex={0} aria-controls="invoice-list" rowSpan={1} colSpan={1} aria-label="Actions: activate to sort column ascending" style={{ width: 67 }}>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {invoiceList.length > 0 && invoiceList.map((invoice)=><InvoiceRow invoice = {invoice} />)}
                    
                </tbody>
            </table>
        </div>
    )
}
