"use client"
import HomePage from '@/components/HomePage/HomePage'
import PopularPage from '@/components/PopularPage/PopularPage'
import FeedbackPage from '@/components/FeedbackPage/FeedbackPage'
import ValuesPage from '@/components/ValuesPage/ValuesPage'
import AppPage from '@/components/AppPage/AppPage'
import { Provider } from 'react-redux'
import store from '@/store/store'

export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
      <PopularPage />
      <FeedbackPage />
      <ValuesPage />
      <AppPage />
    </Provider>
  )
}
