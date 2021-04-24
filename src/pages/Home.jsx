import React, { Fragment, useContext, useEffect } from 'react'
import { Form } from '../Components/Form'
import { Loader } from '../Components/loader'
import { Notes } from '../Components/Notes'
import { FirebaseContext } from '../context/firebase/firebaseContext'


export const Home = () => {

  const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext)
  console.log({ notes })
  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <Fragment>
      <Form />

      <hr />
      {loading
        ? <Loader />
        : <Notes notes={notes} onRemove={removeNote} />
      }

    </Fragment>
  )
}
