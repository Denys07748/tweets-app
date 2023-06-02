const CardList = () => {
  //   const contacts = useSelector(selectVisibleContacts);

  return (
    <CardList>
      {cards.map(({ id, ...otherProps }) => (
        <CardListItem key={id} id={id} card={otherProps} />
      ))}
    </CardList>
  );
};

export default CardList;
