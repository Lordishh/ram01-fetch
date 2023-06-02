

export const CharactersListComponent = () => {
  const character = [
    {
      id:1,
      name: 'Rick'
    },
    {
      id:2,
      name: 'Morty'
    }
  ]
  return (
    <ul>
      {
        character.map((item) => (
          <li>
            { item.name }
          </li>
        ))
      }
    </ul>
  )
}
