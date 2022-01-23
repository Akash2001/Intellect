import { RiDashboardFill } from 'react-icons/ri';
import { MdContentCopy, MdMoveToInbox, MdWidgets } from 'react-icons/md';
import { BsBookmarkPlus } from 'react-icons/bs';
import { FiSliders,FiCreditCard } from 'react-icons/fi';

export const optionsData = [
    {
        name: "Dashboard",
        icon: <RiDashboardFill />,
    },
    {
        name: "Sidebar Type",
        icon: <FiSliders />,
    },
    {
        name: "PageLayouts",
        icon: <MdContentCopy />,
    },
    {
        name: "Inbox",
        icon: <MdMoveToInbox />,
    },
    {
        name: "Ticket",
        icon: <BsBookmarkPlus />,
    },
    {
        name: "Extra",
        icon: <MdMoveToInbox />,
    },
    {
        name: "UI Elements",
        icon: <MdWidgets />,
    },
    {
        name: "Cards",
        icon: <FiCreditCard/>,
    },
    {
        name: "Components",
        icon: <FiCreditCard/>,
    },
    {
        name: "Widgets",
        icon: <MdMoveToInbox />,
    },
];