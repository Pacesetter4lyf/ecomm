import React from 'react';

export default function ListPager() {
    return (
        <div className="inv-list-bottom-section d-sm-flex justify-content-sm-between text-center">
            <div className="inv-list-pages-count  mb-sm-0 mb-3">
                <div className="dataTables_info" id="invoice-list_info" role="status" aria-live="polite">
                    Showing page 1 of 2
                </div>
            </div>
            <div className="inv-list-pagination">
                <div className="dataTables_paginate paging_simple_numbers" id="invoice-list_paginate">
                    <ul className="pagination">
                        <li className="paginate_button page-item previous disabled" id="invoice-list_previous">
                            <a href="#" aria-controls="invoice-list" data-dt-idx={0} tabIndex={0} className="page-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left">
                                    <line x1={19} y1={12} x2={5} y2={12} />
                                    <polyline points="12 19 5 12 12 5" />
                                </svg>
                            </a>
                        </li>
                        <li className="paginate_button page-item active">
                            <a href="#" aria-controls="invoice-list" data-dt-idx={1} tabIndex={0} className="page-link">
                                1
                            </a>
                        </li>
                        <li className="paginate_button page-item ">
                            <a href="#" aria-controls="invoice-list" data-dt-idx={2} tabIndex={0} className="page-link">
                                2
                            </a>
                        </li>
                        <li className="paginate_button page-item next" id="invoice-list_next">
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
