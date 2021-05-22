import React from 'react';
import {
  IPersonaSharedProps,
  Persona,
  PersonaSize,
  PersonaPresence,
} from '@fluentui/react/lib/Persona';

const examplePersona: IPersonaSharedProps = {
  imageUrl:
    'https://images.pexels.com/photos/2766408/pexels-photo-2766408.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  imageInitials: 'AL',
  text: 'Annie Lindqvist',
  secondaryText: 'Software Engineer',
  tertiaryText: 'In a meeting',
  optionalText: 'Available at 4:00pm',
};

function Header() {
  return (
    <header className="bg-blue-600 w-full py-2 fixed top-0 right-0">
      <div className="px-10 flex justify-between items-center">
        <div className="text-white">Hello Fluent UI Admin Dashboard!</div>
        <Persona
          {...examplePersona}
          text="Annie Lindqvist (Available)"
          size={PersonaSize.size32}
          presence={PersonaPresence.online}
          hidePersonaDetails={true}
          imageAlt="Annie Lindqvist, status is online"
        />
      </div>
    </header>
  );
}

export default Header;
