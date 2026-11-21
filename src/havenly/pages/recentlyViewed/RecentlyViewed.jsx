import PropertyCollection from "../../components/PropertyCollection";

export default function RecentlyViewed({ properties, actions, onRemove, onClear }) {
  return (
    <PropertyCollection
      title="Recently Viewed"
      emptyTitle="No recently viewed properties"
      emptyMessage="Open a property’s details and you’ll find it here."
      properties={properties}
      actions={actions}
      onRemove={onRemove}
      onClear={onClear}
    />
  );
}
