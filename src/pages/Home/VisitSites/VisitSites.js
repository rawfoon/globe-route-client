import React from 'react';

const VisitSites = () => {
    return (
        <div>
            <section className="p-4 lg:p-8  bg-gray-800  text-gray-100">
	<div className="container mx-auto space-y-12">
        <h1 className='text-3xl md:text-5xl font-bold text-center mt-10  py-14  mt-0  rounded  bg-gray-900'>Explore Bangladesh</h1>
		<div className="flex flex-col overflow-hidden rounded-md mt-0 shadow-sm lg:flex-row">
			<img src="https://i.ibb.co/GPn0KCM/Cox-bazar.jpg" alt="" className="h-80  bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6  bg-gray-900">
				{/* <span className="text-xs uppercase  text-gray-400">Join, it's free</span> */}
				<h3 className="text-3xl font-bold"><span className='text-orange-500'>Cox's Bazar</span> The longest sea beach in the world</h3>
				<p className="my-6  text-gray-400">Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
				{/* <button type="button" className="self-start"></button> */}
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
			<img src="https://i.ibb.co/6sgLNKw/sundarban-1.jpg" alt="" className="h-80  bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6  bg-gray-900">
				<span className="text-xs uppercase  text-gray-400">Join, it's free</span>
				<h3 className="text-3xl font-bold"><span className='text-orange-500'>Sundarban</span> Mangrove Forest</h3>
				<p className="my-6  text-gray-400">The Sundarbans mangrove forest, one of the largest such forests in the world (140,000 ha), lies on the delta of the Ganges, Brahmaputra and Meghna rivers on the Bay of Bengal. It is adjacent to the border of India’s Sundarbans World Heritage site inscribed in 1987. The site is intersected by a complex network of tidal waterways, mudflats and small islands of salt-tolerant mangrove forests, and presents an excellent example of ongoing ecological processes. The area is known for its wide range of fauna, including 260 bird species, the Bengal tiger and other threatened species such as the estuarine crocodile and the Indian python.</p>
				{/* <button type="button" className="self-start">Action</button> */}
			</div>
		</div>
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src="https://i.ibb.co/xsFv7kS/Rangamati.jpg" alt="" className="h-80  bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6  bg-gray-900">
				{/* <span className="text-xs uppercase  text-gray-400">Join, it's free</span> */}
				<h3 className="text-3xl font-bold"><span className='text-orange-500'>Rangamati</span> The natural beauty</h3>
				<p className="my-6  text-gray-400">Rangamati is located in the Chittagong Division. It is bordered by the Tripura state of India to the north, Bandarban District to the south, Mizoram State of India and Chin State of Myanmar to the east, and Khagrachari and Chittagong Districts to the west. Rangamati is the only district in Bangladesh with international borders with two countries: India and Myanmar.</p>
				{/* <button type="button" className="self-start">Action</button> */}
			</div>
		</div>
	</div>
</section>
        </div>
    );
};

export default VisitSites;