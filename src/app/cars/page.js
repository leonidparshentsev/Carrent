"use client"
import SearchPage from '@/components/SearchPage/SearchPage'
import CarListPage from '@/components/CarListPage/CarListPage'
import { Provider } from 'react-redux'
import store from '@/store/store'

export default function Home() {
  return (
    <Provider store={store}>
      <SearchPage/>
      <CarListPage/>
    </Provider>
  )
}
