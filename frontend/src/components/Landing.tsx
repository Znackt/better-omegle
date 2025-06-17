import { useState } from "react"
import { Link } from "react-router-dom";

export const Landing = () => {
  const [name, setName] = useState<HTMLInputElement | undefined>();

  return (
    <div>
      <input type="text" placeholder="Enter your name" onChange={(e) => {
        setName(e.target.value as unknown as HTMLInputElement);
      }} />

      <Link to={`/room/?name=${name}`}>
        Join
      </Link>
    </div>
  )
}
