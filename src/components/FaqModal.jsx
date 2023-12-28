import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { MdClose } from 'react-icons/md';
import { LuMessagesSquare } from 'react-icons/lu';
import { faqArr } from '../utils/Data';
import { FaPlus, FaMinus } from 'react-icons/fa6';

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

function FaqModal({ setOpenFAQs, openFAQs }) {
	const [openAnsIndex, setOpenAnsIndex] = useState(null);

	const toggleAnswer = (idx) => {
		if (openAnsIndex === idx) {
			setOpenAnsIndex(null);
		} else {
			setOpenAnsIndex(idx);
		}
	};

	return (
		<Modal
			open={openFAQs}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style} className='h-full md:h-[500px] overflow-y-scroll'>
				<div
					className='absolute right-4 top-4 text-2xl cursor-pointer'
					onClick={() => setOpenFAQs(false)}
				>
					<MdClose />
				</div>
				<div className='flex items-center justify-center flex-col'>
					<h1 className='text-4xl text-center font-semibold mb-4'>
						Frequently Asked Questions
					</h1>
					<div className='mt-1  mb-4 flex items-center'>
						<span className='text-md mr-[3px]'>
							<LuMessagesSquare />
						</span>
						Still need help? Start a chat with us.
					</div>
					<div className='mt-4'>
						{faqArr.map((item, idx) => (
							<div key={idx}>
								<div
									className='mb-4 cursor-pointer flex'
									onClick={() => toggleAnswer(idx)}
								>
									<p className='mt-[5px] mr-2'>
										{openAnsIndex !== idx ? <FaPlus /> : <FaMinus />}
									</p>{' '}
									<p className='font-bold'>{item.question}</p>
								</div>
								{openAnsIndex === idx && (
									<div className='mb-4 ml-4'>{item.answer}</div>
								)}
							</div>
						))}
					</div>
				</div>
			</Box>
		</Modal>
	);
}

export default FaqModal;
