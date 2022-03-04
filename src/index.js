
import { useState } from 'react'

const useSwipeDetector = (dif=50) => {

  const [move, setMove] = useState({
    startX: 0,
    startY: 0,
    movingX: 0,
    movingY: 0
  })
  const [movedTo, setMoveTo] =useState('')
  const setStart = (e) => {
    setMove({
      ...move,
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY
    })
  }
  const setMoving = (e) => {
    
    setMove({
      ...move,
      movingX: e.touches[0].clientX,
      movingY: e.touches[0].clientY
    })
  }
  const setDir = () => {
    var moveTo =''
    //console.log(move)
    if (move.startX + dif < move.movingX) {
      moveTo='right'
    } else if (move.startX - dif > move.movingX) {
      moveTo='left'
    } else if (move.startY + dif < move.movingY) {
      moveTo= 'down'
    } else if (move.startY - dif > move.movingY) {
      moveTo= 'up'
    } 
    setMoveTo(moveTo)
  }

  const events = { onTouchStart: setStart, onTouchMove: setMoving, onTouchEnd: setDir }

  return [movedTo, events]
}

export default useSwipeDetector