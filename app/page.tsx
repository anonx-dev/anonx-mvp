import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>Homepage</h1>
      {/* <button onClick={()=>}>Go to Feed</button> */}
      <Link href="/feed">Go to Feed</Link>
    </div>
  )
}

export default page
