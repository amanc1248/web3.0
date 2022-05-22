import { Navbar, Loader, Services, Transactions, Welcome, Footer } from "./components"
const App =  ()=> {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar></Navbar>
        <Welcome></Welcome>
      </div>
      <Services></Services>
      <Transactions></Transactions>
      <Footer></Footer>
    </div>
  )
}

export default App
