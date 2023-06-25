import React, { useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@reducers/store';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Major } from '@models/major/major';

interface MajorOptionsProps {
  value: number;
  onChange: (event: ChangeEvent<{ value: number }>) => void;
}

const MajorOptions: React.FC<MajorOptionsProps> = ({ value, onChange }) => {
  const majors = useSelector((state: RootState) => state.majors.majors);
  const [selectedMajor, setSelectedMajor] = useState<number>(value);

  const handleMajorChange = (event: SelectChangeEvent<number>) => {
    const selectedValue = event.target.value as number
    // setValues({ value: selectedValue })
  }

  return (
    <Select
      label='Jurusan'
      value={selectedMajor}
      onChange={handleMajorChange}
      id='form-layouts-separator-select'
      labelId='form-layouts-separator-select-label'
    >
      <MenuItem value={0}>Pilih Jurusan</MenuItem>
      {majors.map((row: Major) => (
        <MenuItem key={row.id} value={row.id}>
          {row.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default MajorOptions;
