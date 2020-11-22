import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import PropTypes from 'prop-types';

export default function CustomSelect(props) {
    return (
      <FormControl className={"custom-sel-ct " + (props.classes && props.classes.root ? props.classes.root : "")}>
        <Select
          id={props.id}
          value={props.value}
          onChange={props.handleChange}
          classes={{
            selectMenu: "cus-sel-sm"
          }}
          MenuProps={{classes: {paper: "cus-sel-paper", list: "cus-sel-list"} }}
          input={<InputBase className={"custom-sel-inp " + (props.classes && props.classes.input ? props.classes.input : "") }/>}
        >
          <MenuItem disabled value={0} className={"cus-sel-dis-mi"}>
            <em className={"cus-sel-val"}>{props.placeholder}</em>
          </MenuItem>
        {props.children}
        </Select>
      </FormControl>
  );
}
  
CustomSelect.propTypes = {
  id:  PropTypes.string.isRequired,
  // value: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })).isRequired,
  classes: 
    PropTypes.shape({
      root: PropTypes.string,
      input: PropTypes.string,
  }),
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
}