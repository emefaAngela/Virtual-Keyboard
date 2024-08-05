import './App.css';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="flex flex-col space-y-12 bg-[#F4F0F0] h-full mx-auto py-[134px] w-full items-center justify-center">
      {/* <SingleValuedKey/>
     */}
      <div className='flex flex-col space-y-2'>
        <div className='flex flex-row space-x-2'>
          <div className='text-[#625E70]'>Metrics:</div>
          <div>Speed:</div>
        </div>
        <div className='flex flex-row space-x-2'>
          <div className='text-[#625E70]'>All keys:</div>
          <div></div>
        </div>
        <div className='flex flex-row space-x-2'>
          <div className='text-[#625E70]'>Current key:</div>
          <div>Not calibrated,need more samples.</div>
        </div>
        <div className='flex flex-row space-x-2'>
          <div className='text-[#625E70]'>Accuracy:</div>
          <div>No accuracy streaks.</div>
        </div>
        <div className='flex flex-row space-x-2'>
          <div className='text-[#625E70]'>Daily goal:</div>
          <div>Speed:</div>
        </div>
      </div>
      <div className='hover:border text-[#26243D]'>

      </div>
      <Keyboard/> 
    </div>
  );
}

export default App;
