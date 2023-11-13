"use client"
import { Provider } from 'react-redux'
import store from '@/store/store'
import BookingPage from '@/components/BookingPage/BookingPage'

export default function Home({params}) {

  return (
    <Provider store={store}>
      <BookingPage params={params}/>
    </Provider>
  )
}
