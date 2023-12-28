import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { MdClose } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';
import { helpArr } from '../utils/Data';

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

function HelpModal({ setOpenHelp, openHelp }) {
	const [openHelpIndex, setOpenHelpIndex] = useState(null);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const toggleHelpSubs = (idx) => {
		if (openHelpIndex === idx) {
			setOpenHelpIndex(null);
		} else {
			setOpenHelpIndex(idx);
		}
	};

	return (
		<Modal
			open={openHelp}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style} className='h-full md:h-[500px] overflow-y-scroll'>
				<div
					className='absolute right-4 top-4 text-2xl cursor-pointer'
					onClick={() => setOpenHelp(false)}
				>
					<MdClose />
				</div>
				<div className='h-full'>
					<div className='mb-8'>
						<h1 className='text-center text-4xl font-bold'>Help Center</h1>
						<p className='text-center mt-2 mb-8 text-md '>
							How can we help you?
						</p>
						<div className='shadow border border-gray-400 rounded flex items-center h-10'>
							<span className='px-4 text-xl'>
								<IoSearch />
							</span>
							<input
								type='text'
								placeholder='Describe your issue'
								className='w-full h-full outline-none text-md'
							/>
						</div>
					</div>
					{helpArr.map((item, idx) => (
						<div
							className='border border-b-gray-400 flex flex-col items-center justify-center cursor-pointer w-full'
							key={idx}
							onClick={() => toggleHelpSubs(idx)}
						>
							<p className='p-3 font-bold' onClick={handleOpen}>
								{item?.title}
							</p>
							<div className='w-full'>
								{openHelpIndex === idx &&
									item.description.map((sub, index) => (
										<div key={index} className=''>
											<p className='bg-[#27B1BE] border border-b-gray-200 pl-3 py-3 font-medium '>
												{sub.subtitle}
											</p>
											<p className='p-3'>{sub.passage}</p>
										</div>
									))}
							</div>
						</div>
					))}
				</div>
			</Box>
		</Modal>
	);
}

export default HelpModal;
