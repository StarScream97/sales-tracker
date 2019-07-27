import React from 'react';

const AddSale=()=>{
    return(
        <div className="px-4">
            <h2>Welcome to the Add Sale Page</h2>   
            <form action="#" className="py-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Customer Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="customer-name" type="text" placeholder="Customer Name"/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="Item Name">
                        Item
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="item-name" type="text" placeholder="Item Name" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="Total Amount">
                        Total Amount
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="total-amount" type="text" placeholder="Total Amount" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="Date">
                        Date
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" />
                </div>

                <div>
                    <input className="my-button text-white text-lg px-3 py-3 w-full rounded" type="submit" value="Add Sale"/>
                </div>

            </form>

        </div>
    )
}

export default AddSale;