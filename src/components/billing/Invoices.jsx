import React from 'react'

const Invoices = ({ invoices }) => {
    return (
        <>
            <div>
                <h6>Invoices</h6>
                <button>View all</button>
            </div>
            <div>
                <ul>
                    {
                        invoices.map((elem, idx) => (
                            <li key={idx}>
                                <div>
                                    <span>
                                        {elem.date}
                                    </span>
                                    <span>
                                        {elem.code}
                                    </span>
                                </div>
                                <div>
                                    <span>$ {elem.budget}</span>
                                    <div>
                                        <span>PDF ICO</span>
                                        <span>PDF</span>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Invoices