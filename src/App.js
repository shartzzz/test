import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Slide1 from './panels/Slide1';
import Slide2 from "./panels/Slide2";

const App = () => {

	return (
		<>
			<Slide1 />
			<Slide2 />
		</>
	);
}

export default App;

