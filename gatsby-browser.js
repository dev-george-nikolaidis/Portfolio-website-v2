const React = require("react");
const { GameContextProvider } = require("./src/context/game/GameContext");
// const { ThemeProvider } = require("./src/context/theme/ThemeContext");
exports.wrapRootElement = ({ element }) => {
	// return  <GameContextProvider ><ThemeProvider>{element}</ThemeProvider> </GameContextProvider>
	return <GameContextProvider>{element} </GameContextProvider>;
};

// const React = require('react');
// const Layout = require("./src/components/Layout/Layout").default

// exports.wrapPageElement = ({element,props})=>{
//     return<Layout {...props}>{element}</Layout>
// }
