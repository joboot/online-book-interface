import React from "react";
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
	title: "Textbook Intro",
		path: "/intro",
		icon: <IoIcons.IoIosPaper />,
},
{
	title: "Chapter 1: Hello World",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,
	subNav: [
	{
		title: "Languages",
		path: "/chapter1p1",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
		
	{
		title: "\"Hello World\" Program",
		path: "/chapter1p2",
		icon: <IoIcons.IoIosPaper />,
		cName: "sub-nav",
	},
	]
},
{
	title: "Chapter 2: Tips and Tricks",
	icon: <IoIcons.IoIosPaper />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
		{
			title: "Debugging 101",
			path: "/chapter2p1",
			icon: <IoIcons.IoIosPaper />,
			cName: "sub-nav",
		},
		{
			title: "Rubber Duck Technique",
			path: "/chapter2p2",
			icon: <IoIcons.IoIosPaper />,
			cName: "sub-nav",
		}
	]
},
{
	title: "Support",
	path: "/SupportPage",
	icon: <IoIcons.IoMdHelpCircle />,
},
];
