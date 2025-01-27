'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [showSignIn, setShowSignIn] = useState(false)

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Fyngro
      </motion.h1>
      <motion.p 
        className="text-xl text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Your partner in financial growth and learning
      </motion.p>
      <div className="text-center">
        <motion.button
          className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
          onClick={() => setShowSignIn(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign In / Login
        </motion.button>
      </div>

      <AnimatePresence>
        {showSignIn && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white p-8 rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold mb-4">Sign In / Login</h2>
              <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
              <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Submit
              </button>
              <button 
                className="ml-4 text-gray-600 hover:text-gray-800"
                onClick={() => setShowSignIn(false)}
              >
                Cancel
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

