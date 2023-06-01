// // create your App component here
// import React, { useEffect, useState } from "react";

// function App() {
//     const[dogImage, setDogImage] = useState(null);


// useEffect(() => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then((response) => response.json())
//     .then((dogImage) => setDogImage(dogImage))
//     .catch((error) => console.error(error));
// }, []);

// return (
//     <div>
//         {dogImage ? (
//             <img src={dogImage} alt="A random Dog"/>
//         ) : (
//             <p>Loading...</p>
//         )}
//     </div>

// );
// }
// export default App;

import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;