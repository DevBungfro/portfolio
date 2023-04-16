// Import images
import Image1 from '../images/egghatchimage1.png';
import Image2 from '../images/adminpanelimage1.png';

// Import icons
import {
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const data = {
    1: {
        ProjectHeader: {
            title: 'Pet System/Egg System',
            publishDate: 'April 12, 2023',
            tags: 'Scripting',
        },
        ProjectImages: [
            {
                id: 1,
                title: 'Thumbnail Image',
                img: Image1,
            },
        ],
        ProjectInfo: {
            ClientHeading: '',
            CompanyInfo: [
            
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails:
                'Egg System that looks identical to Pet Simulator X that has walking and flying animations.',
            Technologies: [
                {
                    title: 'Tools Used',
                    techs: [
                        'Luau',
                        'Roblox Studio',
                        'VS Code'
                    ],
                },
            ],
            ProjectDetailsHeading: 'Description',
            ProjectDetails: [
                {
                    id: 1,
                    details:
                        "Introducing my latest pet system, which has been designed with the same look and feel as Pet Simulator X's system. When you approach the egg, the pet UI appears, allowing you to hatch a pet, single or triple. The system is fully customizable, allowing you to modify everything from the pet's appearance to its abilities and behaviors.",
                },
                {
                    id: 2,
                    details:
                        'The system is also modular, meaning that it is designed to be easily expanded and modified. Whether you want to add new pets or new abilities, the system can be easily extended to accommodate your needs. This makes it a flexible solution that can be adapted to suit any project or game.',
                },
                {
                    id: 3,
                    details:
                        "Overall, this pet system is a fantastic addition to any game or project that requires pets or companions. With its smooth animations, modular design, and customization options, it's a versatile solution that can be tailored to suit any need. Whether you're creating a game about pets or just want to add some extra companionship to your project, this pet system is the perfect choice.",
                },
            ],
            SocialSharingHeading: 'Videos',
            SocialSharing: [
                {
                    id: 1,
                    name: 'Youtube',
                    icon: <FiYoutube />,
                    url: 'https://www.youtube.com/watch?v=qHR_mdh-5mA',
                },
            ],
        },
        RelatedProject: {
            title: '',
            Projects: [
                
            ],
        },
    },
    2: {
        ProjectHeader: {
            title: 'Admin Panel (UI Not By Me)',
            publishDate: 'April 12, 2023',
            tags: 'Scripting',
        },
        ProjectImages: [
            {
                id: 1,
                title: 'Thumbnail Image',
                img: Image2,
            },
        ],
        ProjectInfo: {
            ClientHeading: '',
            CompanyInfo: [
            
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails:
                'Admin Panel that has kick, ban, mute, unmute and teleport.',
            Technologies: [
                {
                    title: 'Tools Used',
                    techs: [
                        'Luau',
                        'Roblox Studio',
                        'VS Code'
                    ],
                },
            ],
            ProjectDetailsHeading: 'Description',
            ProjectDetails: [
                {
                    id: 1,
                    details:
                        "Introducing my Roblox Admin Panel, a toolset designed to make game management easy and efficient. This streamlined panel includes five essential tools for moderating gameplay: Ban, Kick, Mute, Unmute, and Teleport. With these tools at your fingertips, managing gameplay is quick and simple, leaving you free to focus on the overall player experience.",
                },
                {
                    id: 2,
                    details:
                        "The Admin Panel is designed with simplicity in mind, ensuring that even novice game administrators can easily use the tools. Its straightforward layout and intuitive interface make it easy to navigate, giving you the ability to manage your Roblox game with confidence. So whether you're running a small game with a few players or a larger event with hundreds of participants, this Admin Panel has everything you need to moderate your gameplay and create an enjoyable experience for all.",
                },
            ],
            SocialSharingHeading: 'Videos',
            SocialSharing: [
                {
                    id: 1,
                    name: 'Youtube',
                    icon: <FiYoutube />,
                    url: 'https://youtu.be/j7M_HC4dN9c',
                },
            ],
        },
        RelatedProject: {
            title: '',
            Projects: [
                
            ],
        },
    },
};