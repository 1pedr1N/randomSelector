import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0px;
		padding: 0px;
		box-sizing: border-box;
	}
	body {
		font-family: 'Poppins';
		font-size: 97.6%;
		color:  #f9f9f9;
		background-color:cream;
		a{
			text-decoration: none;
			color: inherit;
		}
		button{
			cursor: pointer;
		}
		.backgroundGold {
			background:linear-gradient(180deg, #ffde78 0%, #b98e2f 100%);
		}
		.textGold {
			background-image: linear-gradient(180deg, #ffde78 0%, #b98e2f 100%);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
		}	
		
		@media (min-width: 2200px){
			font-size: 120%;
		}
		@media (min-width: 1700px){
			font-size: 120%;
		}
		@media (max-width: 1300px){
			font-size: 92%;
		}
		@media (max-width: 1000px){
			font-size: 76%;
		}
		@media (max-width: 850px){
			font-size: 72%;
		}
	
  	}
  
`
