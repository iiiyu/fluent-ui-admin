import React, {useState} from 'react';

import {
  DefaultButton,
  PrimaryButton,
  CompoundButton,
  CommandBarButton,
  ActionButton,
  IconButton,
  CommandButton,
} from '@fluentui/react/lib/Button';

import {Toggle} from '@fluentui/react/lib/Toggle';
import {
  IIconProps,
  IContextualMenuProps,
  IButtonStyles,
  HighContrastSelector,
  ContextualMenu,
} from '@fluentui/react';
import ContentBasicLayout from './ContentBasicLayout';

function ButtonContent() {
  // icons
  const volume0Icon: IIconProps = {iconName: 'Volume0'};
  const volume3Icon: IIconProps = {iconName: 'Volume3'};
  const addFriendIcon: IIconProps = {iconName: 'AddFriend'};
  const emojiIcon: IIconProps = {iconName: 'Emoji2'};
  const addIcon: IIconProps = {iconName: 'Add'};
  const mailIcon: IIconProps = {iconName: 'Mail'};

  // menus
  const menuProps: IContextualMenuProps = {
    // For example: disable dismiss if shift key is held down while dismissing
    onDismiss: ev => {
      if (ev && 'shiftKey' in ev) {
        ev.preventDefault();
      }
    },
    items: [
      {
        key: 'emailMessage',
        text: 'Email message',
        iconProps: {iconName: 'Mail'},
      },
      {
        key: 'calendarEvent',
        text: 'Calendar event',
        iconProps: {iconName: 'Calendar'},
      },
    ],
    directionalHintFixed: true,
  };

  const customSplitButtonStyles: IButtonStyles = {
    splitButtonMenuButton: {
      backgroundColor: 'white',
      width: 28,
      border: 'none',
    },
    splitButtonMenuIcon: {fontSize: '7px'},
    splitButtonDivider: {
      backgroundColor: '#c8c8c8',
      width: 1,
      right: 26,
      position: 'absolute',
      top: 4,
      bottom: 4,
    },
    splitButtonContainer: {
      selectors: {
        [HighContrastSelector]: {border: 'none'},
      },
    },
  };

  const [disabled, setDisabled] = useState<boolean | undefined>(false);
  const [checked, setChecked] = useState<boolean | undefined>(false);
  const [muted, setMuted] = useState(false);

  const _alertClicked = () => {
    alert('Clicked');
  };

  const _onChangeDisabledButton = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    checked?: boolean | undefined
  ) => {
    setDisabled(checked);
    console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
  };

  const _onChangeCheckedButton = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    checked?: boolean | undefined
  ) => {
    setChecked(checked);
    console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
  };

  const _onClickVolumeButton = () => {
    setMuted(!muted);
  };

  const _getMenu = (props: IContextualMenuProps): JSX.Element => {
    // Customize contextual menu with menuAs
    return <ContextualMenu {...props} />;
  };

  const _onMenuClick = (ev?: React.SyntheticEvent<any>) => {
    console.log(ev);
  };

  return (
    <ContentBasicLayout
      title="Button"
      url="https://developer.microsoft.com/en-us/fluentui#/controls/web/button"
      documentTitle="Fluent UI Button Document"
    >
      <div className="flex flex-row space-x-4">
        <Toggle
          label="Button Disabled"
          defaultChecked={disabled}
          onText="On"
          offText="Off"
          onChange={_onChangeDisabledButton}
        />

        <Toggle
          label="Button Checked"
          defaultChecked={checked}
          onText="On"
          offText="Off"
          onChange={_onChangeCheckedButton}
        />
      </div>

      <div className="space-x-2">
        <DefaultButton
          text="Standard"
          onClick={_alertClicked}
          allowDisabledFocus
          disabled={disabled}
          checked={checked}
        />
        <PrimaryButton
          text="Primary"
          onClick={_alertClicked}
          allowDisabledFocus
          disabled={disabled}
          checked={checked}
        />
      </div>
      <div className="space-x-2">
        <CompoundButton
          secondaryText="This is the secondary text."
          disabled={disabled}
          checked={checked}
        >
          Standard
        </CompoundButton>
        <CompoundButton
          primary
          secondaryText="This is the secondary text."
          disabled={disabled}
          checked={checked}
        >
          Primary
        </CompoundButton>
      </div>

      <div className="space-x-2 flex items-center">
        <DefaultButton
          href="https://google.com"
          target="_blank"
          title="let us google!"
          disabled={disabled}
          checked={checked}
        >
          Google
        </DefaultButton>
        <DefaultButton
          toggle
          checked={muted || checked}
          text={muted ? 'Volume muted' : 'Volume unmuted'}
          iconProps={muted ? volume0Icon : volume3Icon}
          onClick={_onClickVolumeButton}
          allowDisabledFocus
          disabled={disabled}
        />
        <ActionButton
          iconProps={addFriendIcon}
          allowDisabledFocus
          disabled={disabled}
          checked={checked}
        >
          Create account
        </ActionButton>
        <CommandBarButton
          className="py-3 px-2"
          iconProps={mailIcon}
          text="Send mail"
          disabled={disabled}
          checked={checked}
        />
        <IconButton
          iconProps={emojiIcon}
          title="Emoji"
          ariaLabel="Emoji"
          disabled={disabled}
          checked={checked}
        />
      </div>

      <div className="space-x-2 flex items-center">
        <DefaultButton
          text="Standard"
          split
          splitButtonAriaLabel="See 2 options"
          aria-roledescription="split button"
          menuProps={menuProps}
          onClick={_alertClicked}
          disabled={disabled}
          checked={checked}
        />
        <DefaultButton
          text="Primary"
          primary
          split
          splitButtonAriaLabel="See 2 options"
          aria-roledescription="split button"
          menuProps={menuProps}
          onClick={_alertClicked}
          disabled={disabled}
          checked={checked}
        />
        <DefaultButton
          text="Main action disabled"
          primaryDisabled
          split
          splitButtonAriaLabel="See 2 options"
          aria-roledescription="split button"
          menuProps={menuProps}
          onClick={_alertClicked}
          disabled={disabled}
          checked={checked}
        />
        <DefaultButton
          text="Disabled"
          disabled
          split
          splitButtonAriaLabel="See 2 options"
          aria-roledescription="split button"
          menuProps={menuProps}
          onClick={_alertClicked}
          checked={checked}
        />
      </div>

      <div className="space-x-2 flex items-center">
        <DefaultButton
          text="New item"
          iconProps={addIcon}
          menuProps={menuProps}
          // Optional callback to customize menu rendering
          menuAs={_getMenu}
          // Optional callback to do other actions (besides opening the menu) on click
          onMenuClick={_onMenuClick}
          // By default, the ContextualMenu is re-created each time it's shown and destroyed when closed.
          // Uncomment the next line to hide the ContextualMenu but persist it in the DOM instead.
          // persistMenu={true}
          allowDisabledFocus
          disabled={disabled}
          checked={checked}
        />
        <CommandButton
          iconProps={addIcon}
          text="New item"
          menuProps={menuProps}
          disabled={disabled}
          checked={checked}
        />
        <IconButton
          menuProps={menuProps}
          iconProps={emojiIcon}
          title="Emoji"
          ariaLabel="Emoji"
          disabled={disabled}
          checked={checked}
        />
        <IconButton
          split
          iconProps={addIcon}
          splitButtonAriaLabel="See 2 options"
          aria-roledescription="split button"
          styles={customSplitButtonStyles}
          menuProps={menuProps}
          ariaLabel="New item"
          onClick={_alertClicked}
          disabled={disabled}
          checked={checked}
        />
      </div>
    </ContentBasicLayout>
  );
}

export default ButtonContent;
