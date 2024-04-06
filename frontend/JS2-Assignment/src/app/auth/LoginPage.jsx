import Card from "../../components/Card"
import LoginForm from "../../components/LoginForm"

function LoginPage() {
  return (
    <div >
      <h1 className="text-2xl text-center pt-10">Log in</h1>
      <Card>
        <LoginForm />
      </Card>
    </div>
  )
}
export default LoginPage