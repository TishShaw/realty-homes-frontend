import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { MdClose } from 'react-icons/md';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

function ChatModal({ setOpenChat, openChat }) {
	return (
		<Modal
			open={openChat}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<div
					className='absolute right-8 md:right-0 top-4 md:top-2 text-2xl cursor-pointer w-[89%] md:w-full'
					onClick={() => setOpenChat(false)}
				>
					<MdClose />
				</div>
				<div className='h-[95vh] md:h-[500px] flex flex-col items-center justify-center '>
					<div className=''>
						<img
							width='60'
							height='60'
							src='https://img.icons8.com/windows/64/27B1BE/speech-bubble-with-dots.png'
							alt='speech-bubble-with-dots'
						/>
						<div className='bg-green-700 w-[8px] h-[8px] rounded-full absolute top-[30px]'></div>
					</div>
					<h1 className='text-2xl text-center font-bold'>Online Chat</h1>
					<p className='text-md text-center mb-6'>Digital Assistant</p>
					<div className='bg-gray-200 w-[100vw] h-full md:w-full flex justify-center items-center'>
						<iframe
							src='https://creator.voiceflow.com/prototype/658dae771f37e6d839becea8'
							width='100%'
							height='100%'
							title='chatbot'
						></iframe>
					</div>
				</div>
			</Box>
		</Modal>
	);
}

export default ChatModal;
