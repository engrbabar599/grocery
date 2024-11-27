import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Button from '../components/Elements/Button';
import Svg from '../components/Elements/Svg';
import { Link } from 'react-router-dom';
import Footer from '../components/Elements/Footer';
import Zaika from '../components/Elements/Zaika';
import Navbar from '../components/Elements/Navbar';

const socialMediaAccounts = [
    {
        name: 'Facebook',
        followers: '11K',
        description: 'Follow our official Facebook account for insights and updates',
        icon: <Svg.FaceBookIcon className="sm:w-20 w-20 h-20 sm:h-20 object-contain" />,
        url: 'https://www.facebook.com/mrcorp.ca'
    },
    {
        name: 'Tiktok',
        followers: '10K',
        description: 'Follow our official Tiktok account for insights and updates',
        icon: <Svg.TickTokIcon className="sm:w-20 w-20 h-20 sm:h-20 object-contain" />,
        url: 'https://www.tiktok.com/@mrcorp_'
    },
    {
        name: 'Instagram',
        followers: '15K',
        description: 'Follow our official Instagram account for insights and updates',
        icon: <Svg.InstaIcon className="sm:w-20 w-20 h-20 sm:h-20 object-contain" />,
        url: 'https://www.instagram.com/mrcorp.ca/'
    },
    {
        name: 'YouTube',
        followers: '8K',
        description: 'Follow our official YouTube account for insights and updates',
        icon: <Svg.YouTubeIcon className="sm:w-20 w-20 h-20 sm:h-20 object-contain" />,
        url: 'https://www.youtube.com/@MRCorp'
    },
    {
        name: 'LinkedIn',
        followers: '8.2K',
        description: 'Follow our official LinkedIn account for insights and updates',
        icon: <Svg.LinkedInIcon className="sm:w-20 w-20 h-20 sm:h-20 object-contain" />,
        url: 'https://www.linkedin.com/company/mrcorpca'
    },
    {
        name: 'X',
        followers: '8.2K',
        description: 'Follow our official X.com account for insights and updates',
        icon: <Svg.XIcon className="sm:w-20 w-20 h-20 sm:h-20 object-contain" />,
        url: 'https://twitter.com/mrcorp_ca'
    }
];

