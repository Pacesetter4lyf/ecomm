import React from 'react';

export default function InvoiceHeader() {
    return (
        <div className="page-header">
            <nav className="breadcrumb-one" aria-label="breadcrumb">
                <div className="title">
                    <h3>List</h3>
                </div>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="javascript:void(0);">Apps</a>
                    </li>
                    <li className="breadcrumb-item">
                        <a href="javascript:void(0);">Invoice</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <a href="javascript:void(0);">List</a>
                    </li>
                </ol>
            </nav>
            <div className="toggle-switch">
                <label className="switch s-icons s-outline  s-outline-secondary">
                    <input type="checkbox" defaultChecked className="theme-shifter" />
                    <span className="slider round">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun">
                            <circle cx={12} cy={12} r={5} />
                            <line x1={12} y1={1} x2={12} y2={3} />
                            <line x1={12} y1={21} x2={12} y2={23} />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1={1} y1={12} x2={3} y2={12} />
                            <line x1={21} y1={12} x2={23} y2={12} />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    </span>
                </label>
            </div>
        </div>
    );
}