import Routers from '@/components/Routers'
import { PaperProvider } from 'react-native-paper'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
export default function App() {
  return (
    <PaperProvider>
      <QueryClientProvider client={queryClient}>
        <Routers />
      </QueryClientProvider>
    </PaperProvider>
  )
}
