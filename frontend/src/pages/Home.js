import backgroundImage from "./../images/backgroundImage.jpg"

function Home() {

    const backgroundImageStyle = {
      backgroundImage: `url("${backgroundImage}")`,
      backgroundSize: "cover",
  
    };
  
    return (
      <div className="App">
  
        <div className="text-white" style={backgroundImageStyle}>
          <div className="bg-gradient-to-r from-black">
            <div className="px-10 py-24 max-w-xl grid grid-cols-1 gap-8">
              <h2 className="text-lg uppercase font-bold">Check your health</h2>
              <h1 className="text-5xl font-bold">Heart Risk Survey</h1>
              <p>Your health is your most valuable asset. According to the American
                Heart Association 1 in 10 Americans are at Risk. This app was made with 
                the intention of promoting heart health awarness. 
              </p>
              <button className=" bg-red-500 rounded-md px-5 py-3 w-36 text-lg">Take Survey</button>
            </div>
          </div>
        </div>
  
  
        <div className=" px-10">
          <div className=" max-w-sm">
            <h2 className="text-4xl font-bold py-10">add stuff here</h2>
          </div>
  
          <div className="grid grid-cols-2 gap-4 text-slate-700">
            <div>
              <h3 className="text-2xl font-bold mb-2">title 1</h3>
              <p text-lg> add paragraph here
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">title 2</h3>
              <p text-lg>add paragraph here
              </p>
            </div>
          </div>
        </div>
  
   
  
      </div>
    );
  }

  export default Home;

  