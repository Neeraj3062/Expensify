// styles
import { useFirestore } from '../../hooks/useFirestore'
import './Home.css'

export default function TransactionList({ transactions }) {
  const { deleteDocument, response } = useFirestore('transactions')
  return (
    <ul className="transactions">
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className="name">{transaction.name}</p>
          <p className="amount">₹ {transaction.amount}</p>
          <button className='btn_del'  data-bs-toggle="modal" data-bs-target="#exampleModal" > x</button>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content rounded-4 shadow">
                  <div class="modal-body p-4 text-center">
                    <h5 class="mb-0 text-warning  " >Are you sure you want to delete this Item?</h5>
                    <p class="mb-0">{transaction.name} will deleted from your Transaction List  </p>
                  </div>
                  <div class="modal-footer flex-nowrap p-0">
                    <button type="button"  data-bs-dismiss="modal" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-right  "><strong className='text-danger'  onClick={()=> deleteDocument(transaction.id)} >Yes,Delete</strong></button>
                    <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0  text-black " data-bs-dismiss="modal">Go Back</button>
                  </div>
                </div>
            </div>
          </div>
        </li>
      ))}

    </ul>
  )
}