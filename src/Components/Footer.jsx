
import React from 'react'
// import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">

      <h5 className="fw-bold">AI Resume Builder</h5>

      <p className="mb-2">
        Build professional and ATS-friendly resumes with AI.
      </p>

      {/* <div className="mb-3">
        <Link to="/" className="text-light text-decoration-none mx-2">
          Home
        </Link>

        <Link to="/all-resumes" className="text-light text-decoration-none mx-2">
          All Resumes
        </Link>

        <Link to="/download" className="text-light text-decoration-none mx-2">
          Downloads
        </Link>
      </div> */}
<hr className="w-50 mx-auto"/>
      <small>
        © 2026 AI Resume Builder. All rights reserved.
      </small>

    </footer>
  )
}

export default Footer
