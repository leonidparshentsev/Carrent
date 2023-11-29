"use client"
import HomePage from '@/components/HomePage/HomePage'
import PopularCars from '@/components/PopularCars/PopularCars'
import Feedback from '@/components/Feedback/Feedback'
import Values from '@/components/Values/Values'
import AppBlock from '@/components/AppBlock/AppBlock'

export default function Home() {
  return (
    <>
      <HomePage />
      <PopularCars />
      <Feedback />
      <Values />
      <AppBlock />
    </>
  )
}
