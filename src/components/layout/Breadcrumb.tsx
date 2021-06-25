import React from 'react';
import {
  Breadcrumb as FBreadcrumb,
  IBreadcrumbItem,
  IDividerAsProps,
} from '@fluentui/react/lib/Breadcrumb';
import {Label, ILabelStyles} from '@fluentui/react/lib/Label';
import {TooltipHost} from '@fluentui/react/lib/Tooltip';
import {Icon} from '@fluentui/react/lib/Icon';

const items: IBreadcrumbItem[] = [
  {text: 'Files', key: 'Files', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 1', key: 'f1', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 2', key: 'f2', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 3', key: 'f3', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 4 (non-clickable)', key: 'f4'},
  {text: 'Folder 5', key: 'f5', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 6', key: 'f6', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 7', key: 'f7', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 8', key: 'f8', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 9', key: 'f9', onClick: _onBreadcrumbItemClicked},
  {text: 'Folder 10', key: 'f10', onClick: _onBreadcrumbItemClicked},
  {
    text: 'Folder 11',
    key: 'f11',
    onClick: _onBreadcrumbItemClicked,
    isCurrentItem: true,
  },
];

function _onBreadcrumbItemClicked(
  ev?: React.MouseEvent<HTMLElement, MouseEvent> | undefined,
  item?: IBreadcrumbItem | undefined
): void {
  console.log(`Breadcrumb item with key "${item?.key}" has been clicked.`);
}

function _getCustomDivider(dividerProps: IDividerAsProps): JSX.Element {
  const tooltipText = dividerProps.item ? dividerProps.item.text : '';
  return (
    <TooltipHost
      content={`Show ${tooltipText} contents`}
      calloutProps={{gapSpace: 0}}
    >
      <span aria-hidden="true" style={{cursor: 'pointer', padding: 5}}>
        /
      </span>
    </TooltipHost>
  );
}

const labelStyles: Partial<ILabelStyles> = {
  root: {margin: '10px 0', selectors: {'&:not(:first-child)': {marginTop: 24}}},
};

function _getCustomOverflowIcon(): JSX.Element {
  return <Icon iconName={'ChevronDown'} />;
}

function Breadcrumb() {
  return (
    <FBreadcrumb
      items={items}
      maxDisplayedItems={10}
      ariaLabel="Breadcrumb with items rendered as buttons"
      overflowAriaLabel="More links"
      className="my-1"
    />
  );
}

export default Breadcrumb;
