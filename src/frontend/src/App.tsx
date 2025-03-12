import Header from "./components/Header";
import Chat from "./components/Chat";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center items-center bg-gray-100">
        <Chat />
      </main>
      <Footer />
    </div>
  );
};

export default App;
