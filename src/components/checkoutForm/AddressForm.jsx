import React, { useState, useEffect } from "react";

import {
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Typography,
} from "@material-ui/core";

import FormInput from "./CustomTextField";
import { useForm, FormProvider } from "react-hook-form";
import { commerce } from "../../lib/commerce";
// import useStyles from '../checkoutForm/checkout/styles'

const AddressForm = ({ checkoutToken }) => {
  // const classes = useStyles()
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const methods = useForm();

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  console.log(countries);
  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  });

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            test({
              ...data,
              shippingCountry,
              shippingSubdivision,
              shippingOption,
            })
          )}
        >
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Zip / Postal Code" />
            <Grid xs={12} sm={6} inherent>
              <InputLabel>Shipping Country</InputLabel>
              <Select
                value={shippingCountry}
                fullWidth
                onChange={(e) => setShippingCountry(e.target.value)}
              >
                {countries.map((country) => (
                  <MenuItem key={country.id} value={country.id}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel align="left">Shipping Subdivision</InputLabel>
              <Select
                value={shippingSubdivision}
                fullWidth
                onChange={(e) => setShippingSubdivision(e.target.value)}
              >
                {Object.entries(shippingSubdivisions)
                  .map(([code, name]) => ({ id: code, label: name }))
                  .map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
            <Grid xs={12} sm={6}>
              <InputLabel align="left">Shipping Options</InputLabel>
              <Select value={""} fullWidth onChange={""}>
                <MenuItem key={""} value={""}>
                  select me
                </MenuItem>
              </Select>
            </Grid>{" "}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
