
import React, { useState, useEffect } from 'react';
import { usePagesStore } from '../stores/pageInformationSlice';
import PageHeader from '../components/layout/PageHeader';

const AwardsPage = () => {
	const pageData = usePagesStore((state) => state.getPageBySlug('awards'));
	const [selectedIdx, setSelectedIdx] = useState(0);

	// Extract sections
	const headerSection = pageData?.sections?.find(s => s.type === 'header');
	const gallerySection = pageData?.sections?.find(s => s.type === 'awards_gallery');
	const images = gallerySection?.images || [];
	const autoScrollInterval = gallerySection?.autoScrollInterval || 3000;

	const handleThumbClick = (idx) => setSelectedIdx(idx);
	const handleScroll = (dir) => {
		setSelectedIdx((prev) => {
			if (images.length === 0) return 0;
			if (dir === 'left') return prev === 0 ? images.length - 1 : prev - 1;
			if (dir === 'right') return prev === images.length - 1 ? 0 : prev + 1;
			return prev;
		});
	};

	// Auto-scroll
	useEffect(() => {
		if (!images.length) return;
		const interval = setInterval(() => {
			setSelectedIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
		}, autoScrollInterval);
		return () => clearInterval(interval);
	}, [images.length, autoScrollInterval]);

	if (!pageData) return <div>Loading...</div>;

	return (
		<section className="pt-0 pb-16 md:pb-24 bg-gray-50">
			<div className="max-w-4xl mx-auto px-4 md:px-8">
				{/* Heading at the very top, no space above */}
				<div className="text-center">
					<PageHeader
						title={headerSection?.title || pageData.title || 'Awards & Recognition'}
						subtitle={headerSection?.subtitle || 'Celebrating our journey and honors'}
						className="mb-0 mt-0 pt-0"
					/>
				</div>
				{/* Gallery Section */}
				<section className="flex flex-col items-center gap-12">
					<div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[32rem] rounded-3xl overflow-hidden shadow-lg bg-white flex items-center justify-center border border-gray-200 mb-4">
						<button onClick={() => handleScroll('left')} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10">
							<span className="sr-only">Previous</span>
							<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" /></svg>
						</button>
						{images.length > 0 ? (
							<img
								src={images[selectedIdx].src}
								alt={images[selectedIdx].caption}
								className="object-contain w-full h-full"
								onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x600?text=Award'; }}
							/>
						) : (
							<div className="flex items-center justify-center w-full h-full text-gray-400">No awards found.</div>
						)}
						<button onClick={() => handleScroll('right')} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow hover:bg-white z-10">
							<span className="sr-only">Next</span>
							<svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
						</button>
					</div>
					<div className="flex gap-4 overflow-x-auto pb-2 w-full max-w-xl justify-center">
						{images.map((img, idx) => (
							<button
								key={img.src}
								onClick={() => handleThumbClick(idx)}
								className={`border-2 rounded-xl overflow-hidden w-24 h-20 flex-shrink-0 transition-all duration-200 shadow-sm ${selectedIdx === idx ? 'border-red-500 ring-2 ring-red-200' : 'border-gray-200'}`}
								style={{ outline: selectedIdx === idx ? '2px solid #b73d34' : 'none', background: selectedIdx === idx ? '#fff6f6' : '#fff' }}
							>
								<img
									src={img.src}
									alt={img.caption}
									className="object-cover w-full h-full"
									onError={e => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/80x60?text=Award'; }}
								/>
							</button>
						))}
					</div>
				</section>
			</div>
		</section>
	);
};

export default AwardsPage;