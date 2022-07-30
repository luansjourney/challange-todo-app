import AppContent from "./components/AppContent";
import AppHeader from "./components/AppHeader";
import PageTitle from "./components/PageTitle";
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <div className="app-container">
        <PageTitle> TODO LIST </PageTitle>
        <div className="app__wrapper">
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster  
      position="bottom-right"
      toastOptions={{
        style: {
          fontSize: '1.4rem',
        }
      }}/>
    </>
  );
}

export default App;
