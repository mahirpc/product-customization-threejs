import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'

import state from "../store"

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state)

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
