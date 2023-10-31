import Navbar from '../components/Navbar'

const DefaultTemplate = ({ children }) => {
  return (
    <div className="max-w-screen-xl p-4 mx-auto">
      <Navbar />
      {children}
    </div>
  )
}

export default DefaultTemplate
