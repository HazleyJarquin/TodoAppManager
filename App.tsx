import Routers from '@/components/Routers'
import { PaperProvider } from 'react-native-paper'

export default function App() {
  return (
    <PaperProvider>
      <Routers />
    </PaperProvider>
  )
}
