import React from 'react';
import items from './data.json';
import {
  DetailsList,
  ConstrainMode,
  DetailsListLayoutMode,
  SelectionMode,
  mergeStyleSets,
  TooltipHost,
  CheckboxVisibility,DefaultButton, IButtonProps, TeachingBubble, Fabric, initializeIcons
} from '@fluentui/react';
import { useBoolean } from '@uifabric/react-hooks';

const toggleTeachingBubbleVisible = false;
const teachingBubbleVisible = false;
const examplePrimaryButtonProps = {
  children: "Try it out"
};

const TeachingBubbleBasicExample = () => {
  const [teachingBubbleVisible, { toggle: toggleTeachingBubbleVisible }] = useBoolean(false);
  const exampleSecondaryButtonProps = React.useMemo(() => ({
      children: "Maybe later",
      onClick: toggleTeachingBubbleVisible
  }), [toggleTeachingBubbleVisible]);
  return (React.createElement("div", null,
      React.createElement(DefaultButton, { id: "targetButton", onClick: toggleTeachingBubbleVisible, text: teachingBubbleVisible ? "Hide TeachingBubble" : "Show TeachingBubble" }),
      teachingBubbleVisible && (React.createElement(TeachingBubble, { target: "#targetButton", primaryButtonProps: examplePrimaryButtonProps, secondaryButtonProps: exampleSecondaryButtonProps, onDismiss: toggleTeachingBubbleVisible, headline: "Learn more about purchases" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?"))));
};

const columns = [
  {
    key: 'orderNumber',
    name: 'Order Number',
    fieldName: 'orderNumber',
    minWidth: 50,
    maxWidth: 100,
  },
  {
    key: 'orderDate',
    name: 'Order Date',
    fieldName: 'orderDate',
    minWidth: 100,
    maxWidth: 200,
  },
  {
    key: 'supplier',
    name: 'Supplier',
    fieldName: 'supplier',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: 'product',
    name: 'Product',
    fieldName: 'product',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: 'productQty',
    name: 'Quantity',
    fieldName: 'productQty',
    minWidth: 50,
    maxWidth: 100,
    isResizable: true,
  },
  {
    key: 'remark',
    name: 'Remark',
    fieldName: 'remark',
    minWidth: 200,
    maxWidth: 300,
    isResizable: true,
  },
];

const gridStyles = {
  root: {
    selectors: {
      '& [role=grid]': {
        height: '70vh',
      },
    },
  },
};

const classNames = mergeStyleSets({
  header: {
    margin: '.5em 0',
  },
});

function DataList(props) {
  const onRenderDetailsHeader = (props, defaultRender) => {
    if (!props) {
      return null;
    }
    const onRenderColumnHeaderTooltip = tooltipHostProps => (
      <TooltipHost {...tooltipHostProps} />
    );

    return defaultRender({
      ...props,
      onRenderColumnHeaderTooltip,
    });
  };

  return (
    <div>
      <h1 className={classNames.header}>Invoice List</h1>
      <TeachingBubbleBasicExample   />
      <DetailsList
        styles={gridStyles}
        items={items}
        columns={columns}
        checkboxVisibility={CheckboxVisibility.always}
        layoutMode={DetailsListLayoutMode.fixedColumns}
        constrainMode={ConstrainMode.unconstrained}
        selectionMode={SelectionMode.multiple}
        onRenderDetailsHeader={onRenderDetailsHeader}
        selectionPreservedOnEmptyClick
        ariaLabelForSelectionColumn="Toggle selection"
        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
      />{' '}


    
    </div>
    
  );
}

export default DataList;
