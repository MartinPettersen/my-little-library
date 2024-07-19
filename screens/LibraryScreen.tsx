import React from 'react'
import { View } from 'react-native'
import LibraryPage from '../components/(library)/LibraryPage'
import { getAllBooks } from '../database/database'

const LibraryScreen = () => {
  const test = getAllBooks()
  
  console.log(test)

  return (
    <LibraryPage />
  )
}

export default LibraryScreen