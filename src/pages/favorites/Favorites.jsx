import PropertyCollection from "../../components/PropertyCollection";

const Favorites = ({ properties, actions }) => {
  return (
    <PropertyCollection
      title="Favorites"
      emptyTitle="No favorites yet"
      emptyMessage="Tap the heart on a property to save it here."
      properties={properties}
      actions={actions}
    />
  );
};

export default Favorites;
