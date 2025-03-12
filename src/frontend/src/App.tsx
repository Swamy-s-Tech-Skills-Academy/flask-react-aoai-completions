import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Chat from "./components/Chat";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-row bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex-grow bg-gray-100 flex justify-center items-center">
          <Chat />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
