import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import Button from './Button';
import Svg from './Svg';
import { useLocation } from 'react-router-dom';
const Navbar = () => {
    const  verification  = false

    const navigate = useNavigate()
    const location = useLocation();
    const [openTopMenu, setopenTopMenu] = useState(false)
    const [dropdown, setDropdown] = useState(null); // null, 'language', 'notification'
    const languageListRef = useRef(null);
    const notificationRef = useRef(null);

    const toggleLanguageList = () => {
        setDropdown(dropdown === 'language' ? null : 'language');
    };

    const handleNotification = () => {
        navigate("notifications")
        setDropdown(null)
    }

    const toggleNotificationList = () => {
        setDropdown(dropdown === 'notification' ? null : 'notification');
    };

    const handleClickOutside = (event) => {
        if (dropdown === 'language' && languageListRef.current && !languageListRef.current.contains(event.target)) {
            setDropdown(null);
        }
        if (dropdown === 'notification' && notificationRef.current && !notificationRef.current.contains(event.target)) {
            setDropdown(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdown]);

    const notifications = [
        { id: 1, message: "4 Slots added", subMessage: "4 slots added into BC(Province)", time: "2 mins ago" },
        { id: 2, message: "4 Slots added", subMessage: "4 slots added into BC(Province)", time: "2 mins ago" },
        { id: 3, message: "4 Slots added", subMessage: "4 slots added into BC(Province)", time: "2 mins ago" },
        { id: 4, message: "4 Slots added", subMessage: "4 slots added into BC(Province)", time: "2 mins ago" },
    ];


    return (
        <div className="relative pb-3">
            <div className='flex items-center justify-between xl:px-32 sm:px-16 px-8'>
                <NavLink to="/">
                    <img src='../../../logo.gif' alt="img" className='lg:w-[8.375rem] w-[6rem] cursor-pointer' />
                </NavLink>
                <div className="lg:flex items-center gap-5 hidden ">
                    <NavLink to="/">
                        <p className={`text-[rgba(104, 104, 104, 1)] text-xl group flex items-center justify-center flex-col cursor-pointer ${location.pathname === '/' ? 'text-[#EE0003] font-semibold' : ''}`}><span className='group-hover:text-[#EE0003]'>Home</span>
                            <span className={`w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100  ${location.pathname === '/' ? 'opacity-100' : ''}`}></span>
                        </p>
                    </NavLink>
                    <NavLink to="/about">
                        <p className="text-xl flex items-center justify-center flex-col group"><span className={`group-hover:text-[#EE0003] cursor-pointer ${location.pathname === '/about' ? 'text-[#EE0003] font-semibold' : ''}`}>About</span> <span className={`w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100  ${location.pathname === '/about' ? 'opacity-100' : ''}`}></span></p>
                    </NavLink>
                    <NavLink to="/results">
                        <p className="text-[rgba(104, 104, 104, 1)] text-xl flex items-center justify-center flex-col group"><span className={`group-hover:text-[#EE0003] cursor-pointer ${location.pathname === '/results' ? 'text-[#EE0003] font-semibold' : ''}`}>Results</span><span className={`w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100  ${location.pathname === '/results' ? 'opacity-100' : ''}`}></span></p>
                    </NavLink>
                    <NavLink to="/partners">
                        <p className="text-[rgba(104, 104, 104, 1)] text-xl flex items-center justify-center flex-col group"><span className={`group-hover:text-[#EE0003] cursor-pointer ${location.pathname === '/partners' ? 'text-[#EE0003] font-semibold' : ''}`}>Partners</span><span className={`w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100  ${location.pathname === '/partners' ? 'opacity-100' : ''}`}></span></p>
                    </NavLink>
                    <NavLink to="/contacts">
                        <p className="text-[rgba(104, 104, 104, 1)] text-xl flex items-center justify-center flex-col group"><span className={`group-hover:text-[#EE0003] cursor-pointer ${location.pathname === '/contacts' ? 'text-[#EE0003] font-semibold' : ''}`}>Contacts</span><span className={`w-2 h-2 rounded-full bg-[#EE0003] opacity-0 group-hover:opacity-100  ${location.pathname === '/contacts' ? 'opacity-100' : ''}`}></span></p>
                    </NavLink>
                </div>
                <div className="lg:flex items-center gap-5 hidden z-10">
                    <span className="relative" onClick={toggleLanguageList}>
                        {dropdown === 'language' ?
                            <Svg.LanguageColor className={'fill-[#F33F41] '} fill={'#F33F41'} /> :
                            <Svg.Language className={'fill-[#F33F41] '} fill={'#F33F41'} />
                        }
                        {dropdown === 'language' && (
                            <div ref={languageListRef} className="absolute mt-2 bg-white -right-20 border rounded-lg shadow-xl">
                                <ul className="w-44  text-center">
                                    <li className="cursor-pointer p-2 hover:bg-btn-gradient hover:text-white">English</li>
                                    <li className="cursor-pointer p-2 hover:bg-btn-gradient hover:text-white">Espanol</li>
                                    <li className="cursor-pointer p-2 hover:bg-btn-gradient hover:text-white">Francais</li>
                                    <li className="cursor-pointer p-2 hover:bg-btn-gradient hover:text-white">Punjabi</li>
                                    <li className="cursor-pointer p-2 hover:bg-btn-gradient hover:text-white">Italiano</li>
                                    <li className="cursor-pointer p-2 hover:bg-btn-gradient hover:text-white">Deutsch</li>
                                    <li className="cursor-pointer p-2 hover:bg-btn-gradient hover:text-white">Tagalog</li>
                                    <li className="cursor-pointer p-2 hover:bg-btn-gradient hover:text-white">Chinese</li>
                                </ul>
                            </div>
                        )}
                    </span>
                    <div onClick={() => navigate('/dashboard/wallet')}>
                        <Svg.Wallet className='cursor-pointer' />
                    </div>

                    {verification ? (
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSREDjXSwEXU79Fsy0tmAffRPHhwz3fNHSelQ&usqp=CAU" alt="" className="w-10 h-10 object-cover rounded-full" onClick={() => navigate('/dashboard/profile')} />
                    ) : (
                        <NavLink to="/login">
                            <Button text={'Login'} className={' px-8 py-2 !font-medium !text-base'} />
                        </NavLink>
                    )}
                    <div className="relative" ref={notificationRef}>
                        <div
                            className="rounded-full w-9 h-9 justify-center flex items-center bg-btn-gradient hover:bg-gradient-r cursor-pointer"
                            onClick={toggleNotificationList}
                        >
                            <Svg.NotificationIcon />
                        </div>
                        {dropdown === 'notification' && (
                            <div className="absolute mt-2 bg-white border rounded shadow-xl right-0 w-80 z-10 p-5">
                                <h2 className='text-base font-semibold text-[#333333]'>Notifications</h2>
                                {notifications.map(notification => (
                                    <div key={notification.id} className="border-b last:border-0 py-2 cursor-pointer" onClick={handleNotification}>
                                        <h3 className="text-sm font-normal">{notification.message}</h3>
                                        <div className='flex justify-between items-center'>
                                            <p className="text-xs text-gray-500">{notification.subMessage}</p>
                                            <p className="text-xs text-gray-400">{notification.time}</p>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* <img src="../..//nav_img.png" alt="img" className='cursor-pointer' onClick={() => navigate("/get-coupon")} /> */}
                </div>
                <img src="../../hambar.svg" className='lg:hidden block cursor-pointer' alt="hambar" onClick={() => {
                    setopenTopMenu(!openTopMenu)
                }} />
            </div>
            <div className={`absolute w-full bg-white z-[9999] ${openTopMenu ? 'top-0' : '-top-[1000px]'}`}>
                <div className='flex items-center justify-between xl:px-32 sm:px-16 px-8 pb-5 border-b'>
                    <NavLink to="/">
                        <img src='../../nav_logo.png' alt="img" className='lg:w-[8.375rem] w-[6rem] cursor-pointer' />
                    </NavLink>

                    <img src="../../cross.svg" className='cursor-pointer' alt="cross" onClick={() => setopenTopMenu(!openTopMenu)} />
                </div>
                <div className="flex items-center justify-center flex-col gap-8 p-8">
                    <NavLink onClick={() => setopenTopMenu(!openTopMenu)} to="/">
                        <span className='text-[#EE0003] cursor-pointer font-semibold text-xl'>Home</span>
                    </NavLink>
                    <NavLink onClick={() => setopenTopMenu(!openTopMenu)} to="/about">
                        <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>About</span>
                    </NavLink>
                    <NavLink onClick={() => setopenTopMenu(!openTopMenu)} to="/results">
                        <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Results</span>
                    </NavLink>
                    <NavLink onClick={() => setopenTopMenu(!openTopMenu)} to="/partners">
                        <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Partners</span>
                    </NavLink>
                    <NavLink onClick={() => setopenTopMenu(!openTopMenu)} to="/contacts">
                        <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Contacts</span>
                    </NavLink>
                    <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Language</span>
                    <NavLink onClick={() => setopenTopMenu(!openTopMenu)} to="/login">
                        <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Login</span>
                    </NavLink>
                    <span className='text-[#686868] hover:text-[#EE0003] cursor-pointer font-semibold text-xl'>Coupons</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar