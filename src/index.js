import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<GoogleReCaptchaProvider
			reCaptchaKey="6Ld1zT0mAAAAAMjsNzG2kmGGt_INfS9MBvqLa23g"
			language="english"
			useEnterprise="false"
			scriptProps={{
				appendTo: 'head', // optional, default to "head", can be "head" or "body",
			}}>
			<App />
		</GoogleReCaptchaProvider>
	</React.StrictMode>
);
