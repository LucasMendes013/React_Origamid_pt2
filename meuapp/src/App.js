import React from 'react';


const App = () => {
  let [tablet, useTablet] = React.useState(false)

  const displayNone = {
    display : 'none',
  }

  function ClickTablet () {
    useTablet(!tablet)
  }

  function linkTablet () {
    document.write('https://ranekapi.origamid.dev/json/api/produto/tablet')
    if (tablet === true) {
      document.querySelector('.classebutton')
    } else {

    }
  }


  return (
    <>
    <button className="classebutton" onClick={ClickTablet}>{!tablet ? linkTablet() : 'false'}</button>
    </>
  )
}



export default App;
