import React, { useContext, useEffect, useState } from 'react';
import getDate from '../utils/get_date';
import InvoiceContext from '../context/invoice-context';
import { useRouter } from 'next/router';

export default function AddEdit({ action, id, data , saveInvoice}) {
    const [invoice, setInvoice] = useState(data)

    const { invoiceList, setInvoiceList } = useContext(InvoiceContext)

    const router = useRouter()

    const tax_type = invoice.tax.type;
    const discount_type = invoice.discount.type;



    const performAction = async () => {
        saveInvoice(invoice)
        router.push('/')
    }

    const changeCurrency = (e) => {
        // const {data-img-value, data-value} = e;
        const currency_img = e.target.attributes["data-img-value"].value
        const currency = e.target.attributes["data-value"].value
        // console.log(e)
        setInvoice({ ...invoice, currency, currency_img })
    }

    const changeDropdown = (e, type) => {
        // setInvoice({...invoice, [e.target.name]:"hello"})  
        setInvoice({ ...invoice, [type]: { ...invoice[type], ["type"]: e.target.dataset.value } })
        // console.log("THE EVENT IS ", e)

    }

    const handleChange = (e, type) => {
        const { name, value } = e.target

        if (type === "tax" || type === "discount") {
            setInvoice({ ...invoice, [type]: { ...invoice[type], ["rate"]: e.target.value } })
        } else {
            setInvoice({ ...invoice, [name]: value })
            // setInvoice({ ...invoice, [e.target.name]: e.target.value })
        }
        // console.log(name, value, invoice, e, type)
    }


    const addItem = () => {
        const newItems = [...invoice.items, {
            "description": "",
            "details": "",
            "price": 0,
            "qty": 1,
            "amount": 0,
            "tax": false
        }]
        setInvoice({ ...invoice, ["items"]: newItems })
    }

    const deleteRow = (index) => {
        const newArr = [...invoice.items]
        newArr.splice(index, 1)
        setInvoice({ ...invoice, ["items"]: newArr })

    }


    const updateItem = (e, index) => {
        const newArr = invoice.items
        const item = newArr[index]

        if (e.target.name === "tax") {
            // console.log("Tax  ", e.target.name, item.tax)
            item.tax = !item.tax
            if (item.tax) {
                item.total = (item.qty * item.price)
            } else {

            }
        } else {
            item[e.target.name] = e.target.value
        }
        newArr.splice(index, 1, item)
        setInvoice({ ...invoice, ["items"]: newArr })
    }




    return (
        <div className="main-container" id="container">
            <div className="overlay" />
            <div className="search-overlay" />
            {/*  BEGIN CONTENT AREA  */}
            <div id="content" className="main-content">
                <div className="layout-px-spacing">
                    <div className="page-header">
                        <nav className="breadcrumb-one" aria-label="breadcrumb">
                            <div className="title">
                                <h3>Add</h3>
                            </div>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Apps</a></li>
                                <li className="breadcrumb-item"><a href="javascript:void(0);">Invoice</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><a href="javascript:void(0);">Add</a></li>
                            </ol>
                        </nav>
                        <div className="toggle-switch">
                            <label className="switch s-icons s-outline  s-outline-secondary">
                                <input type="checkbox" defaultChecked className="theme-shifter" />
                                <span className="slider round">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx={12} cy={12} r={5} /><line x1={12} y1={1} x2={12} y2={3} /><line x1={12} y1={21} x2={12} y2={23} /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1={1} y1={12} x2={3} y2={12} /><line x1={21} y1={12} x2={23} y2={12} /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="row invoice layout-top-spacing layout-spacing">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="doc-container">
                                <div className="row">
                                    <div className="col-xl-9">
                                        <div className="invoice-content">
                                            <div className="invoice-detail-body">
                                                <div className="invoice-detail-title">
                                                    <div className="invoice-logo">
                                                        <div className="upload">
                                                            <input name="picture" type="file" id="input-file-max-fs" className="dropify" data-max-file-size="2M" />
                                                        </div>
                                                    </div>
                                                    <div className="invoice-title">
                                                        <input value={invoice.invoice_label} name="invoice_label" onChange={handleChange} type="text" className="form-control" placeholder="Invoice Label" defaultValue="Invoice Label" />
                                                    </div>
                                                </div>
                                                <div className="invoice-detail-header">
                                                    <div className="row justify-content-between">
                                                        <div className="col-xl-5 invoice-address-company">
                                                            <h4>From:-</h4>
                                                            <div className="invoice-address-company-fields">
                                                                <div className="form-group row">
                                                                    <label htmlFor="company-name" className="col-sm-3 col-form-label col-form-label-sm">Name</label>
                                                                    <div className="col-sm-9">
                                                                        <input value={invoice.from_name} name="from_name" onChange={handleChange} type="text" className="form-control form-control-sm" id="company-name" placeholder="Business Name" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label htmlFor="company-email" className="col-sm-3 col-form-label col-form-label-sm">Email</label>
                                                                    <div className="col-sm-9">
                                                                        <input value={invoice.from_email} name="from_email" onChange={handleChange} type="text" className="form-control form-control-sm" id="company-email" placeholder="name@company.com" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label htmlFor="company-address" className="col-sm-3 col-form-label col-form-label-sm">Address</label>
                                                                    <div className="col-sm-9">
                                                                        <input value={invoice.from_address} name="from_address" onChange={handleChange} type="text" className="form-control form-control-sm" id="company-address" placeholder="XYZ Street" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label htmlFor="company-phone" className="col-sm-3 col-form-label col-form-label-sm">Phone</label>
                                                                    <div className="col-sm-9">
                                                                        <input value={invoice.from_phone} name="from_phone" onChange={handleChange} type="text" className="form-control form-control-sm" id="company-phone" placeholder="(123) 456 789" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-5 invoice-address-client">
                                                            <h4>Bill To:-</h4>
                                                            <div className="invoice-address-client-fields">
                                                                <div className="form-group row">
                                                                    <label htmlFor="client-name" className="col-sm-3 col-form-label col-form-label-sm">Name</label>
                                                                    <div className="col-sm-9">
                                                                        <input value={invoice.bill_name} name="bill_name" onChange={handleChange} type="text" className="form-control form-control-sm" id="client-name" placeholder="Client Name" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label htmlFor="client-email" className="col-sm-3 col-form-label col-form-label-sm">Email</label>
                                                                    <div className="col-sm-9">
                                                                        <input value={invoice.bill_email} name="bill_email" onChange={handleChange} type="text" className="form-control form-control-sm" id="client-email" placeholder="name@company.com" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label htmlFor="client-address" className="col-sm-3 col-form-label col-form-label-sm">Address</label>
                                                                    <div className="col-sm-9">
                                                                        <input value={invoice.bill_address} name="bill_address" onChange={handleChange} type="text" className="form-control form-control-sm" id="client-address" placeholder="XYZ Street" />
                                                                    </div>
                                                                </div>
                                                                <div className="form-group row">
                                                                    <label htmlFor="client-phone" className="col-sm-3 col-form-label col-form-label-sm">Phone</label>
                                                                    <div className="col-sm-9">
                                                                        <input value={invoice.bill_phone} name="bill_phone" onChange={handleChange} type="text" className="form-control form-control-sm" id="client-phone" placeholder="(123) 456 789" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="invoice-detail-terms">
                                                    <div className="row justify-content-between">
                                                        <div className="col-md-3">
                                                            <div className="form-group mb-4">
                                                                <label htmlFor="number">Invoice Number</label>
                                                                <input value={invoice.invoice_no} name="invoice_no" onChange={handleChange} type="text" className="form-control form-control-sm" id="number" placeholder="#0001" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="form-group mb-4">
                                                                <label htmlFor="date">Invoice Date</label>
                                                                <input value={invoice.date} name="date" onChange={handleChange} type="date" className="form-control form-control-sm" id="date" placeholder="Add date picker" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="form-group mb-4">
                                                                <label htmlFor="due">Due Date</label>
                                                                <input value={invoice.due_date} name="due_date" onChange={handleChange} type="date" className="form-control form-control-sm" id="due" placeholder="None" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="invoice-detail-items">
                                                    <div className="table-responsive">
                                                        <table className="table table-bordered item-table">
                                                            <thead>
                                                                <tr>
                                                                    <th className />
                                                                    <th>Description</th>
                                                                    <th className>Rate</th>
                                                                    <th className>Qty</th>
                                                                    <th className="text-right">Amount</th>
                                                                    <th className="text-center">Tax</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>



                                                                {invoice.items.map((item, i) => {
                                                                    return (
                                                                        <tr>
                                                                            <td className="delete-item-row">
                                                                                <ul className="table-controls">
                                                                                    <li onClick={() => deleteRow(i)} ><a href="javascript:void(0);" className="delete-item" data-toggle="tooltip" data-placement="top" title data-original-title="Delete"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle"><circle cx={12} cy={12} r={10} /><line x1={15} y1={9} x2={9} y2={15} /><line x1={9} y1={9} x2={15} y2={15} /></svg></a></li>
                                                                                </ul>
                                                                            </td>
                                                                            <td className="description"><input value={item.description} name="description" onChange={(e) => updateItem(e, i)} type="text" className="form-control form-control-sm" placeholder="Item Description" /> <textarea onChange={(e) => updateItem(e, i)} name="details" value={item.details} className="form-control" placeholder="Additional Details" /></td>
                                                                            <td className="rate">
                                                                                <input value={item.price} name="price" onChange={(e) => updateItem(e, i)} type="text" className="form-control form-control-sm" placeholder="Price" />
                                                                            </td>
                                                                            <td className="text-right qty"><input value={item.qty} name="qty" onChange={(e) => updateItem(e, i)} type="text" className="form-control form-control-sm" placeholder="Quantity" /></td>
                                                                            <td className="text-right amount"><span className="editable-amount"><span className="currency">$</span> <span className="amount">{item.amount}</span></span></td>
                                                                            <td className="text-center tax">
                                                                                <div className="n-chk">
                                                                                    <label className="new-control new-checkbox new-checkbox-text checkbox-primary" style={{ height: 18, margin: '0 auto' }}>
                                                                                        <input onChange={(e) => updateItem(e, i)} name="tax" type="checkbox" className="new-control-input" checked={item.tax ? "checked" : ""} />
                                                                                        <span className="new-control-indicator" /><span className="new-chk-content">Tax</span>
                                                                                    </label>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })}






                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <button onClick={addItem} className="btn btn-secondary additem btn-sm">Add Item</button>
                                                </div>
                                                <div className="invoice-detail-total">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group row invoice-created-by">
                                                                <label htmlFor="payment-method-account" className="col-sm-3 col-form-label col-form-label-sm">Account #:</label>
                                                                <div className="col-sm-9">
                                                                    <input value={invoice.acct_no} name="acct_no" onChange={handleChange} type="text" className="form-control form-control-sm" id="payment-method-account" placeholder="Bank Account Number" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row invoice-created-by">
                                                                <label htmlFor="payment-method-bank-name" className="col-sm-3 col-form-label col-form-label-sm">Bank Name:</label>
                                                                <div className="col-sm-9">
                                                                    <input value={invoice.bank_name} name="bank_name" onChange={handleChange} type="text" className="form-control form-control-sm" id="payment-method-bank-name" placeholder="Insert Bank Name" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row invoice-created-by">
                                                                <label htmlFor="payment-method-code" className="col-sm-3 col-form-label col-form-label-sm">SWIFT code:</label>
                                                                <div className="col-sm-9">
                                                                    <input value={invoice.swift} name="swift" onChange={handleChange} type="text" className="form-control form-control-sm" id="payment-method-code" placeholder="Insert Code" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group row invoice-created-by">
                                                                <label htmlFor="payment-method-country" className="col-sm-3 col-form-label col-form-label-sm">Country:</label>
                                                                <div className="col-sm-9">
                                                                    <select value={invoice.country} onChange={handleChange} name="country" className="form-control country_code  form-control-sm" id="payment-method-country">
                                                                        <option value>Choose Country</option>
                                                                        <option value="United States">United States</option>
                                                                        <option value="United Kingdom">United Kingdom</option>
                                                                        <option value="Canada">Canada</option>
                                                                        <option value="Australia">Australia</option>
                                                                        <option value="Germany">Germany</option>
                                                                        <option value="Sweden">Sweden</option>
                                                                        <option value="Denmark">Denmark</option>
                                                                        <option value="Norway">Norway</option>
                                                                        <option value="New-Zealand">New Zealand</option>
                                                                        <option value="Afghanistan">Afghanistan</option>
                                                                        <option value="Albania">Albania</option>
                                                                        <option value="Algeria">Algeria</option>
                                                                        <option value="American-Samoa">Andorra</option>
                                                                        <option value="Angola">Angola</option>
                                                                        <option value="Antigua Barbuda">Antigua &amp; Barbuda</option>
                                                                        <option value="Argentina">Argentina</option>
                                                                        <option value="Armenia">Armenia</option>
                                                                        <option value="Aruba">Aruba</option>
                                                                        <option value="Austria">Austria</option>
                                                                        <option value="Azerbaijan">Azerbaijan</option>
                                                                        <option value="Bahamas">Bahamas</option>
                                                                        <option value="Bahrain">Bahrain</option>
                                                                        <option value="Bangladesh">Bangladesh</option>
                                                                        <option value="Barbados">Barbados</option>
                                                                        <option value="Belarus">Belarus</option>
                                                                        <option value="Belgium">Belgium</option>
                                                                        <option value="Belize">Belize</option>
                                                                        <option value="Benin">Benin</option>
                                                                        <option value="Bermuda">Bermuda</option>
                                                                        <option value="Bhutan">Bhutan</option>
                                                                        <option value="Bolivia">Bolivia</option>
                                                                        <option value="Bosnia">Bosnia &amp; Herzegovina</option>
                                                                        <option value="Botswana">Botswana</option>
                                                                        <option value="Brazil">Brazil</option>
                                                                        <option value="British">British Virgin Islands</option>
                                                                        <option value="Brunei">Brunei</option>
                                                                        <option value="Bulgaria">Bulgaria</option>
                                                                        <option value="Burkina">Burkina Faso</option>
                                                                        <option value="Burundi">Burundi</option>
                                                                        <option value="Cambodia">Cambodia</option>
                                                                        <option value="Cameroon">Cameroon</option>
                                                                        <option value="Cape">Cape Verde</option>
                                                                        <option value="Cayman">Cayman Islands</option>
                                                                        <option value="Central-African">Central African Republic</option>
                                                                        <option value="Chad">Chad</option>
                                                                        <option value="Chile">Chile</option>
                                                                        <option value="China">China</option>
                                                                        <option value="Colombia">Colombia</option>
                                                                        <option value="Comoros">Comoros</option>
                                                                        <option value="Costa-Rica">Costa Rica</option>
                                                                        <option value="Croatia">Croatia</option>
                                                                        <option value="Cuba">Cuba</option>
                                                                        <option value="Cyprus">Cyprus</option>
                                                                        <option value="Czechia">Czechia</option>
                                                                        <option value="Côte">Côte d’Ivoire</option>
                                                                        <option value="Djibouti">Djibouti</option>
                                                                        <option value="Dominica">Dominica</option>
                                                                        <option value="Dominican">Dominican Republic</option>
                                                                        <option value="Ecuador">Ecuador</option>
                                                                        <option value="Egypt">Egypt</option>
                                                                        <option value="El-Salvador">El Salvador</option>
                                                                        <option value="Equatorial-Guinea">Equatorial Guinea</option>
                                                                        <option value="Eritrea">Eritrea</option>
                                                                        <option value="Estonia">Estonia</option>
                                                                        <option value="Ethiopia">Ethiopia</option>
                                                                        <option value="Fiji">Fiji</option>
                                                                        <option value="Finland">Finland</option>
                                                                        <option value="France">France</option>
                                                                        <option value="Gabon">Gabon</option>
                                                                        <option value="Georgia">Georgia</option>
                                                                        <option value="Ghana">Ghana</option>
                                                                        <option value="Greece">Greece</option>
                                                                        <option value="Grenada">Grenada</option>
                                                                        <option value="Guatemala">Guatemala</option>
                                                                        <option value="Guernsey">Guernsey</option>
                                                                        <option value="Guinea">Guinea</option>
                                                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                                                        <option value="Guyana">Guyana</option>
                                                                        <option value="Haiti">Haiti</option>
                                                                        <option value="Honduras">Honduras</option>
                                                                        <option value="Hong-Kong">Hong Kong SAR China</option>
                                                                        <option value="Hungary">Hungary</option>
                                                                        <option value="Iceland">Iceland</option>
                                                                        <option value="India">India</option>
                                                                        <option value="Indonesia">Indonesia</option>
                                                                        <option value="Iran">Iran</option>
                                                                        <option value="Iraq">Iraq</option>
                                                                        <option value="Ireland">Ireland</option>
                                                                        <option value="Israel">Israel</option>
                                                                        <option value="Italy">Italy</option>
                                                                        <option value="Jamaica">Jamaica</option>
                                                                        <option value="Japan">Japan</option>
                                                                        <option value="Jordan">Jordan</option>
                                                                        <option value="Kazakhstan">Kazakhstan</option>
                                                                        <option value="Kenya">Kenya</option>
                                                                        <option value="Kuwait">Kuwait</option>
                                                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                                        <option value="Laos">Laos</option>
                                                                        <option value="Latvia">Latvia</option>
                                                                        <option value="Lebanon">Lebanon</option>
                                                                        <option value="Lesotho">Lesotho</option>
                                                                        <option value="Liberia">Liberia</option>
                                                                        <option value="Libya">Libya</option>
                                                                        <option value="Liechtenstein">Liechtenstein</option>
                                                                        <option value="Lithuania">Lithuania</option>
                                                                        <option value="Luxembourg">Luxembourg</option>
                                                                        <option value="Macedonia">Macedonia</option>
                                                                        <option value="Madagascar">Madagascar</option>
                                                                        <option value="Malawi">Malawi</option>
                                                                        <option value="Malaysia">Malaysia</option>
                                                                        <option value="Maldives">Maldives</option>
                                                                        <option value="Mali">Mali</option>
                                                                        <option value="Malta">Malta</option>
                                                                        <option value="Mauritania">Mauritania</option>
                                                                        <option value="Mauritius">Mauritius</option>
                                                                        <option value="Mexico">Mexico</option>
                                                                        <option value="Moldova">Moldova</option>
                                                                        <option value="Monaco">Monaco</option>
                                                                        <option value="Mongolia">Mongolia</option>
                                                                        <option value="Montenegro">Montenegro</option>
                                                                        <option value="Morocco">Morocco</option>
                                                                        <option value="Mozambique">Mozambique</option>
                                                                        <option value="Myanmar">Myanmar (Burma)</option>
                                                                        <option value="Namibia">Namibia</option>
                                                                        <option value="Nepal">Nepal</option>
                                                                        <option value="Netherlands">Netherlands</option>
                                                                        <option value="Nicaragua">Nicaragua</option>
                                                                        <option value="Niger">Niger</option>
                                                                        <option value="Nigeria">Nigeria</option>
                                                                        <option value="North-Korea">North Korea</option>
                                                                        <option value="Oman">Oman</option>
                                                                        <option value="Pakistan">Pakistan</option>
                                                                        <option value="Palau">Palau</option>
                                                                        <option value="Palestinian">Palestinian Territories</option>
                                                                        <option value="Panama">Panama</option>
                                                                        <option value="Papua">Papua New Guinea</option>
                                                                        <option value="Paraguay">Paraguay</option>
                                                                        <option value="Peru">Peru</option>
                                                                        <option value="Philippines">Philippines</option>
                                                                        <option value="Poland">Poland</option>
                                                                        <option value="Portugal">Portugal</option>
                                                                        <option value="Puerto">Puerto Rico</option>
                                                                        <option value="Qatar">Qatar</option>
                                                                        <option value="Romania">Romania</option>
                                                                        <option value="Russia">Russia</option>
                                                                        <option value="Rwanda">Rwanda</option>
                                                                        <option value="Réunion">Réunion</option>
                                                                        <option value="Samoa">Samoa</option>
                                                                        <option value="San-Marino">San Marino</option>
                                                                        <option value="Saudi-Arabia">Saudi Arabia</option>
                                                                        <option value="Senegal">Senegal</option>
                                                                        <option value="Serbia">Serbia</option>
                                                                        <option value="Seychelles">Seychelles</option>
                                                                        <option value="Sierra-Leone">Sierra Leone</option>
                                                                        <option value="Singapore">Singapore</option>
                                                                        <option value="Slovakia">Slovakia</option>
                                                                        <option value="Slovenia">Slovenia</option>
                                                                        <option value="Solomon-Islands">Solomon Islands</option>
                                                                        <option value="Somalia">Somalia</option>
                                                                        <option value="South-Africa">South Africa</option>
                                                                        <option value="South-Korea">South Korea</option>
                                                                        <option value="Spain">Spain</option>
                                                                        <option value="Sri-Lanka">Sri Lanka</option>
                                                                        <option value="Sudan">Sudan</option>
                                                                        <option value="Suriname">Suriname</option>
                                                                        <option value="Swaziland">Swaziland</option>
                                                                        <option value="Switzerland">Switzerland</option>
                                                                        <option value="Syria">Syria</option>
                                                                        <option value="Sao-Tome-and-Principe">São Tomé &amp; Príncipe</option>
                                                                        <option value="Tajikistan">Tajikistan</option>
                                                                        <option value="Tanzania">Tanzania</option>
                                                                        <option value="Thailand">Thailand</option>
                                                                        <option value="Timor-Leste">Timor-Leste</option>
                                                                        <option value="Togo">Togo</option>
                                                                        <option value="Tonga">Tonga</option>
                                                                        <option value="Trinidad-and-Tobago">Trinidad &amp; Tobago</option>
                                                                        <option value="Tunisia">Tunisia</option>
                                                                        <option value="Turkey">Turkey</option>
                                                                        <option value="Turkmenistan">Turkmenistan</option>
                                                                        <option value="Uganda">Uganda</option>
                                                                        <option value="Ukraine">Ukraine</option>
                                                                        <option value="UAE">United Arab Emirates</option>
                                                                        <option value="Uruguay">Uruguay</option>
                                                                        <option value="Uzbekistan">Uzbekistan</option>
                                                                        <option value="Vanuatu">Vanuatu</option>
                                                                        <option value="Venezuela">Venezuela</option>
                                                                        <option value="Vietnam">Vietnam</option>
                                                                        <option value="Yemen">Yemen</option>
                                                                        <option value="Zambia">Zambia</option>
                                                                        <option value="Zimbabwe">Zimbabwe</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="totals-row">
                                                                <div className="invoice-totals-row invoice-summary-subtotal">
                                                                    <div className="invoice-summary-label">Subtotal</div>
                                                                    <div className="invoice-summary-value">
                                                                        <div className="subtotal-amount">
                                                                            <span className="currency">$</span><span className="amount">100</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="invoice-totals-row invoice-summary-total">
                                                                    <div className="invoice-summary-label">Discount</div>
                                                                    <div className="invoice-summary-value">
                                                                        <div className="total-amount">
                                                                            <span className="currency">$</span><span>10</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="invoice-totals-row invoice-summary-tax">
                                                                    <div className="invoice-summary-label">Tax</div>
                                                                    <div className="invoice-summary-value">
                                                                        <div className="tax-amount">
                                                                            <span>0%</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="invoice-totals-row invoice-summary-balance-due">
                                                                    <div className="invoice-summary-label">Total</div>
                                                                    <div className="invoice-summary-value">
                                                                        <div className="balance-due-amount">
                                                                            <span className="currency">$</span><span>90</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="invoice-detail-note">
                                                    <div className="row">
                                                        <div className="col-md-12 align-self-center">
                                                            <div className="form-group row invoice-note">
                                                                <label htmlFor="invoice-detail-notes" className="col-sm-12 col-form-label col-form-label-sm">Notes:</label>
                                                                <div className="col-sm-12">
                                                                    <textarea value={invoice.notes} name="notes" onChange={handleChange} className="form-control" id="invoice-detail-notes" placeholder="Notes - For example, &quot;Thank you for doing business with us&quot;" style={{ height: 88 }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3">
                                        <div className="invoice-actions">
                                            <div className="invoice-action-currency">
                                                <div className="form-group mb-0">
                                                    <label htmlFor="currency">Currency</label>
                                                    <div className="dropdown selectable-dropdown invoice-select">
                                                        <a id="currencyDropdown" className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={invoice.currency_img} className="flag-width" alt="flag" /> <span className="selectable-text">{invoice.currency}</span> <span className="selectable-arrow"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg></span></a>
                                                        <div className="dropdown-menu" aria-labelledby="currencyDropdown">
                                                            <a onClick={changeCurrency} className="dropdown-item" data-img-value="/images/flag-us.svg" data-value="USD - US Dollar" href="javascript:void(0);"><img src="/images/flag-us.svg" className="flag-width" alt="flag" /> USD - US Dollar</a>
                                                            <a onClick={changeCurrency} className="dropdown-item" data-img-value="/images/flag-gbp.svg" data-value="GBP - British Pound" href="javascript:void(0);"><img src="/images/flag-gbp.svg" className="flag-width" alt="flag" /> GBP - British Pound</a>
                                                            <a onClick={changeCurrency} className="dropdown-item" data-img-value="/images/flag-idr.svg" data-value="IDR - Indonesian Rupiah" href="javascript:void(0);"><img src="/images/flag-idr.svg" className="flag-width" alt="flag" /> IDR - Indonesian Rupiah</a>
                                                            <a onClick={changeCurrency} className="dropdown-item" data-img-value="/images/flag-inr.svg" data-value="INR - Indian Rupee" href="javascript:void(0);"><img src="/images/flag-inr.svg" className="flag-width" alt="flag" /> INR - Indian Rupee</a>
                                                            <a onClick={changeCurrency} className="dropdown-item" data-img-value="/images/flag-brl.svg" data-value="BRL - Brazilian Real" href="javascript:void(0);"><img src="/images/flag-brl.svg" className="flag-width" alt="flag" /> BRL - Brazilian Real</a>
                                                            <a onClick={changeCurrency} className="dropdown-item" data-img-value="/images/flag-de.svg" data-value="EUR - Germany (Euro)" href="javascript:void(0);"><img src="/images/flag-de.svg" className="flag-width" alt="flag" /> EUR - Germany (Euro)</a>
                                                            <a onClick={changeCurrency} className="dropdown-item" data-img-value="/images/flag-try.svg" data-value="TRY - Turkish Lira" href="javascript:void(0);"><img src="/images/flag-try.svg" className="flag-width" alt="flag" /> TRY - Turkish Lira</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="invoice-action-tax">
                                                <h5>Tax</h5>
                                                <div className="invoice-action-tax-fields">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="form-group mb-0">
                                                                <label htmlFor="type">Type</label>
                                                                <div className="dropdown selectable-dropdown invoice-tax-select">
                                                                    <a id="currencyDropdown" className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span className="selectable-text">{invoice.tax.type}</span> <span className="selectable-arrow"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg></span></a>
                                                                    <div className="dropdown-menu" aria-labelledby="currencyDropdown">
                                                                        <a onClick={(e) => changeDropdown(e, "tax")} className="dropdown-item" data-value="Deducted" href="javascript:void(0);">Deducted</a>
                                                                        <a onClick={(e) => changeDropdown(e, "tax")} className="dropdown-item" data-value="Per Item" href="javascript:void(0);">Per Item</a>
                                                                        <a onClick={(e) => changeDropdown(e, "tax")} className="dropdown-item" data-value="On Total" href="javascript:void(0);">On Total</a>
                                                                        <a onClick={(e) => changeDropdown(e, "tax")} className="dropdown-item" data-value="None" href="javascript:void(0);">None</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="form-group mb-0 tax-rate-deducted" style={{ display: tax_type === "None" ? "none" : "block" }}>
                                                                <label htmlFor="rate">Rate (%)</label>
                                                                <input value={invoice.tax.rate} onChange={(e) => handleChange(e, "tax")} type="number" className="form-control input-rate" id="rate" placeholder="Rate" defaultValue={10} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="invoice-action-discount">
                                                <h5>Discount</h5>
                                                <div className="invoice-action-discount-fields">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="form-group mb-0">
                                                                <label htmlFor="type">Type</label>
                                                                <div className="dropdown selectable-dropdown invoice-discount-select">
                                                                    <a id="currencyDropdown" className="dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span className="selectable-text">{invoice.discount.type}</span> <span className="selectable-arrow"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg></span></a>
                                                                    <div className="dropdown-menu" aria-labelledby="currencyDropdown">
                                                                        <a onClick={(e) => changeDropdown(e, "discount")} className="dropdown-item" data-value="Percent" href="javascript:void(0);">Percent</a>
                                                                        <a onClick={(e) => changeDropdown(e, "discount")} className="dropdown-item" data-value="Flat Amount" href="javascript:void(0);">Flat Amount</a>
                                                                        <a onClick={(e) => changeDropdown(e, "discount")} className="dropdown-item" data-value="None" href="javascript:void(0);">None</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="form-group mb-0 discount-amount" style={{ display: discount_type === "None" ? "none" : "block" }}>
                                                                <label htmlFor="rate">{discount_type === "Percent" ? "Percent" : "Amount"}</label>
                                                                <input value={invoice.discount.rate} onChange={(e) => handleChange(e, "discount")} type="number" className="form-control input-rate" id="rate" placeholder="Rate" defaultValue={25} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="invoice-actions-btn">
                                            <div className="invoice-action-btn">
                                                <div className="row">
                                                    <div className="col-xl-12 col-md-4">
                                                        <a href="javascript:void(0);" className="btn btn-primary btn-send">Send Invoice</a>
                                                    </div>
                                                    <div className="col-xl-12 col-md-4">
                                                        <a href="apps_invoice-preview.html" className="btn btn-dark btn-preview">Preview</a>
                                                    </div>
                                                    <div className="col-xl-12 col-md-4">
                                                        <button onClick={performAction} className="btn btn-success btn-download">Save</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-wrapper">
                    <div className="footer-section f-section-1">
                        <p className>Copyright © 2021 <a target="_blank" href="https://designreset.com/">DesignReset</a>, All rights reserved.</p>
                    </div>
                    <div className="footer-section f-section-2">
                        <p className>Coded with <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></p>
                    </div>
                </div>
            </div>
            {/*  END CONTENT AREA  */}
        </div>

    );
}
