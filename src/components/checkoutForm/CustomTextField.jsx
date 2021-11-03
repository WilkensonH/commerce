import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}> 
      <Controller
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
        }) => (
          <TextField
            required={required}
            label={label}
            control={control}
            fullWidth
            name={name}
            value={value}
            onChange={onChange}
            inputRef={ref} 
          />
        )}        
      />
    </Grid>
  );
};

export default FormInput;
