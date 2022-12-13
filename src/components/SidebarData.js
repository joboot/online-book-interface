import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { useNavigate } from "react-router-dom";

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
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Title",
		path: "/title",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
		
	{
		title: "Intro",
		path: "/intro",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	{
		title: "Chapter 1: Hello World",
		path: "/chapter1p1",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
		cName: "sub-nav",

		subNav: [
			{
				title: "Being able to code",
				path: "/chapter1p1",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "\"Hello World\"",
				path: "/chapter1p2",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			}
		]
	},
	{
		title: "Chapter 2: Tips and Tricks",
		path: "/chapter2p1",
		icon: <IoIcons.IoIosPaper />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		subNav: [
			{
				title: "Rubber Duck Technique",
				path: "/chapter1p1",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			},
			{
				title: "Semicolons and Other Problems",
				path: "/chapter1p2",
				icon: <IoIcons.IoIosPaper />,
				cName: "sub-nav",
			}
		]
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
/*
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
*/
{
	title: "Support",
	path: "/SupportPage",
	icon: <IoIcons.IoMdHelpCircle />,
},
];
