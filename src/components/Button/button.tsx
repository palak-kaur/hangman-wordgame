import React, { SyntheticEvent } from 'react';

type ButtonProps = {
	text: string;
	type?: 'button' | 'submit';
	onClick?: (e: SyntheticEvent) => void;
};

function Button({ onClick, text, type = 'button' }: ButtonProps) {
	return (
		<button
			className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-8 border-b-4 border-blue-800 hover:border-blue-500 rounded"
			onClick={onClick}
			type={type}
		>
			{text}
		</button>
	);
}

export default Button;