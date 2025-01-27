'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const courses = [
  {
    id: 1,
    title: 'Introduction to Personal Finance',
    modules: [
      {
        id: 1,
        title: 'Budgeting Basics',
        videoUrl: 'https://example.com/video1',
        quiz: [
          { question: 'What is a budget?', options: ['A spending plan', 'A type of investment', 'A bank account', 'A credit card'], correctAnswer: 0 },
          { question: 'Why is budgeting important?', options: ['It increases your income', 'It helps control spending', 'It eliminates all expenses', 'It\'s required by law'], correctAnswer: 1 },
        ],
        summary: 'This module covered the basics of budgeting, including its importance in personal finance and how to create an effective budget.'
      },
      // Add more modules here
    ]
  },
  // Add more courses here
]

export default function Learning() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null)
  const [selectedModule, setSelectedModule] = useState<typeof courses[0]['modules'][0] | null>(null)
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const handleQuizSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setQuizSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Learning Center
      </motion.h1>
      {!selectedCourse && (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {courses.map((course) => (
            <div key={course.id} className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300" onClick={() => setSelectedCourse(course)}>
              <h2 className="text-xl font-semibold mb-4">{course.title}</h2>
              <p>{course.modules.length} modules</p>
            </div>
          ))}
        </motion.div>
      )}
      {selectedCourse && !selectedModule && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">{selectedCourse.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedCourse.modules.map((module) => (
              <div key={module.id} className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition duration-300" onClick={() => setSelectedModule(module)}>
                <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
                <p>Video, Quiz, and Summary</p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
      {selectedModule && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">{selectedModule.title}</h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Video</h3>
            <video controls className="w-full max-w-2xl mx-auto">
              <source src={selectedModule.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Quiz</h3>
            <form onSubmit={handleQuizSubmit}>
              {selectedModule.quiz.map((question, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold">{question.question}</p>
                  {question.options.map((option, optionIndex) => (
                    <div key={optionIndex}>
                      <input 
                        type="radio" 
                        id={`q${index}_o${optionIndex}`} 
                        name={`q${index}`} 
                        value={optionIndex}
                        onChange={(e) => setQuizAnswers({...quizAnswers, [index]: parseInt(e.target.value)})}
                        disabled={quizSubmitted}
                      />
                      <label htmlFor={`q${index}_o${optionIndex}`} className="ml-2">{option}</label>
                    </div>
                  ))}
                  {quizSubmitted && (
                    <p className={quizAnswers[index] === question.correctAnswer ? "text-green-500" : "text-red-500"}>
                      {quizAnswers[index] === question.correctAnswer ? "Correct!" : "Incorrect. The correct answer is: " + question.options[question.correctAnswer]}
                    </p>
                  )}
                </div>
              ))}
              {!quizSubmitted && (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Submit Quiz
                </button>
              )}
            </form>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Summary</h3>
            <p>{selectedModule.summary}</p>
          </div>
          <button 
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              setSelectedModule(null)
              setQuizAnswers({})
              setQuizSubmitted(false)
            }}
          >
            Back to Modules
          </button>
        </motion.div>
      )}
    </div>
  )
}

