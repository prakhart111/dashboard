import Header from "./components/Header";
import MessageCenter from "./components/MessageCenter";
import Sidebar from "./components/Sidebar";
import Uploader from "./components/Uploader";

function App() {
  

  return (
    <div className="App bg-gray-200 min-h-full scroll-smooth">
      <Header />
      <Sidebar />
      <div className="absolute inset-y-0 right-10 top-20 w-1/3">
      <Uploader/>
      </div>
      
      <div className="absolute min-h-[50%] min-w-[50%] top-[48rem] inset-x-1/4 m-5">
      <h1 className='text-4xl p-2'>Message Center</h1>
      <MessageCenter/>
      </div>
    </div>
  );
}

export default App;
