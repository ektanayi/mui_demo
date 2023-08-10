import * as React from 'react';
import '../../pages/Home.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Chip1() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl >
     
      <Select className='avatar-box'
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        onChange={handleChange}
        sx={{ mt: 1,mb:1,ml:1, minWidth: 350,
          height:'40px', 
          borderRadius:'5px 0px 0px 5px'}} 
          size="small"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}