import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import Home from "./pages/Home/Home";
import { getPopular } from "./services/movies/getPopular";

function App() {
  getPopular();
  return (
    <AuthLayout>
      <Home />
    </AuthLayout>
  );
}

export default App;
