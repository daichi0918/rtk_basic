import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchAsyncGet, selectUsers } from "./fetchSlice"

const Fetch = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(selectUsers)
  useEffect(() => {
    dispatch(fetchAsyncGet())
  }, [dispatch])
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.email}</div>
      ))}
    </div>
  )
}

export default Fetch
