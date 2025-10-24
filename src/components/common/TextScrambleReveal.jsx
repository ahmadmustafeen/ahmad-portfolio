'use client'
import { useEffect, useState } from 'react'
import TextScramble from '@skits/react-text-scramble'

export default function TextScrambleReveal({
  text,
  className = '',
  characters = '欢 迎 来 到 我 的 作 品 集',
  speed = 30,
  revealText = true,
  revealSpeed = 100,
  revealDelay = 0,
}) {
  const [start, setStart] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStart(true), 10)
    return () => clearTimeout(t)
  }, [])

  if (!start) return <span className={className + ' opacity-0'}>{text}</span>

  return (
    <TextScramble
      text={text}
      characters={characters}
      speed={speed}
      revealText={revealText}
      revealSpeed={revealSpeed}
      revealDelay={revealDelay}
      wrappingElement="span"
      className={className}
    />
  )
}