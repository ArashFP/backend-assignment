function Footer({ className }) {
  const year = new Date().getFullYear();
  return (
    <footer className={`bg-blue-950 text-white p-4 text-center w-full ${className}`}>
      <p>© {year} Property of A.F.P. All rights reserved.</p>
      <p>
        Terms of Service | 
        Privacy Policy
      </p>
    </footer>
  )
}
export default Footer