import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const DropdownComponent = ({onChange}) => {
  const [kategoriData, setKategoriData] = useState([]);
  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://192.168.56.1/Bezz/api.php?op=tabel_kategori',
        );
        const json = await response.json();
        setKategoriData(json.data.result);
        console.log(kategoriData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  const handleDropdownChange = item => {
    if (item) {
      setValue(item.value);
      onChange(item);
    }
    console.log(item);
  };

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={kategoriData}
      search
      maxHeight={300}
      labelField="kategori"
      valueField="id"
      placeholder="Kategori"
      searchPlaceholder="Search..."
      value={value}
      onChange={handleDropdownChange}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default DropdownComponent;
