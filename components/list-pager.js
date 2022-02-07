import React, { useContext, useState } from 'react';
import InvoiceContext from '../context/invoice-context';

export default function ListPager({ list = [] }) {

    const [activePage, setactivePage] = useState(0);
    const { setInvoiceList } = useContext(InvoiceContext);

    return (
        <div className="inv-list-bottom-section d-sm-flex justify-content-sm-between text-center">
            <div className="inv-list-pages-count  mb-sm-0 mb-3">
                <div className="dataTables_info" id="invoice-list_info" role="status" aria-live="polite">
                    Showing page {activePage+1} of {list.length}
                </div>
            </div>
            <div className="inv-list-pagination">
                <div className="dataTables_paginate paging_simple_numbers" id="invoice-list_paginate">
                    <ul className="pagination">

                        <li onClick={() => {
                            setactivePage(Math.max(activePage - 1, 0));
                            setInvoiceList(list[Math.max(activePage - 1, 0)])
                        }
                        }
                            className={`paginate_button page-item previous  ${activePage === 0 && "disabled"}`} id="invoice-list_previous">
                            <a href="#" aria-controls="invoice-list" data-dt-idx={0} tabIndex={0} className="page-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
                                    <line x1={19} y1={12} x2={5} y2={12} />
                                    <polyline points="12 19 5 12 12 5" />
                                </svg>
                            </a>
                        </li>

                        {list.map((item, index) => <li className={`paginate_button page-item ${activePage === index && "active"}`}>
                            <a href="#" onClick={() => {
                                setInvoiceList(item)
                                setactivePage(index)
                            }} aria-controls="invoice-list" data-dt-idx={1} tabIndex={0} className="page-link">
                                {index + 1}
                            </a>
                        </li>)}


                        <li onClick={() => {
                            setactivePage(Math.min(activePage + 1, list.length - 1));
                            setInvoiceList(list[Math.min(activePage + 1, list.length - 1)])
                        }
                        }
                            className={`paginate_button page-item next ${activePage === (list.length - 1) && "disabled"}`} id="invoice-list_next">
                            <a href="#" aria-controls="invoice-list" data-dt-idx={3} tabIndex={0} className="page-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </li>


                    </ul>
                </div>
            </div>
        </div>
    )
}
