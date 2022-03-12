import { QueryClient, QueryClientProvider } from "react-query";
import { CoinScreen } from "./src/screens/CoinScreen";

const queryClient = new QueryClient();
export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CoinScreen></CoinScreen>
      </QueryClientProvider>
    </>
  );
}
