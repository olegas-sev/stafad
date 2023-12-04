const SearchItem = () => {
  return (
    <>
      <div class="search-block">
        <label for="search">Search:</label>
        <label for="location">Choose Location:</label>
        <select id="location">
          <option value="">All Locations</option>
          <option value="Al Anbar Governorate">Al Anbar Governorate</option>
          <option value="Baghdad Governorate">Baghdad Governorate</option>
          <option value="Basra Governorate">Basra Governorate</option>
          <option value="Babil Governorate">Babil Governorate</option>
          <option value="Dhi Qar Governorate">Dhi Qar Governorate</option>
          <option value="Diyala Governorate">Diyala Governorate</option>
          <option value="Dohuk Governorate">Dohuk Governorate</option>
          <option value="Erbil Governorate">Erbil Governorate</option>
          <option value="Halabja Governorate">Halabja Governorate</option>
          <option value="Karbala Governorate">Karbala Governorate</option>
          <option value="Kirkuk Governorate">Kirkuk Governorate</option>
          <option value="Muthanna Governorate">Muthanna Governorate</option>
          <option value="Maysan Governorate">Maysan Governorate</option>
          <option value="Najaf Governorate">Najaf Governorate</option>
          <option value="Nineveh Governorate">Nineveh Governorate</option>
          <option value="Qadisiyyah Governorate">Qadisiyyah Governorate</option>
          <option value="Saladin Governorate">Saladin Governorate</option>
          <option value="Sulaymaniyah Governorate">
            Sulaymaniyah Governorate
          </option>
          <option value="Wasit Governorate">Wasit Governorate</option>
        </select>
        <button>Search</button>
      </div>
    </>
  );
};
export default SearchItem;
