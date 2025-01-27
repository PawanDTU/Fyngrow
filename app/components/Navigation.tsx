'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">Fyngro</Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/dashboard" className="text-white hover:text-blue-200">Dashboard</Link>
          <Link href="/profile" className="text-white hover:text-blue-200">Profile</Link>
          <Link href="/calculator" className="text-white hover:text-blue-200">Calculator</Link>
          <Link href="/learning" className="text-white hover:text-blue-200">Learning</Link>
        </div>
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-blue-500 p-4"
          >
            <Link href="/dashboard" className="block text-white py-2">Dashboard</Link>
            <Link href="/profile" className="block text-white py-2">Profile</Link>
            <Link href="/calculator" className="block text-white py-2">Calculator</Link>
            <Link href="/learning" className="block text-white py-2">Learning</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation

