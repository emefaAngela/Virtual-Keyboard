import React, {useEffect,useState} from 'react';

const keyLayout = [
  [
    { key: ['~', '`'], class: 'bg-gray-300' },
    { key: ['!', '1'], class: 'bg-red-400' },
    { key: ['@', '2'], class: 'bg-yellow-400' },
    { key: ['#', '3'], class: 'bg-green-400' },
    { key: ['$', '4'], class: 'bg-blue-400' },
    { key: ['%', '5'], class: 'bg-indigo-400' },
    { key: ['^', '6'], class: 'bg-purple-400' },
    { key: ['&', '7'], class: 'bg-pink-400' },
    { key: ['*', '8'], class: 'bg-orange-400' },
    { key: ['(', '9'], class: 'bg-yellow-400' },
    { key: [')', '0'], class: 'bg-green-400' },
    { key: ['_', '-'], class: 'bg-gray-400' },
    { key: ['+', '='], class: 'bg-gray-400' },
    { key: 'Backspace', class: 'bg-gray-400 flex-grow text-sm' },
  ],
  [
    { key: 'Tab', class: 'bg-green-400 flex-grow text-sm' },
    { key: 'Q', class: 'bg-yellow-400' },
    { key: 'W', class: 'bg-blue-400' },
    { key: 'E', class: 'bg-purple-400' },
    { key: 'R', class: 'bg-pink-400' },
    { key: 'T', class: 'bg-orange-400' },
    { key: 'Y', class: 'bg-yellow-400' },
    { key: 'U', class: 'bg-pink-400' },
    { key: 'I', class: 'bg-orange-400' },
    { key: 'O', class: 'bg-yellow-400' },
    { key: 'P', class: 'bg-green-400' },
    { key: ['{', '['], class: 'bg-gray-400' },
    { key: ['}', ']'], class: 'bg-gray-400' },
    { key: ['|', '\\'], class: 'bg-gray-400 flex-grow' },
  ],
  [
    { key: 'Caps Lock', class: 'bg-green-400 flex-grow text-sm' },
    { key: 'A', class: 'bg-green-400' },
    { key: 'S', class: 'bg-yellow-400' },
    { key: 'D', class: 'bg-blue-400' },
    { key: 'F', class: 'bg-purple-400' },
    { key: 'G', class: 'bg-pink-400' },
    { key: 'H', class: 'bg-orange-400' },
    { key: 'J', class: 'bg-yellow-400' },
    { key: 'K', class: 'bg-pink-400' },
    { key: 'L', class: 'bg-orange-400' },
    { key: [':', ';'], class: 'bg-gray-400' },
    { key: ['"', '\''], class: 'bg-gray-400' },
    { key: 'Enter', class: 'bg-gray-400 flex-grow text-sm' },
  ],
  [
    { key: 'Shift', class: 'bg-green-400 flex-grow text-sm' },
    { key: 'Z', class: 'bg-green-400' },
    { key: 'X', class: 'bg-yellow-400' },
    { key: 'C', class: 'bg-blue-400' },
    { key: 'V', class: 'bg-purple-400' },
    { key: 'B', class: 'bg-pink-400' },
    { key: 'N', class: 'bg-orange-400' },
    { key: 'M', class: 'bg-yellow-400' },
    { key: ['<', ','], class: 'bg-gray-400' },
    { key: ['>', '.'], class: 'bg-gray-400' },
    { key: ['?', '/'], class: 'bg-gray-400' },
    { key: 'Shift', class: 'bg-green-400 flex-grow text-sm' },
  ],
  [
    { key: 'Ctrl', class: 'bg-green-400  text-sm' },
   // { key: 'Win', class: 'bg-green-400' },
    { key: 'Alt', class: 'bg-green-400 text-sm' },
    { key: 'Space', class: 'bg-gray-400 flex-grow' },
    { key: 'Alt', class: 'bg-green-400 text-sm' },
   // { key: 'Win', class: 'bg-green-400' },
   // { key: 'Menu', class: 'bg-green-400' },
    { key: 'Ctrl', class: 'bg-green-400  text-sm' },
  ],
];

const Keyboard = ({onKeyFromKeyboard}) => {
  const [Key, setKey] = useState(null);

  const handleKeyDown = (event) => {
    setKey(event.key.toUpperCase());
    onKeyFromKeyboard(event.key.toUpperCase());
  };

  const handleKeyUp = () => {
    setKey(null);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="p-4 w-1/2 mx-auto">
      {keyLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center  ">
          {row.map(({ key, class: keyClass }, keyIndex) => (
            <button
              key={keyIndex}
              className={` p-2 w-10 h-10 flex items-center justify-center border rounded-sm text-lg  ${
                Key === key ? 'bg-blue-500 text-white' : keyClass
              }`}
            >
              {Array.isArray(key) ? (
                <div className="flex flex-col items-center justify-center">
                  <span className="text-sm">{key[0]}</span>
                  <span className="text-sm">{key[1]}</span>
                </div>
              ) : (
                key
              )}
            </button>
          ))}
        </div>
      ))}
      {/* <div> {key ? `Key pressed: ${key}` : 'Press any key...'}</div> */}
    </div>
  );
};

export default Keyboard;
