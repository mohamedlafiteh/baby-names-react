import React from "react";
import "./search.css";

export default function SearchInput(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = props.babyNamesData.filter((person) =>
      person.name.toLowerCase().includes(searchTerm)
    );
    props.setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <input
        className='search'
        type='text'
        placeholder='Search'
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
