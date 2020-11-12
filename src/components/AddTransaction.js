import React, {useState} from 'react'

export const AddTransaction = () => {

    const [description, setDescription] = useState();
    const [transactionAmount, setTransactionAmount] = useState();

    return (
        <div>
            <h3>Add New Transaction </h3>
            <form>
                <div className="Form-control">
                    <label htmlFor='desctiption'>
                        Description
                    </label>
                    <input type="text" 
                           id="description" 
                           placeholder="Detail of transaction"
                           value={description}
                           onChange={(e) => setDescription(e.target.value) }
                    />
                </div>
                <div className="Form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input type="number"
                           id="transactionamount"
                           placeholder="Enter transaction amount" 
                           value={transactionAmount}
                           onChange={(e) => setTransactionAmount(e.target.value) }
                    />
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
