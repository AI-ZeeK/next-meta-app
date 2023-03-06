import "../styles/globals.css";
import "../styles/index.css";

const RootLayout = ({ children }: any) => (
	<html lang="en">
		<head>
			<link rel="preconnect" href="https://stijndv.com" />
			<link
				rel="stylesheet"
				href="https://stijndv.com/fonts/Eudoxus-Sans.css"
			/>
		</head>
		<body>{children}</body>
	</html>
);
