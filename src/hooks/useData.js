import { useEffect, useState } from 'react'

/**
 * Loads the dynamic content from /data.json.
 * Editing data.json is the ONLY way to change skills, experience,
 * projects, achievements, etc. — no code changes required.
 */
export default function useData() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let mounted = true
    fetch(`${import.meta.env.BASE_URL}data.json`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load data.json')
        return res.json()
      })
      .then((json) => {
        if (mounted) {
          setData(json)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err)
          setLoading(false)
        }
      })
    return () => {
      mounted = false
    }
  }, [])

  return { data, loading, error }
}
