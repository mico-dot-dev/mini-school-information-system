import LoginForm from "./component/LoginForm";

export default function Home() {
  return (
    <main className="flex bg-background min-h-screen flex-row items-center ">
      <div className="bg-foreground min-w-1/2 min-h-screen text-white">
        <p className="ml-12 mt-28 text-5xl">
          <strong>Welcome to</strong> <br />
          the School Portal
        </p>
      </div>
      <div className=" min-w-1/2 h-screen content-center justify-items-center">
        <div className="flex flex-col gap-4 w-1/2 h-1/2 ">
          <div className="text-center mb-10">
            <p className="text-5xl font-bold">Login</p>
            <p className="text-lg font-light">Enter your account details</p>
          </div>
          <LoginForm></LoginForm>
        </div>
      </div>
    </main>
  );
}