const Home = () => {

    /////////////// Timer ////////////////

    const [hours, setHours] = useState(8);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setSeconds(59);
                setMinutes(minutes - 1);
            } else if (hours > 0) {
                setMinutes(59);
                setSeconds(59);
                setHours(hours - 1);
            } else {
                // Timer reaches zero, reset to 8 hours
                setHours(8);
                setMinutes(0);
                setSeconds(0);
            }
        }, 1000); // Update timer every second

        return () => clearInterval(intervalId); // Cleanup function to stop timer on unmount
    }, [seconds, minutes, hours]); // Dependency array ensures the effect runs only when state variables change

    const timerDisplay = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;



    ////////// Counter /////////////

    const [counterValue, setCounterValue] = useState(0);
    const targetValue = [64113, 531432, 100]; // Values for each counter
    const duration = 5000; // Duration for the animation in milliseconds

    useEffect(() => {
        const start = Date.now();
        const end = start + duration;

        const updateCounter = () => {
            const now = Date.now();
            const timeElapsed = Math.min(1, (now - start) / duration);
            const animatedValue = Math.floor(timeElapsed * targetValue);

            setCounterValue(animatedValue);

            if (now < end) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);

        // Clean up function
        return () => {
            cancelAnimationFrame(updateCounter);
        };
    }, []); 


    const faqsData = [
        {
            question: 'How are claims verified?',
            answer: "Our team reviews the submissions to ensure they meet the guidelines. Once verified, additional rewards or surprises are added to the user's wallet.",
        },
        {
            question: 'What information is required for the claim submission?',
            answer: '	The claim submission requires a video, photos, and necessary details like name and address.',
        },
        {
            question: 'When can the claim section be accessed?',
            answer: 'The claim section is accessible after 09:00 PM, following the reveal of the yearly grocery gift.',
        },
        {
            question: ' How does the claim section work for the yearly grocery gift?',
            answer: 'After receiving the yearly grocery gift, the user can access the claim section, upload a video expressing gratitude, and share photos of their groceries.',
        },
        {
            question: "When will the year's worth of groceries be revealed?",
            answer: 'The lucky family member will receive a message from MR, revealing the yearly grocery gift at 09:00 PM.',
        },
        {
            question: 'What time does slots start and end?',
            answer: 'User can start getting slots at 8:00 AM and closes at 08:00 PM.',
        },
        {
            question: 'Can I get more than 20 slots from a single province?',
            answer: 'No, each user can get up to 20 slots from each province.',
        },
        {
            question: 'How many provinces are available for slots?',
            answer: 'There are 13 provinces available for slots.',
        },

    ];

    const imageUrls = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRy9rvA4ybNUm7EUvEfeQi-PwUNWf7IRWag&usqp=CAU',
        'https://media.istockphoto.com/id/904234860/photo/smiling-young-girl.jpg?s=612x612&w=0&k=20&c=4XHvlujLcoYuWSxvCSMLd6uTZxC3lT8uepjh2nkrjUI=',
        'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-874158.jpg&fm=jpg',
        'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg',
        'https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg',
        'https://burst.shopifycdn.com/photos/professional-man-portrait.jpg?width=1000&format=pjpg&exif=0&iptc=0'
    ];

    // Define state to track which FAQ item is currently expanded
    const [activeIndex, setActiveIndex] = useState(null);
    // const navigate = useNavigate()

    // Function to toggle the active FAQ item
    const toggleActiveIndex = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <Navbar/>
            <header className="xl:px-32 sm:px-16 px-8 drop-shadow-sm pt-20 pb-10 relative">
        <div className="flex items-center gap-5 flex-col lg:flex-row">
          <div className="lg:flex-[4] space-y-2 sm:space-y-4 md:space-y-5 lg:text-left text-center">
           <div className="border-l-4 border-[#000000]">
            <h3 className="text-[#000000] sm:text-[48px] sm:leading-[72px] leading-[52px] tracking-[2%] text-xl font-extrabold font-mont text-[30px] mx-[24px]">
              Download <span className="font-normal text-[48px] ">MR</span>
            </h3>
            <span>
              <h1 className="text-[26px] sm:text-[35px] md:text-[42px] leading-[43px]  tracking-[2%] sm:leading-[63px] inline-block max-w-[545px] mx-[24px]">
                {" "}
                Gift cart
                <span className=" leading-[1.2] font-semibold  bg-gradient-l  text-transparent bg-clip-text">
                  {" "}
                  Get $10 in your wallet by installing"
                </span>
              </h1>
              ,
            </span>
            </div>
            <p className="text-[#686868] text-[20px] leading-[30px]  tracking-widest font-mont max-w-[558px] font-normal">
              Discover an easier way to enjoy daily grocery gifts, all from your
              mobile! MR Gift Cart makes it simple to scratch, receive
              giveaways, and redeem exclusive offers.
            </p>

            <div className="     flex items-center lg:justify-start justify-center gap-4 sm:pt-7 pt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.mrgiftsolutionscorp.ca"
                target="_blank"
              >
                <img
                  src="../../Play store.png"
                  alt=""
                  className="sm:w-36 w-28"
                />
              </a>
              <a
                href="https://apps.apple.com/ca/app/mr-gift-cart/id6499106733"
                target="_blank"
              >
                <img src="../../IOS.png" alt="" className="sm:w-36 w-28" />
              </a>
            </div>
            <div className="flex items-center lg:justify-start justify-center gap-4 sm:pt-0 pt-4">
              <Button
                text={"Download App"}
                className={"p-2 px-[25px] py-[11px]  "}
              />
            </div>
          </div>
          <div className="lg:flex-[3] relative lg:py-0 sm:py-10 py-4">
            <img
              src="../../phonepic.png"
              alt=""
              className="max-w-[18.75rem] sm:max-w-[25rem] xl:max-w-[28.5rem]"
            />
            <div className="absolute bg-[#f7e3e3] w-5 h-5 bottom-40 left-72 shadow-[1px_1px_110px_150px_#f7e3e3] -z-10 rounded-full"></div>
          </div>
        </div>
      </header>
            <header className=' xl:px-32 sm:px-16 px-8 drop-shadow-sm pt-20 pb-10 relative'>
                <div className="flex items-center gap-5 flex-col lg:flex-row">
                    <div className="lg:flex-[4] space-y-2 sm:space-y-4 md:space-y-5 lg:text-left text-center">
                        <h3 className="text-[#686868] sm:text-2xl text-xl font-semibold">From Our Hearts to Your Home</h3>
                        <h1 className="text-2xl sm:text-3xl md:text-5xl leading-[1.2] bg-gradient-r inline-block text-transparent bg-clip-text">
                            A Community<span className="font-bold leading-[1.2]"> Grocery Giveaway Across Canada</span>
                        </h1>
                        <h3 className="text-[#686868] text-2xl font-semibold">Daily Basis Grocery Gift </h3>
                        <div className="flex items-center lg:justify-start justify-center gap-4 sm:pt-7 pt-4">
                            <Link to={'get-coupon'}> <button className='flex items-center lg:gap-8 gap-16 hover:scale-105 rounded-full p-2 pl-4 bg-gradient-r hover:bg-gradient-b  transition-all text-white text-lg font-semibold '><span className="">Get Coupon</span> <span className="flex items-center justify-center lg:w-14 lg:h-14 sm:w-10 w-8 sm:h-10 h-8 bg-[#ffffff] rounded-full"><Svg.BtnArrow /></span></button></Link>
                            <button  className='lg:flex items-center gap-6 hidden hover:scale-105 transition-all rounded-full p-2 pr-4 border-2 border-[#F33F41] text-[#F33F41] text-lg tracking-widest'><Svg.PlayBtn className='w-14 h-14' /> <span className="">Watch video</span></button>
                            {/* onClick={() => navigate('/videos')} */}
                        </div>
                    </div>
                    <div className="lg:flex-[3] relative lg:py-0 sm:py-10 py-4">
                        <img src="../../hero_img.png" alt="" className="xl:max-w-[35rem] sm:max-w-[25rem] max-w-[18rem]" />
                        <div className="absolute bg-[#FEC93E57] w-5 h-5 bottom-28 left-20 shadow-[1px_1px_110px_150px_#FEC93E57] -z-10 rounded-full"></div>
                    </div>
                </div>
                <div className="pt-8 xl:pt-0 space-y-5">
                    <div className="flex sm:items-end items-center sm:gap-2 gap-1 lg:justify-start justify-center">
                        <h2 className="font-bold md:text-3xl sm:text-2xl text-xl bg-gradient-r inline-block text-transparent bg-clip-text font-[Montserrat] whitespace-nowrap">“ One year Grocery gift from,</h2><img src="../../text_mr.png" className='md:w-16 sm:w-10 w-8' alt="text" /> <span className="font-bold sm:text-3xl text-2xl bg-gradient-r inline-block text-transparent bg-clip-text font-[Montserrat]">”</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start sm:gap-24 gap-14  ">
                        <div className="relative">
                            {imageUrls.slice(0, 3).map((imageUrl, index) => (
                                <img
                                    key={index}
                                    src={imageUrl}
                                    alt=""
                                    className={`min-w-12 min-h-12 w-12 h-12 rounded-full border-white border-2 object-cover ${index === 1 ? 'absolute top-0 left-1/2' : ''
                                        } ${index === 2 ? 'absolute top-0 left-full' : ''
                                        }`}
                                />
                            ))}
                        </div>
                        <div className="text-[#686868] whitespace-nowrap">
                            <h6 className="">Our Happy Family </h6>
                            <p className="flex items-center"> <span className=""><Svg.Star className='w-4 h-4 mr-1 ' /></span>4.5 <span className='text-[#F33F41] pl-1'>{" "}  ( 6.7 Review) </span></p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 lg:flex-row flex-col lg:justify-start justify-center">
                        <div className="flex items-center gap-4">
                            <img src="../../Play store.png" alt="" className='sm:w-36 w-28' />
                            <img src="../../IOS.png" alt="" className='sm:w-36 w-28' />
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center flex-col rounded-full w-16 h-16 border-[#686868] border text-[#686868]">
                                <h3 className="font-extrabold text-2xl leading-6">{hours}</h3>
                                <h3 className="text-xs">Hours</h3>
                            </div>
                            <div className="flex items-center justify-center flex-col rounded-full w-16 h-16 border-[#686868] border text-[#686868]">
                                <h3 className="font-extrabold text-2xl leading-6">{minutes}</h3>
                                <h3 className="text-xs">Minutes</h3>
                            </div>
                            <div className="flex items-center justify-center flex-col rounded-full w-16 h-16 border-[#686868] border text-[#686868]">
                                <h3 className="font-extrabold text-2xl leading-6">{seconds}</h3>
                                <h3 className="text-xs">Seconds</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" hidden absolute left-5 sm:flex items-center gap-4 flex-col justify-center top-1/2 -translate-y-full">
                    <span className="w-[2px] h-20 bg-[#D2BC81]"></span><a href="https://www.instagram.com/mrcorp.ca/" target="_blank"><Svg.InstagramGold className="hover:scale-110 cursor-pointer" /></a> <a href="https://www.facebook.com/mrcorp.ca" target="_blank"><Svg.FacebookGold className="hover:scale-110 cursor-pointer" /></a> <a href="https://www.youtube.com/@MRCorp" target="_blank"><Svg.YoutubeGold className="hover:scale-110 cursor-pointer" /></a> <a href="https://www.tiktok.com/@mrcorp_" target="_blank"><Svg.TicktokGold className="hover:scale-110 cursor-pointer" /></a><span className="w-[2px] h-20 bg-[#D2BC81]"></span></div>
            </header>
            <div className="xl:px-32 sm:px-16 px-8 py-3 bg-[#F6F6F6] my-2 whitespace-nowrap">
                <marquee>
                    <div className="flex items-center justify-start gap-20  w-full">
                        <h3 className="text-xl font-medium text-[#45A843]">Jack Smith just bought  2 coupons(AB)</h3>
                        <span className=""><Svg.Star className='' /></span>
                        <h3 className="text-xl font-medium text-[#45A843]">Lara Ben just bought 3 coupons(CC)</h3>
                    </div>

                </marquee>
            </div>
           
            <section className='lg:py-20 py-10 xl:px-32 sm:px-16 flex items-stretch lg:gap-3 gap-10 justify-between lg:flex-row flex-col'>
                <div className="flex-1 lg:space-y-10 space-y-5 text-left md:px-10 sm:px-0 lg:px-0 px-8">
                    <img src="../../Congratulations.png" alt="" className="w-96" />
                    <div className="border-l-4 border-black">
                        <h2 className="lg:text-[2.5rem] sm:text-[2rem] text-[1.5rem] tracking-wider leading-[1.3] font-light pl-3"><span className="font-bold">
                            DailyDeals
                        </span>
                            Where <br className='lg:block hidden' />
                            Dreams Come <span className='font-semibold bg-gradient-r inline-block text-transparent bg-clip-text'>True and</span><br className='lg:block hidden' /> <span className='text-[#BC8436] font-semibold'>Luckiest Emerge Daily!"</span></h2>
                    </div>
                    <p className="">"🎉<span className="font-semibold">Jack Smith Shines!</span>🌟
                        Secures a Year's Supply of Groceries with DailyDeals. Dive into the joy of <span className='font-semibold'>luckiest</span> as we unravel Jack's story and reveal the daily impact of DailyDeals on their life!</p>
                    <div className="flex items-stretch lg:justify-start justify-center gap-4">
                        <Button text={'Check all Results'} className={'px-5 p-2'}  />
                        {/* handleClick={() => navigate("/dashboard/luckiest")} */}
                        <button  className='lg:flex items-center gap-4 hidden rounded-full p-2 pr-4 border-2 border-[#F33F41] text-[#F33F41] text-lg tracking-widest'><img src="../../btn_paly.svg" alt="" className='w-10 h-10' /> <span className="">Watch video</span></button>
                        {/* onClick={() => navigate("/dashboard/testimonials")} */}
                    </div>
                </div>
                <div className="relative flex-1 bg-no-repeat bg-contain lg:bg-left bg-center sm:min-h-[28.125rem] min-h-[20.125rem]" style={{ backgroundImage: 'url(./backgrond_winners.png)' }}>
                    <div className="flex items-center gap-3 absolute lg:left-[50%] left-[60%] w-fit z-10  px-4 py-2 rounded-xl bg-[#f8f8f85b] border-[#0003] sm:text-xl text-sm top-[15%] shadow-2xl"><span className="">Richard</span>🎉 </div>
                    <div className="flex items-center text-center justify-end flex-col text-sm gap-1 sm:scale-100 scale-75 absolute lg:left-0 md:left-[15%] left-[7%] w-28 h-40 rounded-xl  z-10  p-2 bg-[#f9f9f9] lg:bottom-[15%] sm:bottom-[10%] bottom-0" style={{ clipPath: 'polygon(0 14%, 100% 0%, 100% 100%, 0 100%)' }} >
                        <img src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="w-10 h-10 rounded-full object-cover drop-shadow-2xl" />
                        <h6 className="text-[#3B3B3B] text-xs">Fresh fruit</h6>
                        <hr className="w-1/4 border-b-[#F33F41] border-b-2" />
                        <h4 className="font-bold text-sm">$55.00</h4>
                        <p className="text-[#949494] text-[10px]">Free Shopping</p>
                    </div>
                    <div className="flex xs:items-center justify-end flex-col xs:flex-row  text-sm xs:gap-3 pr-3 absolute shadow-xl rounded-xl  w-fit lg:left-[50%] left-[60%] z-10  p-2 bg-[#ffffff] bottom-1/4">
                        <img src="../../message.png" alt="" className="sm:w-10 sm:h-10 xs:w-6 xs:h-6 w-5 h-5 object-contain drop-shadow-2xl" />
                        <div className="">
                            <div className="relative bg-white rounded-full shadow-xl hidden xs:block">
                                {imageUrls.map((imageUrl, index) => (
                                    <img
                                        key={index} // Important for performance and accessibility
                                        src={imageUrl}
                                        alt="Profile Picture"
                                        className={`sm:min-w-9 min-w-6 sm:min-h-9 min-h-6 sm:w-9 w-6 sm:h-9 h-6 object-cover rounded-full border-white border-2 ${index == 0 ? '' : 'absolute top-0 '}`}
                                        style={{ left: (index * 15) + '%' }}
                                    />
                                ))}
                            </div>
                            <p className="flex items-center sm:pl-3"> <span className=""><img src="../../star.svg" className='min-w-2 min-h-2 w-4 h-4 mr-1 ' alt="" /></span><span className='text-[#F33F41] pl-1 text-nowrap'>120 messages</span></p>
                        </div>
                    </div>
                    <img src="user_img.png" alt="" className="sm:w-[20rem] w-[15rem] h-[15rem] sm:h-[20rem] rounded-b-full lg:left-0 left-1/2 lg:top-0 -top-[1.875rem] lg:translate-x-0 -translate-x-[60%] object-contain absolute " />
                </div>
            </section>
            <section className="flex items-center flex-col">
                <div className="flex items-center justify-between xl:px-32 sm:px-16 px-8 w-full">
                    <h3 className="text-2xl sm:text-3xl md:text-5xl bg-gradient-r inline-block text-transparent bg-clip-text">More <span className='font-bold'>winners</span></h3>
                    <Button text={'View All'} className={'px-11 p-2'}  />
                    {/* handleClick={() => navigate("/dashboard/luckiest")} */}
                </div>
                <div className="overflow-x-hidden w-full px-[5vw]">
                    <Swiper
                        loop={true}

                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },

                            768: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },

                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 0,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 0,
                            }
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                                <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                                        <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                            <img src="../../line_polygon.png" alt="" className="w-full h-full object-contain" />
                                            <img src="../../users/user01.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                        </div>
                                        <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                            <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                            <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                            <Button text={'View details'}  className={'!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm'} />
                                            {/* handleClick={() => navigate("/dashboard/luckiest")} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                                <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                                        <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                            <img src="../../line_polygon.png" alt="" className="w-full h-full object-contain" />
                                            <img src="../../users/user02.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                        </div>
                                        <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                            <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                            <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                            <Button text={'View details'}  className={'!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm'} />
                                            {/* handleClick={() => navigate("/dashboard/luckiest")} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                                <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                                        <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                            <img src="../../line_polygon.png" alt="" className="w-full h-full object-contain" />
                                            <img src="../../users/user03.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                        </div>
                                        <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                            <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                            <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                            <Button text={'View details'}  className={'!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm'} />
                                            {/* handleClick={() => navigate("/dashboard/luckiest")} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                                <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                                        <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                            <img src="../../line_polygon.png" alt="" className="w-full h-full object-contain" />
                                            <img src="../../users/user04.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                        </div>
                                        <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                            <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                            <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                            <Button text={'View details'}  className={'!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm'} />
                                            {/* handleClick={() => navigate("/dashboard/luckiest")} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                                <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                                        <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                            <img src="../../line_polygon.png" alt="" className="w-full h-full object-contain" />
                                            <img src="../../users/user05.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                        </div>
                                        <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                            <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                            <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                            <Button text={'View details'}  className={'!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm'} />
                                            {/* handleClick={() => navigate("/dashboard/luckiest")} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                                <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                                        <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                            <img src="../../line_polygon.png" alt="" className="w-full h-full object-contain" />
                                            <img src="../../users/user06.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                        </div>
                                        <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                            <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                            <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                            <Button text={'View details'}  className={'!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm'} />
                                            {/* handleClick={() => navigate("/dashboard/luckiest")} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                                <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                                        <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                            <img src="../../line_polygon.png" alt="" className="w-full h-full object-contain" />
                                            <img src="../../users/user07.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                        </div>
                                        <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                            <h3 className="text-[#F33F41] font-semibold text-xl">WINNER🎉</h3>
                                            <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                            <Button text={'View details'}  className={'!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm'} />
                                            {/* handleClick={() => navigate("/dashboard/luckiest")} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=" w-[90vw] sm:w-[45vw] md:w-[30vw]  lg:w-[22.5vw] xl:w-[18vw] flex items-center justify-center min-h-64 ">
                                <div className="flex items-center justify-center cursor-pointer transition-all rounded-full">
                                    <div className="border-[#F33F41] group border rounded-[10px] cursor-pointer relative w-52 hover:scale-110 h-60 hover:h-64 p-1 transition-all">
                                        <div className="h-[60%] w-full relative overflow-hidden flex justify-center">
                                            <img src="../../line_polygon.png" alt="" className="w-full h-full object-contain" />
                                            <img src="../../users/user04.png" alt="" className="w-[90%] h-[90%] top-0 object-contain absolute rounded-b-full" />
                                        </div>
                                        <div className="bg-[#ffffffe1] shadow-xl max-h-[5.625rem] absolute top-[50%] rounded-xl w-[95%] left-1/2 -translate-x-1/2 p-2 text-center space-y-2">
                                            <h3 className="text-[#F33F41] font-semibold text-xl">WINNER 🎉</h3>
                                            <div className="font-semibold text-gray-500 flex items-center gap-2 justify-center"><span className="text-xs">Draw date</span> <span className="text-gray-600 font-medium text-sm">10-28-2023</span></div>
                                            <Button text={'View details'}  className={'!rounded-lg px-5 p-2 group-hover:!rounded-full !text-sm'} />
                                            {/* handleClick={() => navigate("/dashboard/luckiest")} */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <Zaika/>
            <section className="Social_media_section lg:pt-20 pb-10 flex items-center flex-col">
                <h2 className="text-2xl xl:px-32 sm:px-16 px-8 sm:text-3xl md:text-5xl bg-gradient-r inline-block text-transparent bg-clip-text text-center">Join our <span className="font-bold">Social media accounts</span></h2>
                <div className="overflow-x-hidden w-full px-[31px] sm:px-[4vw]">
                    <Swiper
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        loop={true}


                        breakpoints={{
                            0: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },

                            640: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            },

                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 0,
                            }
                        }}
                        className="mySwiper"
                    >
                        {socialMediaAccounts.map((account, index) => (
                            <SwiperSlide key={index}>
                              <div className="w-[84vw]  sm:w-[45vw] flex items-center justify-center lg:w-[25vw] sm:mx-4 ">
                                <div className=" w-12/12">
                                        <div className="rounded-[3rem]  px-3 py-12 w-full space-y-3 drop-shadow-xl bg-white border-gray-200 border flex items-center justify-between flex-col">
                                            {account.icon}
                                            <div className="text-center space-y-3">
                                                <h3 className="text-2xl font-semibold text-gray-800">{account.name}</h3>
                                                <p className="">{account.followers} followers</p>
                                                <p className="">{account.description}</p>
                                            </div>
                                            <a href={account.url} target='_blank' rel="noopener noreferrer">
                                                <Button text={'Follow'} className={'p-2 px-10'} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

           
           <Footer/>
        </div>
    )
}

export default Home