import React from 'react'
import { IoMdTrash } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'

const BillingInfo = ({ billingInfo }) => {
    return (
        <>
            <div>
                <h6>Billing information</h6>
            </div>
            <div>
                <ul>
                    {
                        billingInfo.map((elem, idx) => (
                            <li key={idx}>
                                <div>
                                    <span>{elem.name}</span>
                                </div>
                                <div>
                                    <button>
                                        <IoMdTrash />
                                        <span>Delete</span>
                                    </button>
                                    <button>
                                        <MdEdit />
                                        <span>Edit</span>
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default BillingInfo