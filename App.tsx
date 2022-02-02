import { QueryClient, QueryClientProvider } from "react-query";
import { DogScreen } from "./src/screens/DogScreen";

const queryClient = new QueryClient();
export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DogScreen></DogScreen>
      </QueryClientProvider>
    </>
  );
}
