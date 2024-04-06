import Card from "../../components/Card"
import RegisterForm from "../../components/RegisterForm"

function RegisterPage() {
  return (
    <div>
      <h1 className="text-2xl text-center pt-5 text-black">Register</h1>
      <Card>
        <RegisterForm />
      </Card>
    </div>
  )
}
export default RegisterPage