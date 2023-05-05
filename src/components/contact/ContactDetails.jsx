import { FiTwitter, FiMail } from 'react-icons/fi';
import { BsDiscord } from 'react-icons/bs';

const contacts = [
	{
		id: 1,
		name: 'Bungfro#1519',
		icon: <BsDiscord />,
	},
	{
		id: 2,
		name: 'bungfro@bungfro.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: 'Bungfro_',
		icon: <FiTwitter />,
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full flex flex-wrap justify-center items-center text-center">
  <div className="text-left max-w-xl px-6 mx-auto">
    <h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
      Contact details
    </h2>
    <ul className="font-general-regular">
      {contacts.map((contact) => (
        <li className="flex" key={contact.id}>
          <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
            {contact.icon}
          </i>
          <span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
            {contact.name}
          </span>
        </li>
      ))}
    </ul>
  </div>
</div>

	);
};

export default ContactDetails;
