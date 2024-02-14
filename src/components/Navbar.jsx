import Link from "next/link"

const Navbar = () => {
  return (
    <div className="ml-4">
      <Link href="/">
        <p className="text-2xl font-bold">Home</p>
      </Link>
    </div>
  )
}

export default Navbar