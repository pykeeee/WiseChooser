import { useEffect } from 'react'

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = e => {
      if (!ref.current || ref.current.contains(e.target)) return
      handler(e)
    }

    document.addEventListener('mousedown', listener, true)
    document.addEventListener('touchstart', listener, true)
    return () => {
      document.removeEventListener('mousedown', listener, true)
      document.removeEventListener('touchstart', listener, true)
    }
  }, [handler, ref])
}

export default useOnClickOutside