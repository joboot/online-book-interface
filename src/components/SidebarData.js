import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
{
	title: "Home",
	path: "/home",
	icon: <AiIcons.AiFillHome />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
},
{
	title: "Textbook",
	path: "/book/title",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Intro",
		path: "/book/intro",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Chapter 1",
		path: "/book/chapter1p1",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Chapter 2",
		path: "/book/chapter2p1",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
/*
{
	title: "Contact",
	path: "/contact",
	icon: <FaIcons.FaPhone />,
},
*/
{
	title: "Events",
	path: "/events",
	icon: <FaIcons.FaEnvelopeOpenText />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Event 1",
		path: "/events/events1",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Event 2",
		path: "/events/events2",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
{
	title: "Support",
	path: "/support",
	icon: <IoIcons.IoMdHelpCircle />,
},
];
