import { useState } from 'react'
import { toast } from 'react-toastify'

const AllotmentFrom = ({ date, time, eventId }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const handleForm = (e) => {
    e.preventDefault()
    if (!name || !email) {
      return toast.error('Please fill all the fields')
    }
    axios
      .post(`https://api.fastschedular.live/api/event/allot`, {
        name,
        email,
        description,
        date,
        time,
        eventId,
      })
      .then((res) => toast.success('slot created successfully'))
      .catch((err) => console.log(err))
  }
  return (
    // simple form
    <form border={2} onSubmit={handleForm}>
      <h1>Book Slot for {time}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter your description"
      />

      <button type="submit">Book Slot</button>
    </form>
  )
}

export default AllotmentFrom
