import React, { useReducer } from 'react'
import axios from 'axios'
import { FirebaseContext } from './firebaseContext'
import { firebaseReduser } from './firebaseReduser'
import { ADD_NODE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER } from '../types'

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false
  }
  const [state, dispatch] = useReducer(firebaseReduser, initialState)

  const showLoader = () => dispatch({ type: SHOW_LOADER })

  const fetchNotes = async () => {
    showLoader()
    const response = await axios.get(`${url}/notes.json`)

    const payload = Object.keys(response.data).map(key => {
      return {
        ...response.data[key],
        id: key
      }
    })


    dispatch({ type: FETCH_NOTES, payload })


  }

  const addNote = async title => {
    const date = new Date()
    const note = {
      title, date: date.toDateString()
    }
    try {
      const response = await axios.post(`${url}/notes.json`, note)
      const payload = {
        ...note,
        id: response.data.name
      }

      dispatch({ type: ADD_NODE, payload })

    } catch (error) {
      throw new Error(error.message)
    }
  }

  const removeNote = async id => {
    await axios.delete(`${url}/notes/${id}.json`)
    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    })
  }

  console.log('Context notes: ', state.notes)

  return (
    <FirebaseContext.Provider value={{
      showLoader, addNote, removeNote, fetchNotes,
      loading: state.loading,
      notes: state.notes
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}
