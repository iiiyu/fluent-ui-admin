import React from 'react';
import {Nav, INavStyles, INavLinkGroup} from '@fluentui/react/lib/Nav';

// adding an empty title string to each link removes the tooltip;
// it's unnecessary now that the text wraps, and will not truncat;
const navLinkGroups: INavLinkGroup[] = [
  {
    name: 'Dashboard',
    links: [
      {
        key: 'Home',
        name: 'Home',
        url: '/dashboard',
      },
    ],
  },
  {
    name: 'Basic components',
    expandAriaLabel: 'Expand Basic components section',
    collapseAriaLabel: 'Collapse Basic components section',
    links: [
      {
        key: 'Button',
        name: 'Button',
        url: '/ui/button',
      },
      {
        key: 'Checkbox',
        name: 'Checkbox',
        url: '/ui/checkbox',
      },
      {
        key: 'Breadcrumb',
        name: 'Breadcrumb',
        url: '#/examples/breadcrumb',
      },
      {
        key: 'Button',
        name: 'Button',
        url: '#/examples/button',
      },
      {
        name: 'Home',
        url: 'http://example.com',
        expandAriaLabel: 'Expand Home section',
        collapseAriaLabel: 'Collapse Home section',
        title: '',
        links: [
          {
            name: 'Activity',
            url: 'http://msn.com',
            key: 'key1',
            target: '_blank',
            title: '',
          },
          {
            name: 'MSN',
            url: 'http://msn.com',
            disabled: true,
            key: 'key2',
            target: '_blank',
            title: '',
          },
        ],
        isExpanded: true,
      },
    ],
  },
  {
    name: 'Icons',
    expandAriaLabel: 'Expand Extended components section',
    collapseAriaLabel: 'Collapse Extended components section',
    links: [
      {
        key: 'ColorPicker',
        name: 'ColorPicker',
        url: '#/examples/colorpicker',
      },
      {
        key: 'ExtendedPeoplePicker',
        name: 'ExtendedPeoplePicker',
        url: '#/examples/extendedpeoplepicker',
      },
      {
        key: 'GroupedList',
        name: 'GroupedList',
        url: '#/examples/groupedlist',
      },
    ],
  },
  {
    name: 'Utilities',
    expandAriaLabel: 'Expand Utilities section',
    collapseAriaLabel: 'Collapse Utilities section',
    links: [
      {
        key: 'FocusTrapZone',
        name: 'FocusTrapZone',
        url: '#/examples/focustrapzone',
      },
      {
        key: 'FocusZone',
        name: 'FocusZone',
        url: '#/examples/focuszone',
      },
      {
        key: 'MarqueeSelection',
        name: 'MarqueeSelection',
        url: '#/examples/marqueeselection',
      },
    ],
  },
];

function SideMenu() {
  return (
    <>
      <Nav
        selectedKey="key6"
        ariaLabel="Nav example with wrapped link text"
        groups={navLinkGroups}
      />
    </>
  );
}

export default SideMenu;
