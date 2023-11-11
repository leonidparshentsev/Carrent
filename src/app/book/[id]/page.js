"use client"
import { Provider } from 'react-redux'
import store from '@/store/store'
import BookingPage from '@/components/BookingPage/BookingPage'

export default function Home() {
  return (
    <Provider store={store}>
      <BookingPage/>
    </Provider>
  )
}
