import React from 'react'
import { Text } from 'react-native'
import BookPage from '../components/(book)/BookPage'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../utils/types'

type BookRouteProp = RouteProp<RootStackParamList, "Book">

const BookScreen = () => {

    const route = useRoute<BookRouteProp>()
    const {type, data} = route.params
  return (
    <BookPage type={type} data={data}/>
  )
}

export default BookScreen