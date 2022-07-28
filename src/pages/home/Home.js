import React from 'react'

// ===COMPONENTS===
import TransactionForm from './TransactionForm'
import { useCollection } from '../../hooks/useCollection'
import TransactionList from './TransactionList'


// ====HOOKS====
import {useAuthContext} from '../../hooks/useAuthContext'
// ===STYLES===
import './Home.css'
import Footer from '../../components/Footer'

export default function Home() {
  const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'transactions', ["uid", "==", user.uid],
    ["createdAt","desc",""]
  )



  return (
    <div className="container">
      <div className='container_bg'>        
      <div className="sidebar">
        <TransactionForm uid={user.uid} />
      </div>
      <div className="content">
         {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      </div>

    </div>
  )
}
